import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { RootState } from '@/app/store'
import { GetterTree, ActionTree, ActionContext, MutationTree } from 'vuex'

import { Deck, State } from '@/app/models/deck'
import Card from '@/app/models/card'

export const name = 'deck'
export const namespaced = true

export const state = (): State => ({
  decks: [],
  deck: {name: `nana`},
  selectedDecks: []
})

export const getters: GetterTree<State, RootState> = {
  decks: (state) => {
    return state.decks
  },
  deck: (state) => {
    console.log('pass')
    return state.deck
  },
}

export const types = {
  GET_DECKS: 'GET_DECKS',
  GET_DECK: 'GET_DECK',
}

export interface Actions<S, R> extends ActionTree<S, R> {
  getDecks (context: ActionContext<S, R>, id: string): void,
  getDeck (context: ActionContext<S, R>, id: string): void
}

export const actions: Actions<State, RootState> = {
  async getDecks ({ commit, state }) {
    // local storage からよしなにデッキを持ってくる
    const decks = []
    commit(types.GET_DECKS, decks)
  },
  async getDeck ({ commit, state }, id: string) {
    // local storage からよしなにデッキを持ってくる
    const deck = {}
    commit(types.GET_DECK, deck)
  }
}

export const mutations: MutationTree<State> = {
  [types.GET_DECKS] (state, decks: Deck[]) {
    state.decks = decks
  },
  [types.GET_DECK] (state, deck: Deck) {
    state.deck = deck
  }
}
