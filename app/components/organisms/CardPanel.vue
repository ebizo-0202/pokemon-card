<template>
  <p>{{deck}}</p>

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import * as deck from '@/app/store/modules/deck'
//import * as createState from '@/app/store'
//createState
console.log(deck.name)
console.log(deck.namespaced)

const Deck = namespace(deck.name)
console.log(Deck)

@Component
export default class CardPanel extends Vue {
  @Prop({ type: String, required: true }) deckId!: String
  @Deck.Getter deck: any
  // get cardName() {
  //   return cardStore.name
  // }
  // get cardCount() {
  //   return cardStore.count
  // }
  // setCardName (e: any) {
  //   console.log(e)
  //   console.log(cardStore)
  //   cardStore.setCardName(e.target.value)
  //   //this.$store.dispatch('decks/addCard', e.target.value)
  // }
  // setCardCount (e: any) {
  //   console.log(e)
  //   cardStore.setCardCount(e.target.value)
  //   //this.$store.dispatch('decks/addCard', e.target.value)
  // }
  // addCard (e: any) {
  //   console.log(e.target)
  //   deckStore.addCards(this.cardName, this.cardCount)
  //   //this.$store.dispatch('decks/addCard', e.target.value)
  // }
  items = [1, 2, 3, 4]
}
</script>
