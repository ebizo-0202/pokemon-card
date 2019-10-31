import { Card } from './card'

export type Deck = {
  id?: number
  name?: string
  cards?: Card[]
}

export default Deck

export interface State {
  decks: Deck[],
  deck: Deck,
  selectedDecks: Deck[]
}