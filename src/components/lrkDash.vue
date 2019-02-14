<template>
  <div id="dash" style="font-family: 'Gill Sans MT' ;">
    <v-text style="position: absolute; bottom: 1%; left: 1%; font-size: small"> ESXi: 6.5.0-7273056 <p/> Model: UCSB-B200-M3<p/> CPU number: 4</v-text>
    <v-text style="position: absolute; bottom: 1%; left: 46%; font-size: small"> ESXi: 6.5.0-8294253 <p/> Model:UCSB-B200-M4<p/> CPU number: 8</v-text>
    <v-text style="position: absolute; bottom: 1%; left: 87%; font-size: small"> ESXi: 6.5.0-9298722 <p/> Model: UCSC-C240-M3S<p/> CPU number: 16</v-text>
    <commitChart></commitChart>
  </div>
</template>

<script>
// import 'chart.js'
// import donat from 'hchs-vue-charts/src/components/chartjs-pie'
// import VueCharts from 'vue-chartjs'
import CommitChart from '../Charts/lrkChart'
// import 'hchs-vue-charts'
export default {
  components: {CommitChart}
}

</script>

<style scoped>

</style>
