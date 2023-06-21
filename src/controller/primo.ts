import { Request, Response } from "express";
import * as PrimoService from "../services/primo"

export function getAll(req: Request, res: Response) {
  try {
    const primos = PrimoService.getAll()
    
    res.status(200).json({
      primos
    })
  } catch (error) {
    res.status(400).json({
      message: 'Falha ao recuperar os dados!'
    })
  }
}

export function get(req: Request, res:Response) {
  try {
    console.log('params: ', req.params);

    res.status(200).json({
      primos: undefined,
    });
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
      primos: undefined,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Falha ao cadastrar os dados!'
    })
  }
}