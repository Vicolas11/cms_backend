import { SuccessType } from "../interfaces/success.interface";

export const successResponse = (args: SuccessType) => {
  const { data = null, message, status = 200, res, other = null } = args;
  return res.status(status).json({
    status: true,
    code: res.statusCode,
    message,
    data,
    other,
  });
};
