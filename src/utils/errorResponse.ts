import { ErrorType } from "../interfaces/error.interface";

export const errorResponse = (args: ErrorType) => {
  const { message, status, res, errors = null } = args;
  return res.status(status).json({
    status: false,
    code: res.statusCode,
    message,
    errors,
  });
};
