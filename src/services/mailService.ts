import { MailInterface } from "../interfaces/mail.interface";
import { Request } from "../interfaces/request.interface";
import { auditTrail } from "../utils/audittrail.util";
import { constant } from "../configs/constant.config";
import { envConfig } from "../configs/env.config";
import nodemailer from "nodemailer";

const { dev } = envConfig;
const { SMTPHost, SMTPUsername, SMTPassword, SMTPort } = constant;

export default class MailService {
  private static instance: MailService;
  private transporter!: nodemailer.Transporter;
  private reque: Request | undefined;

  private constructor(req?: Request) {
    this.reque = req;
  }

  //INSTANCE CREATE FOR MAIL
  static getInstance() {
    if (!MailService.instance) {
      MailService.instance = new MailService();
    }

    return MailService.instance;
  }

  //CREATE CONNECTION FOR LOCAL
  async createLocalConnection() {
    let account = await nodemailer.createTestAccount();
    this.transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });
  }

  //CREATE A CONNECTION FOR LIVE
  async createConnection() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "samanta13@ethereal.email",
        pass: "tZvf6X7MggqHTVXgnJ",
      },
    });
  }

  //SEND MAIL
  async sendMail(
    requestId: string | number | string[],
    options: MailInterface
  ) {
    this.transporter
    return await this.transporter
      .sendMail({
        from: `${process.env.SMTP_SENDER || options.from}`,
        to: options.to,
        cc: options.cc,
        bcc: options.bcc,
        subject: options.subject,
        text: options.text,
        html: options.html,
      })
      .then(async (info: any) => {
        auditTrail({
          msg: `${requestId} - Mail sent successfully to ${options.to}!!`,
          action: "Send Email",
          req: this.reque as Request,
        });

        console.log(`${requestId} - Mail sent successfully!!`);
        console.log(
          `${requestId} - [MailResponse]=${info.response} [MessageID]=${info.messageId}`
        );

        if (dev) {
          console.log(
            `${requestId} - Nodemailer ethereal URL: ${nodemailer.getTestMessageUrl(
              info
            )}`
          );
        }
        return info;
      });
  }

  //VERIFY CONNECTION
  async verifyConnection() {
    return this.transporter.verify();
  }

  //CREATE TRANSPORTER
  getTransporter() {
    return this.transporter;
  }
}
