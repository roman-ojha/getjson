import express from "express";
import dotenv from "dotenv";
import router from "../routes/route.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(router);

app.listen(PORT, () => {
  console.log(`Starting Server on ${PORT}`);
});
