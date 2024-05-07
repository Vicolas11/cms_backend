import GetAllAuditTrailController from "../controllers/auditrail/getAllAuditTrailController";
import DeleteAuditTrailController from "../controllers/auditrail/deleteAuditTrailController";
import GetAuditTrailController from "../controllers/auditrail/getAuditTrailController";
import { authenticateToken } from "../middlewares/authenticateToken";
import { validateRequest } from "../middlewares/validateRequest";
import { ParamSchema, QuerySchema } from "../joi/complain.joi";
import { authAdmin } from "../middlewares/authAdmin";
import { Router } from "express";

const auditTrailRouters = Router();

auditTrailRouters.use(authenticateToken);
auditTrailRouters.use(authAdmin);

auditTrailRouters.get(
  "/auditrails",
  validateRequest(QuerySchema, "query"),
  GetAllAuditTrailController
);

auditTrailRouters.get(
  "/auditrails/:id",
  validateRequest(ParamSchema, "params"),
  GetAuditTrailController
);

auditTrailRouters.delete(
  "/auditrails/:id",
  validateRequest(ParamSchema, "params"),
  DeleteAuditTrailController
);

export default auditTrailRouters;
