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

    <shymulator />
  </v-app>
</template>

<script>
import Shymulator from './components/pages/Shymulator';

export default {
  name: 'App',
  components: {
    Shymulator,
  },
};
</script>
