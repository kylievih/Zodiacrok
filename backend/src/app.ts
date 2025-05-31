// src/app.ts
import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes); // Todas as rotas estarão sob /api

export default app;
