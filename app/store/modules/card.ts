import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

import Deck from '@/app/models/deck'
import Card from '@/app/models/card'

export interface ICardState {
  name: string
  count: number
}

@Module({ stateFactory: true, namespaced: true, name: 'card' })
export default class DeckCard extends VuexModule implements ICardState {
  name: string = ''
  count: number = 0

  @Mutation
  setName(name: string) {
    console.log(`一旦のカード名: ${name}`)
    this.name = name
  }
  setCount(count: number) {
    console.log(`一旦のカード数: ${count}`)
    this.count = count
  }

  @Action
  setCardName(name: string) {
    this.setName(name)
  }
  setCardCount(count: number) {
    this.setCardCount(count)
  }
}
