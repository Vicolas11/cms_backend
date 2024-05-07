import GetReportedToUsersController from "../controllers/complaint/getReportedToUsersController";
import DeleteComplaintController from "../controllers/complaint/deleteComplaintController";
import GetAllComplaintController from "../controllers/complaint/getAllComplaintController";
import UpdateComplaintController from "../controllers/complaint/updateComplaintController";
import MakeComplaintController from "../controllers/complaint/makeComplaintController";
import GetComplaintController from "../controllers/complaint/getComplaintController";
import ResponseController from "../controllers/complaint/responseController";
import { authenticateToken } from "../middlewares/authenticateToken";
import { validateRequest } from "../middlewares/validateRequest";
import { Router } from "express";
import {
  MakeComplainSchema,
  ParamSchema,
  QuerySchema,
  RepliedSchema,
  RoleQuerySchema,
  UpdateComplainSchema,
} from "../joi/complain.joi";
import BubbleController from "../controllers/complaint/bubbleController";

const complaintsRouters = Router();

complaintsRouters.use(authenticateToken);

complaintsRouters.post(
  "/complaints",
  validateRequest(MakeComplainSchema),
  MakeComplaintController
);

complaintsRouters.patch(
  "/complaints",
  validateRequest(UpdateComplainSchema),
  UpdateComplaintController
);

complaintsRouters.get(
  "/complaints",
  validateRequest(QuerySchema, "query"),
  GetAllComplaintController
);

complaintsRouters.get(
  "/complaints/reportedtousers",
  validateRequest(RoleQuerySchema, "query"),
  GetReportedToUsersController
);

complaintsRouters.post(
  "/complaints/response",
  validateRequest(RepliedSchema),
  ResponseController
);

complaintsRouters.get("/complaints/bubble", BubbleController);

complaintsRouters.get(
  "/complaints/:id",
  validateRequest(ParamSchema, "params"),
  GetComplaintController
);

complaintsRouters.delete(
  "/complaints/:id",
  validateRequest(ParamSchema, "params"),
  DeleteComplaintController
);

export default complaintsRouters;
