<template>
  <v-card :height="height" outlined color="grey lighten-2">
    <v-card-title class="d-flex justify-center text-no-wrap">
      Login Component
    </v-card-title>
    <v-card-text>
      <v-form >
        <div class="mb-8">
          {{ $t('labels.loginTitle') }}
        </div>
        <v-text-field
          v-model="username"
          :label="usernameLabel"
          class="mx-8"
        />
        <v-text-field
          v-model="password"
          :label="passwordLabel"
          type="password"
          class="mx-8"
        />
        <div class="mt8">
          <font color="red">{{ errorMessage }}</font>
        </div>
        <v-btn
          :disabled="!enableSubmit"
          :loading="loading"
          ripple
          @click="click"
          class="ma-4"
        >
          {{ $t('labels.submit') }}
        </v-btn>
      </v-form>
    </v-card-text>

  </v-card>
</template>

<script lang="ts">

export default {
  name: 'LocalText',
  props: {
    height: {
      type: Number
    },
    locale: {
      type: String
    }
  },
  data () {
    return {
      username: '',
      password: '',
      errorMessage: '',
      usernameLabel: '',
      passwordLabel: '',
      loading: false
    }
  },
  computed: {
    enableSubmit () {
      return (this.username && this.username.length > 3 && this.password && this.password.length > 3)
    }
  },
  watch: {
    locale () {
      this.assignLabels()
      this.errorMessage = ''
    }
  },
  beforeMount () {
    this.assignLabels()
  },
  methods: {
    assignLabels (): void {
      this.usernameLabel = this.$i18n.t('labels.username')
      this.passwordLabel = this.$i18n.t('labels.password')
    },
    /**
     * Handle button click
     */
    click (): void {
      this.login()
        .then((token) => {
          localStorage.token = token
          this.errorMessage = ''
          this.loading = false
          this.$emit('login')
        })
        .catch(() => {
          localStorage.token = ''
          this.errorMessage = this.$i18n.t('messages.loginFailed')
          this.loading = false
        })
    },
    /**
     * Handle login api call
     */
    login (): Promise<string> {
      const body = JSON.stringify({
        username: this.username,
        password: this.password
      })

      this.loading = true

      return new Promise((resolve, reject) => {
        fetch('https://apitest.babelbark.com/vendor-identity/v1/vendor-identity', {
          method: 'POST',
          body
        })
          .then(data => data.json())
          .then(response => {
            if (response.status !== 'Success') {
              reject(response.errorMessage)
            } else {
              resolve(response.identityToken)
            }
          })
          .catch(e => {
            reject(e)
          })
      })
    }
  }
}

</script>

<style lang="scss">

  @import '../styles.scss';

</style>
