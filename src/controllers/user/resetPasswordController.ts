import { successResponse } from "../../utils/successResponse";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import { auditTrail } from "../../utils/audittrail.util";
import { verifyOtp } from "../../utils/otp.util";
import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import { prisma } from "../../server";
import bcrypt from "bcryptjs";

const ResetPasswordController = catchAsync(
  async (req: Request, res: Response) => {
    const { otp, email, password } = req.body;

    try {
      // Check if user with the same email already exists
      const existUser = await prisma.user.findUnique({ where: { email } });

      if (!existUser) {
        auditTrail({
          status: 404,
          msg: `Resetting password user (${email}). User not found!`,
          action: "Reset Password",
          req,
        });

        return errorResponse({
          message: "User not found!",
          status: 404,
          res,
        });
      }

      const verifyOTp = await verifyOtp(existUser.id, otp);

      if (!verifyOTp) {
        auditTrail({
          status: 409,
          msg: `Resetting users' password (${email}). Invalid OTP!`,
          action: "Reset Password",
          req,
        });

        return errorResponse({
          message: "Invalid OTP!",
          status: 409,
          res,
        });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Reset Password
      await prisma.user.update({
        where: { id: existUser.id },
        data: {
          password: hashedPassword,
        },
      });

      await prisma.oTP.delete({
        where: { userId: existUser.id },
      });

      auditTrail({
        action: "Reset Password",
        msg: `Reset Password successfully for email: ${email}`,
        req,
      });

      return successResponse({
        message: "Password updated successfully",
        data: null,
        res,
      });
    } catch (err: any) {
      const message =
        formatErrMsg(err.message) || err.message || "An error occurred";

      auditTrail({
        status: err.status || 500,
        action: "Reset Password",
        msg: `${message}. Error occurred when resetting password ${email}.`,
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

export default ResetPasswordController;
