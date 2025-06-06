import app from "./app";
import { connectDatabase } from "./config/database";

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI não definida no arquivo .env");
  process.exit(1);
}

connectDatabase(MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
});
