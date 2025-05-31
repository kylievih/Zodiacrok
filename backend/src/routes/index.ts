import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("API ZodiacRok rodando 🪐");
});

export default router;
