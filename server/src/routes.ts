import express, { Request, Response } from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/Nodemailer-MailAdapter";

import { PrismaFeedbacksRepository } from "./repositories/prisma/Prisma-FeedbacksRepository";
import { SubmitFeedbackUseCase } from "./use-cases/SubmitFeedback-UseCase";

export const routes = express.Router();

routes.post("/feedbacks", async (req: Request, res: Response) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodeMailerAdapter = new NodemailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodeMailerAdapter
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
