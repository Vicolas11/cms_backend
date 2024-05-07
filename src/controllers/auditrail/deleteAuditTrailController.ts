import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const DeleteAuditTrailController = catchAsync(
  async (req: Request, res: Response) => {
    let { id } = req.params;

    try {
      const auditTrail = await prisma.auditTrail.findUnique({
        where: { id },
      });

      if (!auditTrail) {
        return errorResponse({
          message: "Auditrail not found!",
          status: 404,
          res,
        });
      }

      // Deleted Auditrail
      await prisma.auditTrail.delete({ where: { id } });

      return successResponse({
        message: "Deleted auditrail successfully!",
        data: auditTrail,
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

export default DeleteAuditTrailController;
