<template>
  <v-card :height="height" class="scroll" outlined color="grey lighten-2">
    <v-card-title class="d-flex justify-center text-no-wrap">
      English-only Policy Component (loaded dynamically)
    </v-card-title>
    <v-card-text>
      <div class="text-overline mx-8">
        Trupanion privacy policy
      </div>
      <div class="content">
Effective January 1, 2017<br/>
<br/>
IMPORTANT PRIVACY NOTICE REGARDING YOUR NONPUBLIC PERSONAL INFORMATION:<br/>
<br/>
Why do we have this notice?<br/>
At Trupanion, we know the importance of respecting your privacy and maintaining your trust. It is important to us that you understand the measures we have in place to protect your personal information. And, of course, we need to comply with any laws that require us to share with you how we manage this information. Please read this Notice carefully to understand what we do.<br/>
<br/>
What personal information do we collect?<br/>
The types of personal information we collect may include:<br/>
<br/>
Your name, address, email address, and phone number<br/>
Information regarding your dealings with us, including policy information, claims history, premiums and payment information.<br/>
How do we collect this personal information?<br/>
We collect your personal information, for example, when you:<br/>
<br/>
Apply for insurance, pay premiums, or make changes to your policy<br/>
File a claim<br/>
Provide employment information<br/>
Fill out customer surveys<br/>
We also collect personal information from others, such as affiliates, or joint marketing partners or lead providers.<br/>
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

  @import '../../styles.scss';

  .scroll {
    overflow-y: scroll
  }

</style>
