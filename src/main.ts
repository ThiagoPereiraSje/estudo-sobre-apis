import express, { Express, Request, Response, json } from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(json());

app.get('/', async (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', message: 'Hello world!'});
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})