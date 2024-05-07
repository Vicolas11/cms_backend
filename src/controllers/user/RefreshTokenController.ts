import { signAccessJWToken, signRefreshJWToken } from "../../utils/jwt.util";
import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { Request } from "../../interfaces/request.interface";
import { successResponse } from "../../utils/successResponse";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import { auditTrail } from "../../utils/audittrail.util";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const RefreshTokenController = catchAsync(
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
          msg: `Attempted getting refresh token. User not found!`,
          action: "Refresh Token",
          req,
          actorId: userId,
        });

        return errorResponse({
          message: "User doesn't exists!",
          status: 404,
          res,
        });
      }

      // Generate Access and Refreshed Token
      const accessToken = await signAccessJWToken({
        role: user.role,
        id: user.id,
      });

      const refreshToken = await signRefreshJWToken({
        role: user.role,
        id: user.id,
      });

      auditTrail({
        action: "Refresh Token",
        msg: `Fetched refresh token successfully`,
        actorId: user.id,
        req,
      });

      return successResponse({
        message: "Fetched refresh token successfully",
        data: {
          accessToken,
          refreshToken,
        },
        res,
      });
    } catch (err: any) {
      const message =
        formatErrMsg(err.message) || err.message || "An error occurred";

      auditTrail({
        status: err.status || 500,
        action: "Refresh Token",
        msg: `${message}. Error occurred when fetching refresh token.`,
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

export default RefreshTokenController;
