import { db } from "../db";
import { Estudante } from "../models/estudante";


export function save(estudante: Estudante) {
  db.estudantes.push(estudante);
  return { status: 'ok', message: 'Salvo com sucesso!'}
}

export function get(id: number) {
  return db.estudantes.find(e => e.id === id);
}

export function getAll() {
  return db.estudantes;
}

export function del(id: number) {
  const newValue: Estudante[] = []

  db.estudantes.forEach(e => {
    if (id !== e.id) {
      newValue.push(e)
    }
  })

  db.estudantes = newValue;
}