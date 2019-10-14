<template>
  <v-card class="ma-2">
    <v-text-field
      label="カード名"
      required
      class="ma-2"
      @change="setCard"
    ></v-text-field>
    <v-select
      :items="items"
      label="枚数"
      class="ma-2"
    ></v-select>
    <v-card-actions>
      <v-btn color="primary" text @click="addCard">このカードを保存する</v-btn>
      <v-btn color="error" text>このカードを削除する</v-btn>
    </v-card-actions>
    <p>{{ card }}</p>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import { namespace } from 'vuex-class'
import * as decks from '../../store/modules/decks'
import * as cards from '../../store/modules/cards'

const Decks = namespace(decks.name)
const Cards = namespace(cards.name)

@Component
export default class CardPanel extends Vue {
  @Prop({ type: String, required: true }) deckId!: String
  @Decks.Getter deck: any
  @Cards.Getter card: any
  setCard (e: any) {
    console.log(e)
    //this.$store.dispatch('decks/addCard', e.target.value)
  }
  addCard (e: any) {
    console.log(e.target)
    console.log(this.deck)
    console.log(this.card)
    //this.$store.dispatch('decks/addCard', e.target.value)
  }
  items = [1, 2, 3, 4]
}
</script>
