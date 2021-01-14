<template>
  <v-card :height="height" outlined color="grey lighten-2">
    <v-card-title class="d-flex justify-center text-no-wrap">
      Logout Component
    </v-card-title>
    <v-card-text>
      <v-form >
        <v-btn
          ripple
          @click="click"
          class="mt-8"
        >
          {{ $t('labels.logout') }}
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
    }
  },
  methods: {
    /**
     * Handle button click
     */
    click (): void {
      localStorage.token = ''
      this.$emit('logout')
    }
  }
}

</script>

<style lang="scss">

  @import '../styles.scss';

</style>
