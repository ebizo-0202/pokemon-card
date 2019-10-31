<template>
  <v-app>
    <v-content>
      <p class="display-2 ma-2">
      </p>
      <p class="ma-2">
      </p>
      <CardPanel :deckId="deckId"/>
      <v-btn color="primary" class="ma-2">
      </v-btn>
      <v-btn color="success" class="ma-2">
      </v-btn>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import DeckPanel from '@/app/components/organisms/DeckPanel.vue';
import CardPanel from '@/app/components/organisms/CardPanel.vue';

@Component ({
  components: {
    DeckPanel,
    CardPanel,
  },
})
export default class DeckCreatePage extends Vue {
  items = [1, 2, 3, 4]
  deckId = 'xxxx';
}
</script>
