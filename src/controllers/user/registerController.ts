import { getDept, getFaculty } from "../../utils/getDeptFaculty.util";
import { randomAvatar } from "../../utils/random.avatar.util";
import { successResponse } from "../../utils/successResponse";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import { auditTrail } from "../../utils/audittrail.util";
import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import { prisma } from "../../server";
import bcrypt from "bcryptjs";

const RegisterController = catchAsync(async (req: Request, res: Response) => {
  let { role, name, faculty, department, matricNum, email, password, gender } =
    req.body;
  matricNum = `${matricNum}`.toUpperCase();

  try {
    // Check if user with the same email already exists
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ email }, { matricNum }] },
    });
    const deanUser = await prisma.user.findFirst({
      where: { AND: [{ role: "Dean" }, { faculty }] },
    });
    const hodUser = await prisma.user.findFirst({
      where: { AND: [{ role: "HOD" }, { department }] },
    });
    const studAffair = await prisma.user.findFirst({
      where: { AND: [{ role: "Student_Affairs" }] },
    });

    if (existingUser) {
      auditTrail({
        status: 409,
        msg: `Attempted to register a new user (${email}). User already exists!`,
        action: "Register User",
        req,
      });

      return errorResponse({
        message: "User already exists",
        status: 409,
        res,
      });
    }

    // Ensure to Register only one Student Affairs
    if (role === "Student_Affairs" && studAffair) {
      return errorResponse({
        message: `Student Affairs account already exist!`,
        status: 409,
        res,
      });
    }

    // Ensure to Register only one account for each Department
    if (role === "HOD" && hodUser) {
      return errorResponse({
        message: `HOD of ${getDept(department)} department account already exist!`,
        status: 409,
        res,
      });
    }

    // Ensure to Register only one account for each Faculty
    if (role === "Dean" && deanUser) {
      return errorResponse({
        message: `DEAN College of ${getFaculty(faculty)} account already exist!`,
        status: 409,
        res,
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await prisma.user.create({
      data: {
        role,
        name,
        email,
        gender,
        faculty: role === "Dean" ? faculty : undefined,
        department:
          role === "Student" || role === "HOD" ? department : undefined,
        matricNum: role === "Student" ? matricNum : undefined,
        avatar: randomAvatar(gender === "Male"),
        password: hashedPassword,
      },
    });

    // Remove the password field for security reasons
    Reflect.deleteProperty(newUser, "password");

    auditTrail({
      status: 201,
      action: "Register User",
      msg: `Register ${email} successfully`,
      req,
    });

    return successResponse({
      message: "Register successfully!",
      data: null,
      status: 201,
      res,
    });
  } catch (err: any) {
    const message =
      formatErrMsg(err.message) || err.message || "An error occurred";

    auditTrail({
      status: err.status || 500,
      action: "Register User",
      msg: `${message}. Error occurred when registering ${email}.`,
      req,
    });

    return errorResponse({
      message,
      status: err.status || 500,
      res,
    });
  }
});

export default RegisterController;
