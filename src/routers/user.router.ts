import ForgetPasswordController from "../controllers/user/forgetPasswordController";
import ChangePasswordController from "../controllers/user/changePasswordController";
import ResetPasswordController from "../controllers/user/resetPasswordController";
import HashPasswordController from "../controllers/user/hashPasswordController";
import { AccountInputSchema, RegisterInputSchema } from "../joi/register.joi";
import LoginAdminController from "../controllers/user/loginAdminController";
import LogoutUserController from "../controllers/user/logoutUserController";
import UpdateUserController from "../controllers/user/updateUserController";
import LoginUserController from "../controllers/user/loginUserController";
import RegisterController from "../controllers/user/registerController";
import { authenticateToken } from "../middlewares/authenticateToken";
import { validateRequest } from "../middlewares/validateRequest";
import {
  HashPwdInputSchema,
  LoginAdminInputSchema,
  LoginInputSchema,
} from "../joi/login.joi";
import { Router } from "express";
import {
  ChangeInputSchema,
  EmailInputSchema,
  ResetPwdInputSchema,
} from "../joi/password.joi";
import UserProfileController from "../controllers/user/userProfileController";
import RefreshTokenController from "../controllers/user/RefreshTokenController";
import ResendForgetPasswordController from "../controllers/user/resendForgetPasswordController";

const userRouters = Router();

userRouters.post(
  "/login",
  validateRequest(LoginInputSchema),
  LoginUserController
);

userRouters.post(
  "/login/admin",
  validateRequest(LoginAdminInputSchema),
  LoginAdminController
);

userRouters.post(
  "/hashpassword",
  validateRequest(HashPwdInputSchema),
  HashPasswordController
);

userRouters.post(
  "/register",
  validateRequest(RegisterInputSchema),
  RegisterController
);

userRouters.post(
  "/forgetpassword",
  validateRequest(EmailInputSchema),
  ForgetPasswordController
);

userRouters.post(
  "/resendforgetpassword",
  validateRequest(EmailInputSchema),
  ResendForgetPasswordController
);

userRouters.post(
  "/resetpassword",
  validateRequest(ResetPwdInputSchema),
  ResetPasswordController
);

userRouters.use(authenticateToken);

userRouters.post(
  "/changepassword",
  validateRequest(ChangeInputSchema),
  ChangePasswordController
);

userRouters.patch(
  "/account",
  validateRequest(AccountInputSchema),
  UpdateUserController
);

userRouters.get("/me", UserProfileController);

userRouters.get("/refreshtoken", RefreshTokenController);

userRouters.post("/logout", LogoutUserController);

export default userRouters;
