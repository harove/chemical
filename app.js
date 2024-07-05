import express from "express";
import "dotenv/config";
import path from "path";

const PORT = process.env.PORT;

const __dirname = process.cwd();
const uploadsDir = path.join(__dirname, "uploads");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(PORT, () => {
  console.log(`Server ON: ${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
