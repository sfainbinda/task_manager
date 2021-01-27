<template>
  <v-app>
    <v-main>
         <MainNav/>
         <router-view/>
         <Guide/>
    </v-main>
  </v-app>
</template>

<script>

import MainNav from './components/MainNav/MainNav.vue';
import Guide from './components/Guide/Guide.vue';

export default {
  name: 'App',

  components: {
    MainNav,
    Guide
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
  #app {
    font-family: 'Spartan', sans-serif;
  }
</style>
