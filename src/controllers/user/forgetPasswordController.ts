import { sendMailer } from "../../services/mailerSenderService";
import { successResponse } from "../../utils/successResponse";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import { auditTrail } from "../../utils/audittrail.util";
import { generateOtp } from "../../utils/otp.util";
import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import { prisma } from "../../server";

const ForgetPasswordController = catchAsync(
  async (req: Request, res: Response) => {
    const { email } = req.body;

    try {
      // Check if user with the same email already exists
      const existingUser = await prisma.user.findUnique({ where: { email } });

      if (!existingUser) {
        auditTrail({
          status: 404,
          msg: `Initiate password reset (${email}). User not found!`,
          action: "Forget Password",
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
        // Delete OTP if it existing OTP time/date is expired
        if (
          currentDate.getTime() > new Date(existOtp.otpExpiration).getTime()
        ) {
          await prisma.oTP.delete({ where: { userId: existingUser.id } });
        } else {
          return errorResponse({
            message: "Reset password has been sent to your email already!",
            status: 409,
            res,
          });
        }
      }

      // Create the new user
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
        console.log("is here => ", error);
        return errorResponse({
          message: error.message,
          status: 500,
          res,
        });
      }

      auditTrail({
        status: 201,
        action: "Forget Password",
        msg: `Forget Password with the email (${email}). OTP sent successfully!`,
        req,
      });

      return successResponse({
        message: "Forget Password OTP sent successfully",
        data: null,
        res,
      });
    } catch (err: any) {
      console.log(err);
      const message =
        formatErrMsg(err.message) || err.message || "An error occurred";

      auditTrail({
        status: err.status || 500,
        action: "Forget Password",
        msg: `${message}. Error occurred when forgetting password ${email}.`,
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

export default ForgetPasswordController;
