import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import { auditTrail } from "../../utils/audittrail.util";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";
import bcrypt from "bcryptjs";

const ChangePasswordController = catchAsync(
  async (req: Request, res: Response) => {
    const { id, oldpassword, newpassword } = req.body;
    const user = req.user as IJWTCustom;
    const userId = user.id;

    try {
      // Check if user with the same email already exists
      const existUser = await prisma.user.findFirst({ where: { id } });

      if (!existUser) {
        auditTrail({
          status: 404,
          msg: `Changing users' password. User not found!`,
          action: "Change Password",
          req,
          actorId: userId,
        });

        return errorResponse({
          message: "User not found!",
          status: 404,
          res,
        });
      }

      if (existUser.id !== userId) {
        return errorResponse({
          message: "You are not unauthorized to perform this!",
          status: 401,
          res,
        });
      }

      // Verify the password
      const passwordMatch = await bcrypt.compare(
        oldpassword,
        existUser.password
      );

      if (!passwordMatch) {
        auditTrail({
          status: 403,
          action: "Change Password",
          msg: `Invalid password. Inputted wrong password.`,
          req,
          actorId: userId,
        });

        return errorResponse({
          message: "Invalid password!",
          status: 403,
          res,
        });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(newpassword, 10);

      // Reset Password
      await prisma.user.update({
        where: { id: existUser.id },
        data: {
          password: hashedPassword,
        },
      });

      auditTrail({
        action: "Change Password",
        msg: `Change Password successfully`,
        req,
        actorId: userId,
      });

      return successResponse({
        message: "Password changed successfully",
        data: null,
        res,
      });
    } catch (err: any) {
      const message =
        formatErrMsg(err.message) || err.message || "An error occurred";

      auditTrail({
        status: err.status || 500,
        action: "Chanage Password",
        msg: `${message}. Error occurred while changing password.`,
        req,
        actorId: userId,
      });

      return errorResponse({
        message,
        status: err.status || 500,
        res,
      });
    }
  }
);

export default ChangePasswordController;
