import { AuditTrailParams } from "../interfaces/audittrail.interface";
import { prisma } from "../server";

export const auditTrail = async ({ req, msg, action, actorId, status = 200 }: AuditTrailParams) => {
  await prisma.auditTrail.create({
    data: {
      action,
      message: msg,
      ipAddress: req.ip || "",
      actorId,
      status,
      userAgent: req.headers["user-agent"] || "",
    },
  });
};
