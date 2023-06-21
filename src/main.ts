import express, { Express, Request, Response, json } from 'express'
import dotenv from 'dotenv'

import estudanteRouter from './routes/estudante'


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(json());

app.get('/', async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello world!'});
})

//localhost:3000/estudante
app.use("/estudante", estudanteRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})