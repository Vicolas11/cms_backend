import { successResponse } from "../../utils/successResponse";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

const HashPasswordController = catchAsync(async (req: Request, res: Response) => {
  const { password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    return successResponse({
      message: "Hashed Password!",
      data: hashedPassword,
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

export default HashPasswordController;
