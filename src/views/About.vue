<template>
  <div class="about">
    <v-dialog
      v-model="rule"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-card 
          id="card"
          v-bind="attrs"
          v-on="on"
        >
          <v-card-title class="text-center">Rules</v-card-title>
        </v-card>
      </template>

      <v-card>
        <v-card-title class="text-h5 lighten-2">
          Rule
        </v-card-title>

        <v-card-text class="text-h6">
          you are a pig!
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="rule = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    rule: false,
  }),
}
</script>

<style lang='scss'>
#card {
  max-width: 80vw;
  height: 11vh;
  margin-left: 10vw;
  margin-top: 9vh;
}
</style>
