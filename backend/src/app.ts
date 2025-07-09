import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the AutoStack backend API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
