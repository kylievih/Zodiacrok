import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    avatar: String,
    signos: [String],
    progresso: {
      pontos: { type: Number, default: 0 },
      nivel: { type: Number, default: 1 },
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
