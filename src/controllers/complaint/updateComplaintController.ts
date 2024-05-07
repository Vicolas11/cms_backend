import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import { auditTrail } from "../../utils/audittrail.util";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const UpdateComplaintController = catchAsync(
  async (req: Request, res: Response) => {
    const { id, subject, body, reportedToUserId } = req.body;
    const user = req.user as IJWTCustom;
    const userId = user.id;

    try {
      const complaint = await prisma.complaint.findUnique({ where: { id } });

      if (!complaint) {
        return errorResponse({
          message: "Complaint not found!",
          status: 404,
          res,
        });
      }

      if (complaint.complainerUserId !== userId) {
        return errorResponse({
          message: "You are not unauthorized to perform this!",
          status: 401,
          res,
        });
      }

      if (complaint.hasReplied) {
        return errorResponse({
          message: "Can't update. Complain has been replied!",
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

      const updatedComplaint = await prisma.complaint.update({
        where: { id },
        include: {
          reportedTo: {
            select: {
              id: true,
              name: true,
              faculty: true,
              department: true,
              role: true,
            },
          },
        },
        data: { subject, body, reportedToUserId, hasOpened: true },
      });

      auditTrail({
        msg: `Successfully updated a users' complaint!`,
        action: "Update Complaint",
        req,
        actorId: userId,
      });

      return successResponse({
        message: "Updated complaint successfully!",
        data: updatedComplaint,
        res,
      });
    } catch (err: any) {
      return errorResponse({
        message:
          formatErrMsg(err.message) || err.message || "An error occurred",
        status: 500,
        res,
      });
    }
  }
);

export default UpdateComplaintController;
