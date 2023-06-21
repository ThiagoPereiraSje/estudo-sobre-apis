import express, { Express, Request, Response, json } from 'express'
import dotenv from 'dotenv'

import EstudanteController from './controller/estutante'


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(json());

app.get('/', async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello world!'});
})

//localhost:3000/estudante
app.route("/estudante")
.get(EstudanteController.getAll)
.post(EstudanteController.create)

app.route("/estudante/:id")
  .get(EstudanteController.get)
  .delete(EstudanteController.del)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})