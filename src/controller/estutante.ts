import { Request, Response } from "express";
import * as EstudanteService from "src/services/estutante"

export function getAll(req: Request, res: Response) {
  try {
    const estudantes = EstudanteService.getAll()
    
    res.status(200).json({
      estudantes
    })
  } catch (error) {
    res.status(400).json({
      message: 'Falha ao recuperar os dados!'
    })
  }
}