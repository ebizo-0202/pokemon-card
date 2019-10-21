import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

import Deck from '@/app/models/deck'
import Card from '@/app/models/card'

export interface IDeckState {
  decks: Deck[],
  deck: Card[],
  selectedDecks: Deck[]
}

@Module({ stateFactory: true, namespaced: true, name: 'deck' })
export default class DeckCreator extends VuexModule implements IDeckState {
  cards: Card[] = []
  decks: Deck[] = []
  deck: Card[] = []
  selectedCardName: string = ''
  selectedCardCount: number = 0
  selectedDecks: Deck[] = []

  @Mutation
  addCard(card: Card) {
    this.deck = [...this.deck, card]
  }
  setCardName(name: string) {
    this.selectedCardName = name
  }
  setCardCount(count: number) {
    this.selectedCardCount = count
  }

  @Action
  addCards(cardName: string, count: number) {
    let card:Card = {}
    card.name = cardName
    console.log(`${cardName} を ${count} 枚追加します`)
    this.addCard(card)
  }
}
