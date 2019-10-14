// import Vuex from 'vuex'
// import * as root from './root'
// import * as decks from './modules/decks'
// import * as cards from './modules/cards'

// export type RootState = root.State
// console.log('pass');
// console.log(decks);
// console.log(decks.name);

// const createState = () => {
//   return new Vuex.Store({
//     state: root.state(),
//     modules: {
//       [decks.name]: decks,
//       [cards.name]: cards,
//     }
//   })
// }

// export default createState

import { Store } from 'vuex'
import { initializeStores } from '~/utils/store-accessor'
const initializer = (store: Store<any>) => initializeStores(store)
export const plugins = [initializer]
export * from '~/utils/store-accessor'