<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <div class="d-flex align-center">
        シャニマス能力比較シミュレータv0.0.1
      </div>

    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          1極が強いの？3極バランス型が強いの？Daあと100あげたらどのくらいアピール値高くなるの？など調べるためのツール
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-card color="#eee">
              <v-card-text>
                <simulater/>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="6">
            <v-card color="#eee">
              <v-card-text>
                <simulater/>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Simulater from './components/pages/Simulater';

export default {
  name: 'App',

  components: {
    Simulater,
  },
};
</script>
