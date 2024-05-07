import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import { auditTrail } from "../../utils/audittrail.util";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const DeleteComplaintController = catchAsync(
  async (req: Request, res: Response) => {
    let { id } = req.params;
    const user = req.user as IJWTCustom;
    const userId = user.id;

    try {
      const complaint = await prisma.complaint.findUnique({
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
      });

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

      if (!complaint.hasReplied) {
        return errorResponse({
          message: "Can't delete. Yet to get reply",
          status: 409,
          res,
        });
      }

      await prisma.complaint.delete({ where: { id } });

      auditTrail({
        msg: `Successfully deleted a users' complaint!`,
        action: "Delete Complaint",
        req,
        actorId: userId,
      });

      return successResponse({
        message: "Deleted complaint successfully!",
        data: complaint,
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

export default DeleteComplaintController;
