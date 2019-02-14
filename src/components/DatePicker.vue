<!--suppress ALL -->
<template>
    <div>
      <v-date-picker dark v-model="picker" :landscape="landscape" :reactive="reactive"></v-date-picker>
      <v-layout row wrap>
        <v-flex xs12 sm3 style="color: #7f7f7f">
          <v-checkbox background-color="#7f7f7f" dark v-model="landscape" hide-details label="Landscape"></v-checkbox>
        </v-flex>
        <v-flex xs2 sm3>
          <v-checkbox v-if="landscape" v-model="reactive" hide-details label="Reactive"  v-on:click="yo"></v-checkbox>
        </v-flex>
      </v-layout>
    </div>
</template>

<script>
import Vuetify from 'vuetify/es5/components/Vuetify'
import VDatePicker from 'vuetify/es5/components/VDatePicker/VDatePicker'
import VFlex from 'vuetify/es5/components/VGrid/VFlex'
import VCheckbox from 'vuetify/es5/components/VCheckbox/VCheckbox'
import VLayout from 'vuetify/es5/components/VGrid/VLayout'
import VGrid from 'vuetify/es5/components/VGrid'
import Dash from '@/components/Dash'
import Vue from 'vue'

var dtpk = new Vue({
  data: {
    newtime: this.picker
  }
})

export default {
  name: 'DatePicker',
  components: {
    Vuetify,
    VGrid,
    VDatePicker,
    VFlex,
    VCheckbox,
    VLayout
  },
  methods: {
    yo () {
      Dash.data().rubikon = this.picker
      alert(this.picker + ' meh ' + dtpk.newtime)
    }
  },
  data () {
    return {
      picker: null,
      landscape: true,
      reactive: true
    }
  }
}
</script>

<style scoped>
  .v-label {
    color: #7f7f7f;
  }

</style>
