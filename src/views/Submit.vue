<template>
	<div>
		<h2 v-if="!this.$store.state.isLogin" id="h2">Login first!!!!</h2>
		<form id="form">

			<v-file-input
				v-model="img"
				counter
				show-size
				accept="image/*"
				truncate-length="16"
				label="victim img"
			></v-file-input>

			<v-text-field
					v-model="victim"
					:error-messages="victimErrors"
					label="victim"
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
      victim: { required, maxLength: maxLength(20) },
    },

    data: () => ({
      victim: '',
			img: null,
    }),

    components: {
    },

    methods: {
      clear () {
        this.$v.$reset()
				this.victim = '';
				this.img = null;
      },
      submit () {

      }
    },

    computed: {
    
      victimErrors () {
          const errors = []
          if (!this.$v.victim.$dirty) return errors
          !this.$v.victim.maxLength && errors.push('Nick name can only 20 characters')
          return errors
      },

    },
  }
</script>

<style lang='scss'>
@import '@/scss/login.scss';
#h2 {
	color: red;
	text-align: center;
	margin-top: 10vh;
}
</style>