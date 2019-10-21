<template>
  <v-app>
      <v-content>
        <p class="display-2 ma-2">
          デッキ一覧画面
        </p>
        <v-btn color="primary" class="ma-2" to="/decks/new" nuxt>
          新しいデッキを追加
        </v-btn>
        <DeckPanel />
      </v-content>
  </v-app>
</template>

<script>
import DeckPanel from '@/app/components/organisms/DeckPanel';
export default {
  components: {
    DeckPanel,
  }
}
</script>
