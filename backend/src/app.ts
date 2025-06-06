import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";

dotenv.config();

const app = express();

// Configurações
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/auth", authRoutes);

export default app;
