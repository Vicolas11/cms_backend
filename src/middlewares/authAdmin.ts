import { IJWTCustom } from "../interfaces/jwtcustom.interface";
import { Request } from "../interfaces/request.interface";
import { errorResponse } from "../utils/errorResponse";
import { Response, NextFunction } from "express";

export const authAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user as IJWTCustom;
  const { role } = user;

  if (role !== "Admin") {
    return errorResponse({
      message: "You're not authorized to be here!",
      status: 401,
      res,
    });
  }

  next();
};
