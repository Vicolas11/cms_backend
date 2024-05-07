import { signAccessJWToken, signRefreshJWToken } from "../../utils/jwt.util";
import { successResponse } from "../../utils/successResponse";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import { auditTrail } from "../../utils/audittrail.util";
import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import { prisma } from "../../server";
import bcrypt from "bcryptjs";

const LoginUserController = catchAsync(async (req: Request, res: Response) => {
  const { email, matricNum, password, role } = req.body;

  try {
    // Check if the user exists
    const user = await prisma.user.findFirst({
      where: { OR: [{ email }, { matricNum }] },
    });

    if (!user) {
      auditTrail({
        status: 404,
        msg: `${email || matricNum || "Anonymous"} attempted login. User not found!`,
        action: "Login User",
        req,
      });

      return errorResponse({
        message: "User doesn't exists!",
        status: 404,
        res,
      });
    }

    if (user.role === "Admin") {
      return errorResponse({
        message: "Can't Login!",
        status: 401,
        res,
      });
    }

    if (user.role !== role) {
      return errorResponse({
        message: `Can't login as ${role}. Change role to ${user.role}!`,
        status: 401,
        res,
      });
    }

    // Verify the password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      auditTrail({
        status: 403,
        action: "Login User",
        msg: `Invalid password. Inputted wrong password for ${email || matricNum}.`,
        req,
      });

      return errorResponse({
        message: "Invalid password!",
        status: 403,
        res,
      });
    }

    const numOfNotOpened = (
      await prisma.complaint.findMany({
        where: { AND: [{ complainerUserId: user.id }, { hasOpened: false }] },
      })
    ).length;

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
      action: "Login User",
      msg: `Login ${email || matricNum} successfully`,
      actorId: user.id,
      req,
    });

    const { password: p, id, role: r, ...rest } = user;

    return successResponse({
      message: "Login successfully",
      data: {
        accessToken,
        refreshToken,
      },
      res,
      other: {
        numOfNotOpened,
      },
    });
  } catch (err: any) {
    const message =
      formatErrMsg(err.message) || err.message || "An error occurred";

    auditTrail({
      status: err.status || 500,
      action: "Login User",
      msg: `${message}. Error occurred when logining ${email || matricNum}.`,
      req,
    });

    return errorResponse({
      message,
      status: err.status || 500,
      res,
    });
  }
});

export default LoginUserController;
