import Vue from 'vue'
import Vuei18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import locales from './locales/locales'

Vue.config.productionTip = false

Vue.use(Vuei18n)

const browserLanguage = navigator.language.slice(0, 2)
console.log('Browser language:', browserLanguage)

// must be called after vue.use
const i18n = new Vuei18n({
  locale: browserLanguage,
  fallbackLocale: 'en',
  messages: locales.data,
  numberFormats: locales.numberFormats,
  dateTimeFormats: locales.dateFormats
})

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
