import express from "express";
require("dotenv").config();

const app = express();

app.get("/", (req: any, res: any) => {
  res.send("Bienvenido a mi servidor");
});

export default app;
