import { Card } from './cardTypes'

export interface Deck {
  id?: number
  name?: string
  cards?: Card[]
}

export interface State {
  deck: Card[],
  decks: Deck[],
  selectedDecks: Deck[],
}
