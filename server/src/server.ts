import express from "express";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;
  const result = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });
  return res.status(201).json({ data: result });
});

app.get("/feedbacks", async (req, res) => {
  const result = await prisma.feedback.findMany();

  return res.status(200).json(result);
});

app.listen(3333, () => {
  console.log("Server Running");
});
