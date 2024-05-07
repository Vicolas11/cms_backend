import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import { auditTrail } from "../../utils/audittrail.util";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const ResponseController = catchAsync(async (req: Request, res: Response) => {
  let { id, body } = req.body;
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

    // Ensure a Student can't make Response or Reply
    if (user.role === "Student" || complaint.reportedToUserId !== userId) {
      return errorResponse({
        message: "You are not unauthorized to perform this!",
        status: 401,
        res,
      });
    }

    if (complaint.hasReplied) {
      return errorResponse({
        message: "This complaint has been responded to!",
        status: 409,
        res,
      });
    }

    // Replied Complaint
    const updatedComplaint = await prisma.complaint.update({
      where: { id },
      include: {
        response: {
          select: {
            body: true,
          },
        },
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
      data: {
        hasReplied: true,
        response: {
          create: {
            body,
            userId,
          },
        },
      },
    });

    auditTrail({
      msg: `Successfully replied a users' complaint!`,
      action: "Reply Complaint",
      req,
      actorId: userId,
    });

    return successResponse({
      message: "Replied successfully",
      data: updatedComplaint,
      res,
    });
  } catch (err: any) {
    return errorResponse({
      message: formatErrMsg(err.message) || err.message || "An error occurred",
      status: 500,
      res,
    });
  }
});

export default ResponseController;
