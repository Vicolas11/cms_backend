import { IEnvConfig } from "../interfaces/env.interface";
import { config } from "dotenv";

config();

const ENV = (process.env.NODE_ENV as string) || "development";

export const envConfig: IEnvConfig = {
  test: ENV === "test",
  dev: ENV === "development",
  prod: ENV === "production",
  port: +(process.env.PORT as unknown as number) || 8080
};
