<template>
  <div class="about">
    <h1>This demonstrates different types of localization examples</h1>
    <div class="d-flex justify-center">
      <locale-selector
        :height=100
        @change="onChangeLocale"
      />
    </div>
    <v-row>
      <v-col>
        <local-text
          :height=400
          class="ma-6"
        />
      </v-col>
      <v-col>
        <component
          :height=400
          v-bind:is="policyComponent"
          :locale="selectedLocale"
          class="ma-6"
        />
      </v-col>
      <v-col>
        <login
          :height=400
          class="ma-6"
          :locale="selectedLocale"
          @login="onAuthChange"
          v-if="!isLoggedIn"
        />
        <logout
          :height=400
          class="ma-6"
          :locale="selectedLocale"
          @logout="onAuthChange"
          v-else
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <numbers
          :height=300
          :locale="selectedLocale"
          class="ma-6"
        />
      </v-col>
      <v-col>
        <currency
          :height=300
          :locale="selectedLocale"
          class="ma-6"
        />
      </v-col>
      <v-col>
        <dates
          :height=300
          :locale="selectedLocale"
          class="ma-6"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col class="d-flex justify-center">
        <translation-content
          :height=500
          width="50%"
          :locale="selectedLocale"
          class="ma-6"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import LocalText from '@/components/LocalText.vue'
import LocaleSelector from '@/components/LocaleSelector.vue'
import Numbers from '@/components/Numbers.vue'
import Currency from '@/components/Currency.vue'
import TranslationContent from '@/components/TranslationContent.vue'
import Dates from '@/components/Dates.vue'
import Login from '@/components/Login.vue'
import Logout from '@/components/Logout.vue'

export default {
  name: 'LocalComponents',
  components: {
    LocalText,
    LocaleSelector,
    Numbers,
    Currency,
    TranslationContent,
    Dates,
    Login,
    Logout
  },
  data () {
    return {
      selectedLocale: '',
      isLoggedIn: false
    }
  },
  computed: {
    policyComponent () {
      const locale: string = this.selectedLocale
      return () => import(`../components/Policy/${locale}`)
    }
  },
  beforeMount () {
    this.selectedLocale = this.$i18n.locale
    this.onAuthChange()
  },
  methods: {
    onChangeLocale (locale: string): void {
      this.selectedLocale = locale
      this.$i18n.locale = locale
    },
    onAuthChange () {
      this.isLoggedIn = (localStorage.token && localStorage.token.length > 10)
    }
  }
}

</script>
