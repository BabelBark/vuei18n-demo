<template>
  <v-card :height="height" :width="width" class="scroll"  outlined color="grey lighten-2">
    <v-card-title class="d-flex justify-center text-no-wrap">
      Configuration for {{ language }}
    </v-card-title>
    <v-card-text>
      <div class="content">
        <pre>
          {{ messages }}
        </pre>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">

export default {
  name: 'TranslationContent',
  props: {
    height: {
      type: Number
    },
    width: {
      type: String
    },
    locale: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      message: {}
    }
  },
  watch: {
    locale () {
      this.getMessages()
    }
  },
  computed: {
    language () {
      let lang = 'Unknown'
      switch (this.locale) {
        case 'en': lang = 'English'; break
        case 'es': lang = 'Spanish'; break
        case 'fr': lang = 'French'; break
        case 'hi': lang = 'Hindi'; break
        case 'ja': lang = 'Japanese'; break
      }
      return lang
    }
  },
  beforeMount () {
    this.getMessages()
  },
  methods: {
    getMessages () {
      this.messages = JSON.stringify(this.$i18n.messages[this.locale], null, 2)
    }
  }
}

</script>

<style lang="scss">

  .content {
    text-align: left;
  }

  .scroll {
    overflow-y: scroll
  }
</style>
