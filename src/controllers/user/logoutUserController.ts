import { successResponse } from "../../utils/successResponse";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { Response } from "express";
import { prisma } from "../../server";
import { Request } from "../../interfaces/request.interface";
import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { verify } from "jsonwebtoken";
import { constant } from "../../configs/constant.config";

const { secretKey } = constant;

const LogoutUserController = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(" ")[1];
  const user = req.user as IJWTCustom;
  const userId = user.id;

  try {

    if (!token) {
      return errorResponse({
        message: "Token not provided",
        status: 401,
        res,
      });
    }

    // Get the tokens in the LogoutToken Table
    const allTokens = await prisma.blacklistedToken.findMany();
    const tokenExist = await prisma.blacklistedToken.findUnique({
      where: { token },
    });

    if (!tokenExist) {
      await prisma.blacklistedToken.create({ data: { token, userId } });
    }

    allTokens.map(({ token }) => {
      verify(token, secretKey, async (err, _) => {
        if (err) {
          // Delete Token that are invalid in the LogoutToken table
          await prisma.blacklistedToken.delete({ where: { token } });
        }
      });
    });

    return successResponse({
      message: "Logout successfully",
      data: null,
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

export default LogoutUserController;