<template>
  <div>
    <form id="form">
      <v-select
        v-model="num"
        :items="nums"
        :error-messages="numsErrors"
        label="Number"
        required
      ></v-select>

      <v-text-field
          v-model="nick"
          :error-messages="nickErrors"
          name="input-10-1"
          label="Nick name"
          :counter='20'
          required
          @input="$v.nick.$touch()"
          @blur="$v.nick.$touch()"
      ></v-text-field>
      <v-row>
        <v-spacer />
        <v-col>
            <v-btn
                class="mr-4"
                @click="submit"
                id="btn"
            >
                submit
            </v-btn>
        </v-col>

        <v-col>
            <v-btn
                @click="clear"
                id="btn"
            >
            clear
            </v-btn>
        </v-col>
        <v-spacer />
      </v-row>
    </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      nums: { required, },
      nick: { required, maxLength: maxLength(20) },
    },

    data: () => ({
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
              21, 22, 23, 24, 25 ,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
      nick: '',
      num: '',

    }),

    components: {
    },

    methods: {
      clear () {
        this.$v.$reset()
        this.nick = ''
      },
      submit () {

      }
    },

    computed: {
      numsErrors () {
        const errors = [];

        if (!this.$v.nums.$dirty) return errors
          !this.$v.nums.required && errors.push('number is require')
          return errors;
      },
      nickErrors () {
          const errors = []
          if (!this.$v.nick.$dirty) return errors
          !this.$v.nick.maxLength && errors.push('Nick name can only 20 characters')
          return errors
      },

    },
  }
</script>

<style lang='scss'>
@import '@/scss/login.scss'
</style>