import { Response, NextFunction } from "express";
import { Request } from "../interfaces/request.interface";
import { errorResponse } from "../utils/errorResponse";
import { verifyJWToken } from "../utils/jwt.util";
import { prisma } from "../server";

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return errorResponse({
      message: "Token not provided",
      status: 401,
      res,
    });
  }

  try {
    // Check if Token exist in the LogoutToken table
    const isTokenExist = await prisma.blacklistedToken.findFirst({
      where: { token },
    });

    if (isTokenExist) {
      return errorResponse({
        message: "Token is no longer valid",
        status: 401,
        res,
      });
    }
  } catch (err: any) {
    return errorResponse({
      message: "An error occured",
      status: 500,
      res,
    });
  }

  let user = { id: "", email: "", role: "", username: "" };

  try {
    user = await verifyJWToken(token);
  } catch (err: any) {
    return errorResponse({
      message: err.message || "Invalid Token",
      status: 403,
      res,
    });
  }

  req.user = user;
  next();
};
