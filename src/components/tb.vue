<template>
  <v-form>
    <div>
    <v-toolbar dense
    style="height: 54px; box-shadow: 59px 7px 20px 0px #415eca; background: linear-gradient(to bottom, #311b3e 0%, #f8f8f6 100%);
">
      <v-icon style="position: absolute; left: 0.83%;">swap_vertical_circle</v-icon>
      <!-- <v-icon large style="position: absolute; left: 8px; top: 10px">search</v-icon> -->
        <v-flex xs12 sm12 md15
        style="position: absolute; left: 50px; right: 80%; top: 0%; height: 45px; font-family: 'Adobe Myungjo Std M'; font-weight: bold"
        >
        <v-text-field
          v-model="cererus"
         label="Quick Access"
          v-on:focus="mode = ''; see=false"
          v-on:keyup.enter="find"
        ></v-text-field>
        </v-flex>
        <v-toolbar-title
          style="position: absolute; left: 38%; font-family: Algerian; font-size: 175%">
          <v-btn flat large v-on:click="defuse">Welcome to Hydra:Project</v-btn>
          </v-toolbar-title>
      <v-spacer></v-spacer>
      <audio controls autoplay v-if="anim">
        <source src="../assets/notorious_sounds_-_tatu-_all_the_things_she_said_hbz_remix_bass_boosted_(zf.fm).mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
      <v-toolbar-items>
        <v-dialog
          v-model="dialog"
          width="500"
          >
        <v-btn
          slot="activator"
          icon>
          <v-icon dark>help</v-icon>
        </v-btn>
          <v-card style="position: absolute; top: 400%; left:20%; right: 20%">
            <v-card-title
              class="headline grey lighten-2"
              primary-title
            >
              Help
            </v-card-title>

            <v-card-text style="text-align: left">
              &copy; Project:Hydra_Synergy, inventory tool, device66, 2018
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <!--<v-icon v-show="seen==='Table'">tab</v-icon>-->
              <v-btn
                color="light"
                large
                @click="dialog = false"
              >
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-btn icon v-on:click="anim = !anim">
          <v-icon>star</v-icon>
        </v-btn>
        <!--<img id="anima" src="../assets/anima.gif" style="position: absolute; top: 598px; left: 703px; display: block" v-if="anim"/> -->
        <v-badge color="green" style="top: 25%; right: 10%" >
          <span slot="badge">0</span>
        <v-btn icon style="top: -25%; right: -40%" >
          <v-icon dark v-on:click="show()">warning</v-icon>
        </v-btn>
        </v-badge>
        <v-btn icon v-on:click="logout">
          <v-icon>logout</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
    <Nnd :hwvsall="hwvsall" :mode="mode" :see="see" :ebash="devices" style="position: absolute; top: 53px; width: 248px; height: 92.5%"></Nnd>
  </v-form>
</template>

<script>
import VueAudio from 'vue-audio'
import Vuetify from 'vuetify/es5/components/Vuetify/'
import VTextField from 'vuetify/es5/components/VTextField/VTextField'
import VBtn from 'vuetify/es5/components/VBtn/VBtn'
import VIcon from 'vuetify/es5/components/VIcon/VIcon'
import VCard from 'vuetify/es5/components/VCard/VCard'
import VToolbar from 'vuetify/es5/components/VToolbar/VToolbar'
import VInput from 'vuetify/es5/components/VInput/VInput'
import VContainer from 'vuetify/es5/components/VGrid/VContainer'
import VLayout from 'vuetify/es5/components/VGrid/VLayout'
import VFlex from 'vuetify/es5/components/VGrid/VFlex'
import VForm from 'vuetify/es5/components/VForm/VForm'
import VDialog from 'vuetify/es5/components/VDialog/VDialog'
import VCardTitle from 'vuetify/es5/components/VCard/VCardTitle'
import VDivider from 'vuetify/es5/components/VDivider/VDivider'
import Clock from 'vue-digital-clock'
import Nnd from '@/components/Nnd'
import VBadge from 'vuetify/es5/components/VBadge/VBadge'
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
import axios from 'axios'
// import VTimePickerClock from 'vuetify/es5/components/VTimePicker/VTimePickerClock'
// import VToolbarSideIcon from 'vuetify/es5/components/VToolbar/VToolbarSideIcon'
// import VSpacer from 'vuetify/es5/components/V'
export default {
  name: 'tb',
  components: {
    VueAudio,
    VBadge,
    Nnd,
    Clock,
    VDivider,
    VCardTitle,
    VDialog,
    VBtn,
    VForm,
    VContainer,
    VLayout,
    VFlex,
    VInput,
    VTextField,
    VToolbar,
    Vuetify,
    VCard,
    VIcon
  },
  methods: {
    show () {
      alert('It\'s OK... I guess')
    },
    set () {
      this.seen = Nnd.data().mode
    },
    logout () {
      this.$router.replace(this.$route.query.redirect || '/')
    },
    find () {
      var temp = this.cererus.split(' ')
      if (temp[0].toLowerCase() === 'table' || temp[0].toLowerCase() === 'chart') {
        if (temp[1] !== undefined && temp[1] !== '') {
          var y
          y = temp[1].toUpperCase()
        } else {
          this.see = 'none'
        }
        if (this.see === 'none') {
          alert('You should specify location to proceed\nExample: Table LON\nDoes not need to match case')
        } else {
          // y = temp[1].toUpperCase()
          // this.ebash = null
          this.mode = false
          if (y === 'ALL') {
            axios.get('http://10.211.34.12:8080/api/v0/device?name__contains=')
              .then(response => (this.devices = response.data)).then(x => (this.see = y)).then(x => (this.mode = temp[0].toLowerCase()))
            loadProgressBar()
          } else {
            loadProgressBar()
            axios.get('http://10.211.34.12:8080/api/v0/device?name__contains=' + y)
              .then(response => (this.devices = response.data)).then(x => (this.see = y)).then(x => (this.mode = temp[0].toLowerCase()))
          }
        }
      } else if (temp[0].toLowerCase() === 'dashboard') {
        this.mode = false
        this.see = 'none'
        axios.get('http://10.211.34.12:8080/api/v0/device?name__contains=')
          .then(response => (this.devices = response.data)).then(x => (this.mode = temp[0].toLowerCase()))
        axios.get('http://10.211.34.12:8080/api/v0/device?mac_eth0__contains=:')
          .then(response => (this.hwvsall = response.data.length))
        loadProgressBar()
      } else alert('Unknown mode: ' + temp[0] + '\nSupported modes yet: Dashboard, Table')
      // }
      // alert(this.mode + ' + ' + this.see)
      // alert(this.srch + ' - ' + this.mode)
    },
    defuse () {
      this.cererus = ''
      this.mode = ''
      this.see = false
      this.anim = false
    }
  },
  data () {
    return {
      cererus: '',
      mode: false, // Reactive var for Nnd component, Mode
      see: false, // Reactive var for Nnd component, Location
      devices: '', // Prop for Nnd, collection
      hwvsall: [0],
      kach: '../assets/notorious_sounds_-_tatu-_all_the_things_she_said_hbz_remix_bass_boosted_(zf.fm).mp3',
      dialog: false,
      seen: Nnd.data().mode,
      anim: false
    }
  }
}
</script>

<style scoped>

</style>
