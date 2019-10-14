<template>
  <v-card>
    <v-container fill-height fluid>
      <v-layout fill-height>
        <v-flex xs12 align-end flexbox>
          <span class="headline">
            ジラーチサンダー
          </span>
        </v-flex>
      </v-layout>
    </v-container>
    <v-card-title>
      <div>
        <span class="grey--text">
          いっちー
        </span>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn class="ma-2" tile color="indigo" dark>
        このデッキを使う
      </v-btn>
      <v-btn class="ma-2" tile outlined color="success">
        <v-icon left >mdi-pencil</v-icon>
        編集
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class DeckPanel extends Vue {
}

</script>
