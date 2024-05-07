import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import { auditTrail } from "../../utils/audittrail.util";
import { titleCase } from "../../utils/titleCase.util";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const MakeComplaintController = catchAsync(
  async (req: Request, res: Response) => {
    let { subject, body, reportedToUserId } = req.body;
    subject = titleCase(subject);
    const user = req.user as IJWTCustom;
    const userId = user.id;

    try {
      const existComplain = await prisma.complaint.findFirst({
        where: { AND: [{ subject }, { body }, { reportedToUserId }] },
      });

      if (existComplain) {
        auditTrail({
          status: 409,
          msg: `Attempted to create a complaint with the same body and subject. User already exists!`,
          action: "Make Complaint",
          req,
          actorId: userId,
        });

        return errorResponse({
          message: "Complaint already exist!",
          status: 409,
          res,
        });
      }

      const reportedUserExist = await prisma.user.findUnique({
        where: { id: reportedToUserId },
      });

      if (!reportedUserExist) {
        return errorResponse({
          message: "ReportedTo user not found!",
          status: 404,
          res,
        });
      }

      // Avoid Users making complaint to Himself
      if (reportedToUserId === userId) {
        return errorResponse({
          message: "Can't self complain!",
          status: 409,
          res,
        });
      }

      // Make Complaint
      await prisma.complaint.create({
        data: {
          subject,
          body,
          reportedToUserId,
          complainerUserId: userId,
        },
      });

      auditTrail({
        status: 409,
        msg: `Made coplain successfully!`,
        action: "Made Complaint",
        req,
        actorId: userId,
      });

      return successResponse({
        message: "Complaint made successfully!",
        data: null,
        status: 201,
        res,
      });
    } catch (err: any) {
      const message =
        formatErrMsg(err.message) || err.message || "An error occurred";

      auditTrail({
        status: 500,
        msg: `${message}. Error occurred while creating complaint!`,
        action: "Made Complaint",
        req,
        actorId: userId,
      });

      return errorResponse({
        message,
        status: 500,
        res,
      });
    }
  }
);

export default MakeComplaintController;
