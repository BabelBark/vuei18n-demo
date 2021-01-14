<template>
  <v-card
    :height="height"
    outlined
    color="grey lighten-2"
  >
    <v-card-title class="d-flex justify-center text-no-wrap">
      Dates
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
          {{ $t('labels.localizedDate') }}
        </div>
        <div>
          {{ $d(adjustedDate, 'short') }}
        </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)

export default {
  name: 'Dates',
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
      value: '1/1/2020',
      localeDate: ''
    }
  },
  watch: {
    locale (): void {
      this.label = this.$i18n.t('labels.enterDate')
    }
  },
  computed: {
    adjustedDate (): Date {
      return this.parseDate()
    }
  },
  beforeMount (): void {
    this.label = this.$i18n.t('labels.enterDate')
  },
  methods: {
    parseDate (): Date {
      dayjs.tz.setDefault('UTC')
      const loc = dayjs(this.value)
      return loc.toDate()
    }
  }
}

</script>

<style lang="scss">

  @import '../styles.scss';

</style>
