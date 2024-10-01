import express, { Request, Response } from "express";
// import path from 'path';
import * as dotenv from "dotenv";
dotenv.config();
import user from "./routes/user-routes";

const app = express();
const port = 3003;
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("My auth server lol");
});

app.use("/user", user);

app.listen(port, () => {
  console.log(`Auth server running on ${port}`);
});

export default app;
