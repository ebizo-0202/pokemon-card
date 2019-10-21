<template>
  <v-card class="ma-2">
    <p>{{deck}}</p>
    <v-text-field
      label="カード名"
      required
      class="ma-2"
      @input="setCardName"
    ></v-text-field>
    <v-select
      :items="items"
      label="枚数"
      class="ma-2"
      @input="setCardCount"
    ></v-select>
    <v-card-actions>
      <v-btn color="primary" text @click="addCard">このカードを保存する</v-btn>
      <v-btn color="error" text>このカードを削除する</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import { deckStore, cardStore } from '../../store'

console.log(cardStore)
console.log(deckStore)

@Component
export default class CardPanel extends Vue {
  @Prop({ type: String, required: true }) deckId!: String
  get deck() {
    return 'aaa'
  }
  get cardName() {
    return cardStore.name
  }
  get cardCount() {
    return cardStore.count
  }
  setCardName (e: any) {
    console.log(e)
    console.log(cardStore)
    cardStore.setCardName(e.target.value)
    //this.$store.dispatch('decks/addCard', e.target.value)
  }
  setCardCount (e: any) {
    console.log(e)
    cardStore.setCardCount(e.target.value)
    //this.$store.dispatch('decks/addCard', e.target.value)
  }
  addCard (e: any) {
    console.log(e.target)
    deckStore.addCards(this.cardName, this.cardCount)
    //this.$store.dispatch('decks/addCard', e.target.value)
  }
  items = [1, 2, 3, 4]
}
</script>
