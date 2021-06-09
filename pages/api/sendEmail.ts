import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import Comment from "../../interfaces/Comment";
import { decrypt, Hash } from "../../lib/encryption/crypto";

function getEmails(comments: Array<Comment>): Array<string> {
  const emails: Array<string> = [];
  comments.forEach((comment) => {
    emails.push(decrypt(comment.email as Hash));
    if (comment.children) {
      emails.push(...getEmails(comment.children));
    }
  });

  return emails;
}

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return new Promise((resolve) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "artedellalettura@gmail.com",
        pass: process.env.GMAIL_PW,
      },
    });

    const comments: Array<Comment> = req.body;
    const emails = getEmails(comments);

    const mailOptions = {
      from: "artedellalettura@gmail.com",
      to: [...emails, "alessiofranceschi2@gmail.com"],
      subject: "Test",
      text: "Example email",
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).json(error);
      } else {
        res.status(200).json(info.envelope);
      }
    });

    resolve();
  });
};
