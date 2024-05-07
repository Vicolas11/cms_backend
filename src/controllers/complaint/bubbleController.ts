import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const BubbleController = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as IJWTCustom;
  const userId = user.id;

  try {
    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return errorResponse({
        message: "User doesn't exists!",
        status: 404,
        res,
      });
    }

    const numOfNotReplied = (
      await prisma.complaint.findMany({
        where: {
          AND: [
            {
              OR: [
                { complainerUserId: user.id },
                { reportedToUserId: user.id },
              ],
            },
            { hasReplied: false },
          ],
        },
      })
    ).length;

    return successResponse({
      message: "Fetched successfully",
      data: {
        numOfNotReplied,
      },
      res,
    });
  } catch (err: any) {
    const message =
      formatErrMsg(err.message) || err.message || "An error occurred";

    return errorResponse({
      message,
      status: err.status || 500,
      res,
    });
  }
});

export default BubbleController;
