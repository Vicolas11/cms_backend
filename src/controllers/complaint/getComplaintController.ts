import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import { auditTrail } from "../../utils/audittrail.util";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const GetComplaintController = catchAsync(
  async (req: Request, res: Response) => {
    let { id } = req.params;
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

      auditTrail({
        msg: `Successfully fetched a users' complaint!`,
        action: "Fetched Users",
        req,
        actorId: userId,
      });

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
          complainer: {
            select: {
              id: true,
              name: true,
              faculty: true,
              department: true,
              matricNum: true,
              role: true,
            },
          },
          response: {
            select: {
              body: true,
              createdAt: true,
            },
          },
        },
        data: {
          hasOpened: true,
        },
      });

      return successResponse({
        message: "Fetched successfully",
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

export default GetComplaintController;
