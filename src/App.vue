<template>
  <v-app>
    <toolbar />
    <router-view />
  </v-app>
</template>

<script>
import toolbar from './components/toolbar.vue';

export default {
  components: { toolbar },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
