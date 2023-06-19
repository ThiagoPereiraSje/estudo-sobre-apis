import { Estudante } from "./models/estudante"
import { Primo } from "./models/primo"

type Database = {
  estudantes: Estudante[]
  primos: Primo[]
}

export const db: Database = {
  estudantes: [],
  primos: []
}