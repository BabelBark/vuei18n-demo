<template>
  <v-card :height="height" class="scroll" outlined color="grey lighten-2">
    <v-card-title class="d-flex justify-center text-no-wrap">
      Spanish-only Policy Component (loaded dynamically)
    </v-card-title>
    <v-card-text>
      <div class="text-overline mx-8">
        Política de privacidad de Trupanion
      </div>
      <div class="content">
Efectivo a partir del 1 de enero de 2017<br/>
<br/>
AVISO IMPORTANTE DE PRIVACIDAD CON RESPECTO A SU INFORMACIÓN PERSONAL NO PÚBLICA:<br/>
<br/>
¿Por qué tenemos este aviso?<br/>
En Trupanion, sabemos la importancia de respetar su privacidad y mantener su confianza. Para nosotros es importante que comprenda las medidas que tenemos para proteger su información personal. Y, por supuesto, debemos cumplir con cualquier ley que nos exija compartir con usted cómo administramos esta información. Lea este Aviso detenidamente para comprender lo que hacemos.<br/>
<br/>
¿Qué información personal recopilamos?<br/>
Los tipos de información personal que recopilamos pueden incluir:<br/>
<br/>
Su nombre, dirección, dirección de correo electrónico y número de teléfono.<br/>
Información sobre sus tratos con nosotros, incluida información sobre pólizas, historial de reclamaciones, primas e información sobre pagos.<br/>
¿Cómo recopilamos esta información personal?<br/>
Recopilamos su información personal, por ejemplo, cuando usted:<br/>
<br/>
Solicite un seguro, pague primas o realice cambios en su póliza<br/>
Presentar una reclamación<br/>
Proporcionar información laboral<br/>
Completar encuestas de clientes<br/>
También recopilamos información personal de otros, como afiliados, socios de marketing conjunto o proveedores principales.<br/>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">

export default {
  name: 'PolicyEn',
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
