import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return res.json(games);
});

app.post("/ads", (req, res) => {
  return res.json([]);
});

app.get("/games/:id/discord", (req, res) => {
  return res.json([]);
});

app.listen(3333, () => {
  console.log("Server started on port 3000");
});
