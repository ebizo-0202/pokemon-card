import { RootState } from '..'
import createState from '..'
import { GetterTree, ActionTree, ActionContext, MutationTree } from 'vuex'
import { Card, State } from './cardTypes'

createState()

export const name = 'cards'
export const namespaced = true

export const state = (): State => ({
  card: {},
})

export const getters: GetterTree<State, RootState> = {
  card: (state) => {
    return state.card
  },
}

export const types = {
  SET_CARD: 'SET_CARD'
}

export interface Actions<S, R> extends ActionTree<S, R> {
  setCard (context: ActionContext<S, R>, card: Card): void,
}

export const actions: Actions<State, RootState> = {
  async setCard ({ commit }, card: Card) {

    commit(types.SET_CARD, card)
  },
}

export const mutations: MutationTree<State> = {
  [types.SET_CARD] (state, card: Card) {
    state.card = card
  },
}