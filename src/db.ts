import { Estudante } from "./models/estudante"
import { Primo } from "./models/primo"

type Database = {
  estudantes: Estudante[]
  primos: Primo[]
}

export const db: Database = {
  estudantes: [
    {id: 1, nome: "Thiago", trilha: "Dados"}
  ],
  primos: [
    {id: 1, nome: "Thiago", trilha: "Frontend"}
  ]
}