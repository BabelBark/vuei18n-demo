<template>
  <v-card :height="height" outlined color="grey lighten-2">
    <v-card-title class="d-flex justify-center text-no-wrap">
      General Purpose Component Using Locale Strings
    </v-card-title>
    <v-card-text>
      <div class="text-overline mx-8">
        {{ $t('content.title') }}
      </div>
      <div class="content">
        <p>
          {{ $t('content.content') }}
        </p>
      </div>
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
  }
}

</script>

<style lang="scss">

  .content {
    text-align: left;
  }

</style>
