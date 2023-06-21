import { db } from "../db";
import { Estudante } from "../models/estudante";

export default class EstudanteService {

  static save(estudante: Estudante) {
    db.estudantes.push(estudante);
    return { status: 'ok', message: 'Salvo com sucesso!'}
  }
  
  static get(id: number) {
    return db.estudantes.find(e => e.id === id);
  }
  
  static getAll() {
    return db.estudantes;
  }
  
  static del(id: number) {
    const newValue: Estudante[] = []
  
    db.estudantes.forEach(e => {
      if (id !== e.id) {
        newValue.push(e)
      }
    })
  
    db.estudantes = newValue;
  }
}
