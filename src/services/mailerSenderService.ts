import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { constant } from "../configs/constant.config";

const { mailerSendAPIKey } = constant;

const mailerSend = new MailerSend({
  apiKey: mailerSendAPIKey as string,
});

const sentFrom = new Sender(
  "admin@trial-o65qngkvw93lwr12.mlsender.net",
  "Complaint Management System (CMS)"
);

interface MailerSendParams {
  subject: string;
  emailTo: string;
  data: {
    otp: string;
    name: string;
    email: string;
  };
}

export const sendMailer = async ({
  subject,
  emailTo,
  data,
}: MailerSendParams) => {
  const recipients = [
    new Recipient(emailTo, "Complaint Management System (CMS)"),
  ];
  const personalization = [
    {
      email: emailTo,
      data,
    },
  ];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject(subject)
    .setTemplateId("pq3enl6nq7842vwr")
    .setPersonalization(personalization);

  const response = await mailerSend.email.send(emailParams);
  return response;
};
