import { Request } from "./request.interface";
import { Request as Req } from "express";

export interface AuditTrailParams {
  req: Request | Req;
  msg: string;
  action: string;
  actorId?: string;
  status?: number;
}
