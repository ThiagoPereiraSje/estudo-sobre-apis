import { Request, Response, NextFunction } from 'express'

export function auth(req: Request, res: Response, next: NextFunction) {
  console.log('headers: ', req.headers);

  if (req.headers.authorization === 'autorizado') {
    next();
  } else {
    res.status(401).json({ message: 'Usuário não autorizado!' })
  }

}