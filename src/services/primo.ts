import { db } from "src/db";
import { Primo } from "src/models/primo";

export function save(primo: Primo) {
  db.primos.push(primo);
  return { status: 'ok', message: 'Salvo com sucesso!'}
}

export function get(id: number) {
  return db.primos.find(e => e.id === id);
}

export function getAll() {
  return db.primos;
}

export function del(id: number) {
  const newValue: Primo[] = []

  db.primos.forEach(e => {
    if (id !== e.id) {
      newValue.push(e)
    }
  })

  db.primos = newValue;
}