import { db } from "src/db";
import { Estudante } from "src/models/estudante";

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