import nodemailer from "nodemailer";

import { MailAdapter, SendMailData } from "../MailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6dd5571f162ae4",
    pass: "622b1799e7fc85",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendMailData) {
    await transport.sendMail({
      from: "Equpe Feedget <oi@feedget.com>",
      to: "Nicolas Sampaio <nicolas.pereira.sampaio16@gmail.com>",
      subject,
      html: body,
    });
  }
}
