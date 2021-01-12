<template>
  <v-card
    :height="height"
    outlined
    color="grey lighten-2"
  >
    <v-card-title class="d-flex justify-center text-no-wrap">
      Currency
    </v-card-title>
    <v-card-text>
      <div class="content">
        <v-text-field
          v-model="value"
          :label="label"
          @change="change"
        />
      </div>
      <div class="d-flex justify-center mt-4">
        <div>
        <div class="text-overline">
          {{ $t('labels.localizedCurrency') }}
        </div>
        <div>
          {{ $n(value, 'currency') }}
        </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">

export default {
  name: 'Currency',
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
      value: '2500.50',
      lastValue: '2500.50',
      label: ''
    }
  },
  watch: {
    locale () {
      this.label = this.$i18n.t('labels.enterCurrency')
    }
  },
  beforeMount () {
    this.label = this.$i18n.t('labels.enterCurrency')
  },
  methods: {
    change () {
      if (isNaN(Number(this.value))) this.value = this.lastValue
      else {
        this.lastValue = this.value
        this.value = Number(this.value).toFixed(2)
      }
    }
  }
}

</script>

<style lang="scss">

  .content {
    text-align: left;
  }

</style>
