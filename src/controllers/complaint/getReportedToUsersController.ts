import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";
import { UserRole } from "../../interfaces/util.interfaces";
import { auditTrail } from "../../utils/audittrail.util";
import { IJWTCustom } from "../../interfaces/jwtcustom.interface";

const GetReportedToUsersController = catchAsync(
  async (req: Request, res: Response) => {
    let { currentPage, perPage, role } = req.query;
    const pageSize = +(perPage as string) || 10;
    const pgNum = +(currentPage as string) || 1;
    const skip = (pgNum - 1) * pageSize;
    const userRole = role as UserRole;
    const totalCount = (
      await prisma.user.findMany({ where: { role: userRole } })
    ).length;
    const totalPages = Math.ceil(totalCount / pageSize);
    const user = req.user as IJWTCustom
    const userId = user.id

    try {
      const reportedToUsers = await prisma.user.findMany({
        where: { role: userRole },
        select: {
          id: true,
          name: true,
          faculty: true,
          department: true,
        },
        take: pageSize,
        skip,
      });

      auditTrail({
        msg: `Successfully fetched all ${role} users!`,
        action: "Fetched Users",
        req,
        actorId: userId,
      });

      return successResponse({
        message: "Fetched successfully",
        data: reportedToUsers,
        res,
        other: {
          totalCount,
          totalPages,
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

export default GetReportedToUsersController;
