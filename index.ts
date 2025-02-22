import express, { Request, Response } from 'express';
import cors, { CorsOptions } from "cors";
import componentRouter from "./apps/controllers/Report/Review/component.routes";
import dotenv from 'dotenv';

const app = express();
app.use(express.json());

dotenv.config();

const env = process.env.NODE_ENV;
if (env === 'production') {
  const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
      if (origin === process.env.FRONTEND_URL) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }
  };
  app.use(cors(corsOptions));
}

app.get('/', (_req: Request, res: Response) => {
  res.send('Asset Management API');
});

app.use("/api/component", componentRouter);

const port = process.env.NODE_PORT;
const host = process.env.NODE_HOST;
app.listen(port, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
