import express from 'express'

import * as EstudanteController from '../controller/estutante'

const router = express.Router();

router.route("/")
.get(EstudanteController.getAll)
.post(EstudanteController.create)

router.route("/:id")
  .get(EstudanteController.get)
  .delete(EstudanteController.del)


export default router;