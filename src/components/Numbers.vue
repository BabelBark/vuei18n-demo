<template>
  <v-card
    :height="height"
    outlined
    color="grey lighten-2"
  >
    <v-card-title class="d-flex justify-center text-no-wrap">
      Numbers
    </v-card-title>
    <v-card-text>
      <div class="content">
        <v-text-field
          v-model="value"
          :label="label"
        />
      </div>
      <div class="d-flex justify-center mt-4">
        <div>
        <div class="text-overline">
          {{ $t('labels.localizedNumber') }}
        </div>
        <div>
          {{ $n(value) }}
        </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">

export default {
  name: 'Numbers',
  props: {
    height: {
      type: Number
    },
    locale: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      value: 1000000000
    }
  },
  watch: {
    locale () {
      this.label = this.$i18n.t('labels.enterLargeNumber')
    }
  },
  beforeMount () {
    this.label = this.$i18n.t('labels.enterLargeNumber')
  }
}

</script>

<style lang="scss">

  .content {
    text-align: left;
  }

</style>
