import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import { auditTrail } from "../../utils/audittrail.util";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const GetAllComplaintController = catchAsync(
  async (req: Request, res: Response) => {
    let { currentPage, perPage } = req.query;
    const pageSize = +(perPage as string) || 10;
    const pgNum = +(currentPage as string) || 1;
    const skip = (pgNum - 1) * pageSize;
    const user = req.user as IJWTCustom;
    const userId = user.id;
    const totalCount = (
      await prisma.complaint.findMany({
        where: {
          OR: [{ complainerUserId: userId }, { reportedToUserId: userId }],
        },
      })
    ).length;
    const totalPages = Math.ceil(totalCount / pageSize);

    try {
      const complaints = await prisma.complaint.findMany({
        orderBy: { createdAt: "desc" },
        where: {
          OR: [{ complainerUserId: userId }, { reportedToUserId: userId }],
        },
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
        take: pageSize,
        skip,
      });

      const numOfNotReplied = (
        await prisma.complaint.findMany({
          where: {
            AND: [
              {
                OR: [
                  { complainerUserId: userId },
                  { reportedToUserId: userId },
                ],
              },
              { hasReplied: false },
            ],
          },
        })
      ).length;

      auditTrail({
        msg: `Successfully fetched all users' complaints!`,
        action: "Fetched Users",
        req,
        actorId: userId,
      });

      return successResponse({
        message: "Fetched successfully",
        data: complaints,
        res,
        other: {
          totalCount,
          totalPages,
          numOfNotReplied,
        },
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

export default GetAllComplaintController;
