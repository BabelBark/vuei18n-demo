<template>
  <v-card :height="height" flat>
      <v-container class="px-0"
        fluid
      >
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-radio-group
          id="language"
          v-model="foo"
          @change="onChange"
          :row="true"
          required
        >
          <v-radio
            name="en"
            id="en"
            key="en"
            label="English"
            :value="'en'"
          ></v-radio>
          <v-radio
            name="fr"
            id="fr"
            key="fr"
            label="French"
            :value="'fr'"
          ></v-radio>
          <v-radio
            name="es"
            id="es"
            key="es"
            label="Spanish"
            :value="'es'"
          ></v-radio>
          <v-radio
            name="hi"
            id="hi"
            key="hi"
            label="Hindi"
            :value="'hi'"
          ></v-radio>
          <v-radio
            name="ja"
            id="ja"
            key="ja"
            label="Japanese"
            :value="'ja'"
          ></v-radio>
        </v-radio-group>
      </v-form>
      </v-container>
  </v-card>
</template>

<script lang="ts">

export default {
  name: 'LocaleSelector',
  props: {
    height: {
      type: Number
    }
  },
  data () {
    return {
      foo: 'en',
      valid: true
    }
  },
  methods: {
    onChange (): void {
      this.$emit('change', this.foo)
    }
  }
}

</script>

<style lang="scss">

  .content {
    text-align: left;
  }

</style>
