import express, { Express, json, Request, Response, urlencoded } from "express";
import errorHandler from "strong-error-handler";
import dotenv from "dotenv";
import router from "./routes";
import cors from 'cors';

dotenv.config();

const app: Express = express();

// middleware for parsing application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

// middleware for json body parsing
app.use(json({ limit: "5mb" }));

app.use(cors())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  next();
})

app.use(router);
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Episodes API");
});

app.use("**", (req: Request, res: Response) => {
  res.status(404).json({ error: "Route/Method not implemented" });
});

app.use(
  errorHandler({
    debug: app.get("env") === "development",
    log: true,
  })
);

export default app;
