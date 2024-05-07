import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const GetAllAuditTrailController = catchAsync(
  async (req: Request, res: Response) => {
    let { currentPage, perPage } = req.query;
    const pageSize = +(perPage as string) || 10;
    const pgNum = +(currentPage as string) || 1;
    const skip = (pgNum - 1) * pageSize;
    const totalCount = await prisma.auditTrail.count();
    const totalPages = Math.ceil(totalCount / pageSize);

    try {
      const auditTrail = await prisma.auditTrail.findMany({
        orderBy: { timestramp: "desc" },
        take: pageSize,
        skip,
      });

      return successResponse({
        message: "Fetched successfully",
        data: auditTrail,
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

export default GetAllAuditTrailController;
