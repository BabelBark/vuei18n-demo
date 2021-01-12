/* eslint no-irregular-whitespace: ["error", { "skipTemplates": false }] */
<template>
  <v-card :height="height" class="scroll" outlined color="grey lighten-2">
    <v-card-title class="d-flex justify-center text-no-wrap">
     French-only Policy Component (loaded dynamically)
    </v-card-title>
    <v-card-text>
      <div class="text-overline mx-8">
        Politique de confidentialité de Trupanion
      </div>
      <div class="content">
À compter du 1er janvier 2017<br/>
<br/>
AVIS IMPORTANT DE CONFIDENTIALITÉ CONCERNANT VOS RENSEIGNEMENTS PERSONNELS NON PUBLICS:<br/>
<br/>
Pourquoi avons-nous cet avis?<br/>
Chez Trupanion, nous connaissons l'importance de respecter votre vie privée et de maintenir votre confiance. Il est important pour nous que vous compreniez les mesures que nous avons mises en place pour protéger vos informations personnelles. Et, bien sûr, nous devons nous conformer à toutes les lois qui nous obligent à partager avec vous comment nous gérons ces informations. Veuillez lire attentivement cet avis pour comprendre ce que nous faisons.<br/>
<br/>
Quelles informations personnelles collectons-nous?<br/>
Les types d'informations personnelles que nous collectons peuvent inclure:<br/>
<br/>
Votre nom, adresse, adresse e-mail et numéro de téléphone<br/>
Informations concernant vos relations avec nous, y compris les informations sur la police, l'historique des réclamations, les primes et les informations de paiement.<br/>
Comment collectons-nous ces informations personnelles?<br/>
Nous recueillons vos informations personnelles, par exemple, lorsque vous:<br/>
<br/>
Faites une demande d'assurance, payez des primes ou apportez des modifications à votre police<br/>
Déposer une plainte<br/>
Fournir des informations sur l'emploi<br/>
Remplissez les sondages clients<br/>
Nous recueillons également des informations personnelles d'autres personnes, telles que des sociétés affiliées, ou des partenaires marketing conjoints ou des fournisseurs principaux.<br/>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">

export default {
  name: 'PolicyFr',
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

  .scroll {
    overflow-y: scroll
  }

</style>
