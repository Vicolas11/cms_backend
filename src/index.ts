import { PrismaClientValidationError } from "@prisma/client/runtime/binary";
import complaintsRouters from "./routers/complaint.router";
import auditTrailRouters from "./routers/auditrail.router";
import { errorResponse } from "./utils/errorResponse";
import { envConfig } from "./configs/env.config";
import userRouters from "./routers/user.router";
import { Response } from "http-status-codez";
import { startServer } from "./server";
import compression from "compression";
import xssShield from "xss-shield";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import express, {
  Application,
  NextFunction,
  Request,
  Response as Res,
} from "express";

(async () => {
  // Initialized Express Application
  const app: Application = express();

  // Prevent Cross-site Scripting Attack
  app.use(xssShield.xssShield());

  // Enables Cross-Origin Resource Sharing for various methods(POST,GET,DELETE...)
  app.use(cors());

  // Parses incoming requests with JSON payloads
  app.use(express.json({ limit: "1mb" }));

  // Parses incoming requests with urlencoded payloads
  app.use(express.urlencoded({ extended: true }));

  // Compress response bodies for every request
  app.use(compression());

  // Add secure HTTP headers
  app.use(
    helmet({
      crossOriginEmbedderPolicy: !envConfig.dev,
      contentSecurityPolicy: !envConfig.dev,
    })
  );

  // Logger middleware using Morgan
  app.use(
    morgan(
      ":date :method :url :status :response-time ms - :res[content-length]"
    )
  );

  app.use((err: Error, _req: Request, res: Res, _next: NextFunction) => {
    res.status(500).send(`Something went wrong. ${err.message}`);
  });

  app.get("/", (_req: Request, res: Res) => {
    res.send('<h1 style="text-align: center;">CMS Server is Ready 👌!</h1>');
  });

  // Handle Prisma Error Middleware Handler
  app.use((err: any, _: Request, res: Res, next: NextFunction) => {
    if (err instanceof PrismaClientValidationError) {
      const status = Response.HTTP_CONFLICT;
      const message = err.message.replace(/\n/g, "");
      res.status(status).json({
        statusCode: status,
        message: message,
      });
    } else {
      next(err);
    }
  });

  app.use("/api/auth", userRouters);
  app.use("/api", complaintsRouters);
  app.use("/api", auditTrailRouters);

  app.all("*", (req, res) =>
    errorResponse({
      message: `Can't find ${req.originalUrl} on this route.`,
      status: Response.HTTP_NOT_FOUND,
      res,
    })
  );

  // Start Server
  startServer(app);
})();
