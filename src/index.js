import express from "express";
import dotenv from "dotenv";
import router from "../routes/route.js";
import bodyParser from "body-parser";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Starting Server on ${PORT}`);
});
