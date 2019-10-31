import Vue from 'vue'
import Vuex from 'vuex'
import * as root from './root'
import * as deck from './modules/deck'
import * as card from './modules/card'

export type RootState = root.State
console.log(deck.name)
console.log(deck.namespaced)

Vue.use(Vuex)

export default () => {
  console.log(`pass to createState`)
  return new Vuex.Store({
    state: root.state(),
    modules: {
      [deck.name]: deck,
    }
  })
}

