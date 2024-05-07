import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import { auditTrail } from "../../utils/audittrail.util";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const UserProfileController = catchAsync(
  async (req: Request, res: Response) => {
    const user = req.user as IJWTCustom;
    const userId = user.id;

    try {
      // Check if the user exists
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        auditTrail({
          status: 404,
          msg: `Attempted getting Login user profile. User not found!`,
          action: "Get User",
          req,
        });

        return errorResponse({
          message: "User doesn't exists!",
          status: 404,
          res,
        });
      }

      const numOfNotOpened = (
        await prisma.complaint.findMany({
          where: { AND: [{ complainerUserId: user.id }, { hasOpened: false }] },
        })
      ).length;

      auditTrail({
        action: "Get User",
        msg: `Get user data successfully`,
        actorId: user.id,
        req,
      });

      const { password: p, id, role: r, ...rest } = user;

      return successResponse({
        message: "Fetched successfully",
        data: {
          ...rest,
          numOfNotOpened,
        },
        res,
      });
    } catch (err: any) {
      const message =
        formatErrMsg(err.message) || err.message || "An error occurred";

      auditTrail({
        status: err.status || 500,
        action: "Get User",
        msg: `${message}. Error occurred when fetching user data.`,
        actorId: user.id,
        req,
      });

      return errorResponse({
        message,
        status: err.status || 500,
        res,
      });
    }
  }
);

export default UserProfileController;
