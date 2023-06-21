import { Request, Response } from "express";
import * as EstudanteService from "../services/estutante"

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

export function get(req: Request, res:Response) {
  try {
    const estudante = EstudanteService.get(Number(req.params.id))

    res.status(200).json(estudante);
  } catch (error) {
    res.status(400).json({
      message: 'Falha ao recuperar os dados!'
    })
  }
}

export function create(req: Request, res:Response) {
  try {
    console.log('body: ', req.body);

    res.status(201).json({
      estudante: undefined,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Falha ao cadastrar os dados!'
    })
  }
}

export function del(req: Request, res:Response) {
  try {
    console.log('params: ', req.params);

    res.status(200).json({
      estudante: undefined,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Falha ao excluír os dados!'
    })
  }
}