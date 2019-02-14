<template>
  <div id="dashboard" style="font-family: 'Gill Sans MT';">
    <v-text id="doughnut" style="position: absolute; color: #7f7f7f; left: 10%; top: 0%; font-family: 'Roboto', serif; font-size: 15px"><b><u>Amount per Location</u></b></v-text>
    <v-text id="Countdown" style="position: absolute; left: 50%; bottom: 89%; font-family: 'Roboto Condensed', serif; font-size: 40px; color: #1abc9c">Countdown to next build</v-text>
    <v-text id="doughnut-sum" style="position: absolute; left: 11%; top: 30.4%; font-size: xx-large; font-family: 'Roboto', serif; font-style: italic;"><b>{{dash_val.length}}</b></v-text>
    <v-text id="bar" style="position: absolute; left: 10%; top: 58%; font-family: 'Roboto', serif; font-size: 15px"><b><u>Amount per Location/Chassis</u></b></v-text>
    <v-text id="connected_hosts" style="position: absolute; left: 34.7%; top: 37%">Allocated devices</v-text>
    <v-text id="connected_hosts" style="position: absolute; left: 49%; top: 37%">Unallocated devices</v-text>
    <v-text id="connected_hosts" style="position: absolute; left: 65.5%; top: 37%">Devices Used</v-text>
    <v-text id="total_dcs" style="position: absolute; left: 80%; top: 56.5%; font-family: 'Roboto', serif; font-size: 15px"><b>Devices with MAC specified</b></v-text>
    <svg viewBox="0 0 86 86" class="circular-chart" style="position: absolute; left: 5.5%; top: 39%">
      <path class="circle-bg"
            stroke="#e0e0e0"
            stroke-dasharray="100, 100"
            d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"></path>
      <path class="circle"
            stroke-dasharray="95, 100"
            stroke="#81f882"
            d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"></path>
      <text x="9.5" y="21.5" class="percentage" style="font-size: 10px; font-family: 'Roboto', serif; font-style: italic;">95%</text>
    </svg>
    <svg viewBox="0 0 86 86" class="circular-chart" style="position: absolute; left: 20.5%; top: 39%">
      <path class="circle-bg"
            stroke="#e0e0e0"
            stroke-dasharray="100, 100"
            d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"></path>
      <path class="circle"
            stroke="red"
            stroke-dasharray="5, 100"
            d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"></path>
      <text x="11" y="21.5" class="percentage" style="font-size: 10px; font-family: 'Roboto'; font-style: italic; ">5%</text>
    </svg>
      <Speed2 :series="[12]" style="position: absolute; left: 59.5%; right: 21%; top: 36%"></Speed2>
    <!-- <svg viewBox="0 0 70 70" class="circular-chart" style="position: absolute; left: 53.5%; top: 34%">
       <path class="circle-bg"
            stroke="#e0e0e0"
            stroke-dasharray="100, 100"
            d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"></path>
      <path class="circle"
            stroke="#1abc9c"
            stroke-dasharray="100, 100"
            d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"></path>
      <text x="14" y="21.5" class="percentage" style="font-size: 10px; font-family: 'Roboto', serif; font-style: italic;">9</text>
    </svg> -->
    <!--<circle-percent :value="90"></circle-percent> -->
    <Speed :series="bla" style="position: absolute; left: 75.5%; top: 34%"></Speed>
    <dashChart
      :ams="dash_val.filter(f => f.name.indexOf('AMS') > -1).length"
      :ash="dash_val.filter(f => f.name.indexOf('ASH') > -1).length"
      :ber="dash_val.filter(f => f.name.indexOf('BER') > -1).length + 1"
      :chi="dash_val.filter(f => f.name.indexOf('CHI') > -1).length"
      :fra="dash_val.filter(f => f.name.indexOf('FRA') > -1).length"
      :lon="dash_val.filter(f => f.name.indexOf('LON') > -1).length"
      :hkg="dash_val.filter(f => f.name.indexOf('HKG') > -1).length"
      :sao="dash_val.filter(f => f.name.indexOf('SAO') > -1).length"
      :syd3="dash_val.filter(f => f.name.indexOf('SYD4') > -1).length"
      style="position: absolute; left: 0%; bottom: 46%; top: 2%; color: black"></dashChart>
    <bar-dash-chart
      :ams="dash_val.filter(f => f.name.indexOf('AMS') > -1).length"
      :ash="dash_val.filter(f => f.name.indexOf('ASH') > -1).length"
      :ber="dash_val.filter(f => f.name.indexOf('BER') > -1).length + 1"
      :chi="dash_val.filter(f => f.name.indexOf('CHI') > -1).length"
      :fra="dash_val.filter(f => f.name.indexOf('FRA') > -1).length"
      :lon="dash_val.filter(f => f.name.indexOf('LON') > -1).length"
      :hkg="dash_val.filter(f => f.name.indexOf('HKG') > -1).length"
      :sao="dash_val.filter(f => f.name.indexOf('SAO') > -1).length"
      :syd3="dash_val.filter(f => f.name.indexOf('SYD4') > -1).length"
      :amsch="dash_val.filter(f => f.name.indexOf('AMS') > -1).filter(f => f.name.indexOf('CH') > -1).length"
      :ashch="dash_val.filter(f => f.name.indexOf('ASH') > -1).filter(f => f.name.indexOf('CH') > -1).length"
      :berch="dash_val.filter(f => f.name.indexOf('BER') > -1).filter(f => f.name.indexOf('CH') > -1).length"
      :chich="dash_val.filter(f => f.name.indexOf('CHI') > -1).filter(f => f.name.indexOf('CH-') > -1).length"
      :frach="dash_val.filter(f => f.name.indexOf('FRA') > -1).filter(f => f.name.indexOf('CH') > -1).length"
      :lonch="dash_val.filter(f => f.name.indexOf('LON') > -1).filter(f => f.name.indexOf('CH') > -1).length"
      :hkgch="dash_val.filter(f => f.name.indexOf('HKG') > -1).filter(f => f.name.indexOf('CH') > -1).length"
      :saoch="dash_val.filter(f => f.name.indexOf('SAO') > -1).filter(f => f.name.indexOf('CH') > -1).length"
      :syd3ch="dash_val.filter(f => f.name.indexOf('SYD4') > -1).filter(f => f.name.indexOf('CH') > -1).length"
      style="position: absolute; left: 1%; bottom: 2%; width: 100%; height: 40%"></bar-dash-chart>
    <!-- <countdown :date="rubikon" style="position: absolute; top: 0%; bottom: 55%;align-items: center;
    display: flex;
    justify-content: center;
    left: 34%;
    right: 0.5%;"></countdown> -->
    <v-btn icon large style="position: absolute; right: 7%; bottom: 88.45%" v-on:click="dp = !dp"><v-icon x-large outline color="#1abc9c">today</v-icon></v-btn>
    <!--<date-picker  style="position: absolute; right: 15%; top:-5%" v-show="dp"></date-picker> -->
    <div class="DatePicker" style="position: absolute; right: 15%; top:-7%" v-show="dp"> <!-- BEGIN Date Picker box -->
      <v-layout row wrap>
        <v-flex xs12 sm3>
          <v-checkbox v-model="landscape" hide-details label="Landscape"></v-checkbox>
        </v-flex>
        <v-flex xs2 sm3>
          <v-checkbox v-if="landscape" v-model="reactive" hide-details label="Reactive"></v-checkbox>
        </v-flex>
      </v-layout>
      <v-date-picker dark v-model="picker" :landscape="landscape" :reactive="reactive"></v-date-picker>
    </div> <!-- END Date Picker box -->
    <v-btn icon style="position: absolute; right: 14%; bottom: 100.2%" v-show="dp" v-on:click="timer_init">
      <v-icon>
        done
      </v-icon>
    </v-btn>
    <!--<countdown date="2018-12-09T00:00:11+0000" style="position: absolute; top: 0%; bottom: 55%;align-items: center;-->
  </div>
</template>

<script>
import Countdown from '@/components/Countdown'
import VIcon from 'vuetify/es5/components/VIcon/VIcon'
import VBtn from 'vuetify/es5/components/VBtn/VBtn'
import DashChart from '../Charts/DashChart'
import newChart from '../Charts/newChart'
import BarDashChart from '../Charts/BarDashChart'
import Speed from '@/components/Speed'
import Speed2 from '@/components/Speed2'
// import {circlePercent} from 'circle-percent-vue'
import 'circle-percent-vue/dist/circle.css'
import circle from '../Charts/circle'
import DatePicker from '@/components/DatePicker'
import Vuetify from 'vuetify/es5/components/Vuetify'
import VDatePicker from 'vuetify/es5/components/VDatePicker/VDatePicker'
import VFlex from 'vuetify/es5/components/VGrid/VFlex'
import VCheckbox from 'vuetify/es5/components/VCheckbox/VCheckbox'
import VLayout from 'vuetify/es5/components/VGrid/VLayout'
import VGrid from 'vuetify/es5/components/VGrid'

export default {
  name: 'Dash',
  components: {
    DatePicker,
    Countdown,
    VIcon,
    VBtn,
    circle,
    Speed,
    Speed2,
    //    circlePercent,
    DashChart,
    BarDashChart,
    newChart,
    Vuetify,
    VGrid,
    VDatePicker,
    VFlex,
    VCheckbox,
    VLayout
  },
  props: {
    dash_val: {
      type: Array
    },
    hwvsall: {
      type: Array
    }
  },
  methods: {
    timer_init () {
      this.rubikon = this.picker
      this.dp = false
    },
    mesg () {
      let x = parseInt(this.hwvsall / this.dash_val.length * 100)
      this.hwvsall = x
      return this.hwvsall
    }
  },
  data () {
    return {
      bla: [parseInt(this.hwvsall / this.dash_val.length * 100)],
      green: 'green',
      rubikon: '12-09-2018',
      // hwvsall: this.dash_val.filter(f => f.mac_eth0.indexOf() > -1).length / this.dash_val.length * 100,
      picker: null,
      landscape: true,
      reactive: true,
      dp: false, // Date Picker var
      sum: BarDashChart.data().sour.toString()
    }
  }
}
</script>

<style scoped>
  .circular-chart {
    display: block;
    margin: 10px auto;
    max-width: 80%;
    max-height: 250px;
  }

  .circle {
    fill: none;
    stroke-linecap: round;
    animation: progress  2s ease-out forwards;
  }

  .circle-bg {
    fill: none;
    stroke-linecap: round;
    animation: 1s ease-out forwards;
  }

  @keyframes progress {
    0% {
      /*noinspection CssInvalidPropertyValue*/
      stroke-dasharray: 0 100;
    }
  }
</style>
<!--   @keyframes progress {
    100% {
      stroke-dasharray: 0;
    }
  } -->
