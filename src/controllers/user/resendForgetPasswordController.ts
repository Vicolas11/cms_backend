import { sendMailer } from "../../services/mailerSenderService";
import { successResponse } from "../../utils/successResponse";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import { auditTrail } from "../../utils/audittrail.util";
import { generateOtp } from "../../utils/otp.util";
import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import { prisma } from "../../server";

const ResendForgetPasswordController = catchAsync(
  async (req: Request, res: Response) => {
    const { email } = req.body;

    try {
      // Check if user with the same email already exists
      const existingUser = await prisma.user.findUnique({ where: { email } });

      if (!existingUser) {
        auditTrail({
          status: 404,
          msg: `Initiate resend password reset (${email}). User not found!`,
          action: "Resend Forget Password",
          req,
        });

        return errorResponse({
          message: "User not found!",
          status: 404,
          res,
        });
      }

      //Generate OTP
      const otp = generateOtp(6);
      let currentDate = new Date();
      let otpExpiration = currentDate.setMinutes(currentDate.getMinutes() + 10);

      const existOtp = await prisma.oTP.findUnique({
        where: { userId: existingUser.id },
      });

      if (existOtp) {
        await prisma.oTP.delete({ where: { userId: existingUser.id } });
      }

      // Create new OTP
      await prisma.oTP.create({
        data: {
          otp,
          userId: existingUser.id,
          otpExpiration: new Date(otpExpiration),
        },
      });

      //Send forget password email
      let data = {
        otp,
        name: existingUser.name.split(" ")[0],
        email: existingUser.email,
      };

      try {
        const mailerSend = await sendMailer({
          subject: "Reset Password",
          emailTo: email,
          data,
        });

        if (mailerSend.statusCode !== 202) {
          return errorResponse({
            message: "Error occurred while sending email",
            status: mailerSend.statusCode,
            res,
          });
        }
      } catch (error: any) {
        console.log("error is here => ", error);
        return errorResponse({
          message: error.message,
          status: 500,
          res,
        });
      }

      auditTrail({
        status: 201,
        action: "Resend Forget Password",
        msg: `Resend Forget Password with the email (${email}). OTP sent successfully!`,
        req,
      });

      return successResponse({
        message: "Resend Forget Password OTP sent successfully",
        data: null,
        res,
      });
    } catch (err: any) {
      console.log(err);
      const message =
        formatErrMsg(err.message) || err.message || "An error occurred";

      auditTrail({
        status: err.status || 500,
        action: "Resend Forget Password",
        msg: `${message}. Error occurred when resending forget password ${email}.`,
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

export default ResendForgetPasswordController;
