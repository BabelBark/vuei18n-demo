<template>
  <div class="about">
    <h1>Components Used in this Application</h1>
    <div class="ma-8 content">
      <v-row>
        <v-col cols="2" class="text-h6">
          <b>Component</b>
        </v-col>
        <v-col cols="8" class="text-h6">
          <b>Purpose</b>
        </v-col>
      </v-row>
            <v-row>
        <v-col cols="2" class="text-h6">
          Vue 2.x
        </v-col>
        <v-col cols="8" class="text-h6">
          Vue is the reactive framework.  What different is that we will be using vue as
          a standalone static web application. <br />
          It will not be hosted on an application server,
          it will be bundled and deployed to Azure block storage, similar to a simple
          directory on your computer. We will configure the Azure CDN (content delivery network)
          to cache the application in various parts of the world.  When a user goes to the URL
          Azure DNS will identify the best location in the world for that user to access the
          webapp.  The vue application is retrieved in chunks, for speed, and runs right in
          the user's browser.  The application will make calls back to Azure APIs to push and
          pull data.  All business logic still resides in Azure.<br/>
          We will be using v2.x instead of vue 3 because we will use vuetify, which will not
          be compatible until Q3 2021. <br/>
          <a href="https://vuejs.org/v2/guide/">https://vuejs.org/v2/guide/</a>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="text-h6">
          Typescript
        </v-col>
        <v-col cols="8" class="text-h6">
          Vue can be programmed in javascript or typescript.  Typescript allows type definitions
          which help reduce errors and provides an informed developer experience in VS Code.<br/>
          <a href="https://vuejs.org/v2/guide/typescript.html">https://vuejs.org/v2/guide/typescript.html</a>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="text-h6">
          Vuetify
        </v-col>
        <v-col cols="8" class="text-h6">
          Vuetify is a component library that provides all of the widgets, layouts and style components that
          we will use to build the application.  It implements the Material Design spec, which is a user
          experience specification used by thousands of web and mobile applications.  <br/>
          This will great reduce the amount of CSS that our developers need to write.  Vuetify allows
          use to control the layouts and look and feel using native vue components instead of CSS.<br/>
          Vuetify was used toe define the layouts, card, grids, spacing, and text inputs for this application.<br/>
          <a href="https://vuetifyjs.com/en/introduction/why-vuetify/">https://vuetifyjs.com/en/introduction/why-vuetify/</a>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="text-h6">
          Vue-i18n
        </v-col>
        <v-col cols="8" class="text-h6">
          This package provides us with the localization tools to render the proper text, number, currency and date formats
          for selected locales.<br/>
          This site used vue-i18n to render the language-specific components in this site. It does not do the translation.
          This site was build with a set of language files to provide the translations for each label and text block.  The
          actual translation was done using google translate.  We should use a 3rd party translation provider to
          translate the files in the new application.<br/>
          <a href="https://vue-i18n-next.intlify.dev/essentials/started.html">https://vue-i18n-next.intlify.dev/essentials/started.html</a>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="text-h6">
          Vue-Router
        </v-col>
        <v-col cols="8" class="text-h6">
          Vue Router was used for page navigation.  We will want to use vue router to create actual page routes.  This provide
          page history, bookmarking and will be our mechanism for ensuring the user is logged in before they try to access pages
          requesting data.  <br/>
          <a href="https://router.vuejs.org/installation.html">https://router.vuejs.org/installation.html</a>
        </v-col>
      </v-row>
            <v-row>
        <v-col cols="2" class="text-h6">
          Vuex
        </v-col>
        <v-col cols="8" class="text-h6">
          Vuex provides application-level state management.  Vuex was installed in this application but not used for this
          functionality.  Vuex can be misued, but it is very used for storing object data.<br/>
          <a href="https://vuex.vuejs.org/">https://vuex.vuejs.org</a>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script lang="ts">

export default {
  name: 'About'
}

</script>

<style lang="scss">

  @import '../styles.scss';

</style>
