import { prisma } from "../server";

//Generate OTP
export const generateOtp = function (len: number): string {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < len; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }

  return OTP;
};

//Verify Generated OTP
export const verifyOtp = async function (userId: string, otp: string) {
  let existOtp = await prisma.oTP.findFirst({
    where: { AND: [{ userId }, { otp }] },
  });
  const currentDate = new Date();

  if (!existOtp || existOtp.otpExpiration < currentDate) {
    return false;
  }

  return true;
};
