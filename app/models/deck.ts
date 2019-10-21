import { Card } from './card'

export type Deck = {
  id?: number
  name?: string
  cards?: Card[]
}

export default Deck