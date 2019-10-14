import { RootState } from '..'
import { GetterTree, ActionTree, ActionContext, MutationTree } from 'vuex'
import { Deck, State } from './deckTypes'
import { Card } from './cardTypes'

export const name = 'decks'
export const namespaced = true

export const state = (): State => ({
  decks: [],
  deck: [],
  selectedDecks: []
})

export const getters: GetterTree<State, RootState> = {
  decks: (state) => {
    return state.decks
  },
  deck: (state) => {
    return state.deck
  },
  selectedDecks: (state) => {
    return state.selectedDecks
  }
}

export const types = {
  ADD_CARD: 'ADD_CARD'
}

export interface Actions<S, R> extends ActionTree<S, R> {
  addCard (context: ActionContext<S, R>, card: Card): void,
}

export const actions: Actions<State, RootState> = {
  async addCard ({ commit, state }, card: Card) {

    commit(types.ADD_CARD, card)
  },
}

export const mutations: MutationTree<State> = {
  [types.ADD_CARD] (state, card: Card) {
    // local strage で良い感じにする
    state.deck.push(card)
  },
}

const isArea = (arg: any): arg is Card => {
  return arg.id !== undefined
}
