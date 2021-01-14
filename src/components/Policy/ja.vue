<template>
  <v-card :height="height" class="scroll" outlined color="grey lighten-2">
    <v-card-title class="d-flex justify-center text-no-wrap">
      Japanese-only Policy Component (loaded dynamically)
    </v-card-title>
    <v-card-text>
      <div class="text-overline mx-8">
       Trupanionプライバシーポリシー
      </div>
      <div class="content">
2017年1月1日発効<br/>
<br/>
あなたの非公開の個人情報に関する重要なプライバシー通知：<br/>
<br/>
なぜこの通知があるのですか？<br/>
Trupanionでは、お客様のプライバシーを尊重し、信頼を維持することの重要性を認識しています。お客様の個人情報を保護するために当社が実施している措置を理解することが重要です。そしてもちろん、私たちはこの情報をどのように管理するかをあなたと共有することを要求する法律を遵守する必要があります。この通知を注意深く読んで、私たちの活動を理解してください。<br/>
<br/>
どのような個人情報を収集しますか？<br/>
当社が収集する個人情報の種類には、次のものが含まれます。<br/>
<br/>
あなたの名前、住所、メールアドレス、電話番号<br/>
ポリシー情報、請求履歴、保険料、支払い情報など、当社との取引に関する情報。<br/>
この個人情報をどのように収集しますか？<br/>
たとえば、次の場合に、お客様の個人情報を収集します。<br/>
<br/>
保険の申し込み、保険料の支払い、またはポリシーの変更<br/>
申し立てを行う<br/>
雇用情報を提供する<br/>
顧客調査に記入する<br/>
また、アフィリエイト、共同マーケティングパートナー、リードプロバイダーなどの他の企業から個人情報を収集します。<br/>
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
