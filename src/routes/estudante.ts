import express from 'express'

import * as EstudanteController from '../controller/estutante'
import { auth } from '../middleware/auth';

const router = express.Router();

router.route("/")
.get(EstudanteController.getAll)
.post(auth, EstudanteController.create)

router.route("/:id")
  .get(EstudanteController.get)
  .delete(EstudanteController.del)


export default router;