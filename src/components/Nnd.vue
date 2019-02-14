<template>
  <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open"
            style="position: absolute;
         top: 54px;
         width: 248px;
         height: 94.6%;">
    <nav id="menu">
      <v-navigation-drawer
       class=""
        style="background: #f8f8f6;"
       permanent
        id="nnd"
      >
        <img src="../assets/logo2.png" />
    <v-list style="position: absolute; top: 49px;">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
      >
        <v-list-tile-action style="justify-content: left; align-items: normal" >
          <v-btn flat style="position: fixed; left:4%; width:92%; right: 2%;" v-on:click="mode = item.title.toLowerCase(); collect(item.title.toLowerCase())"><v-icon style="position: absolute; left: 2%">{{ item.icon }}</v-icon><btn-name style="position: absolute; left: 26%; text-transform: initial; font-size: 18px">{{ item.title }}</btn-name></v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
        <div class="nest">
        <v-list style="position: absolute; top: 135px">

          <v-list-group
          prepend-icon="device_hub"
        >
          <v-list-tile slot="activator" >
            <v-list-tile-title style="font-size: 18px">Devices</v-list-tile-title>
          </v-list-tile>

          <v-list-group
            no-action
            sub-group
          >
            <v-list-tile slot="activator">
              <v-list-tile-title style="font-size: 17px">UCS</v-list-tile-title>
            </v-list-tile>

            <v-list-tile
              v-for="(uc, i) in ucs"
              :key="i"
              @click="open"
            >
              <v-list-tile-title  v-on:click="dev = uc[1]; proceed()"  v-text="uc[0]" style="font-size:11px;"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group
            no-action
            sub-group
          >
            <v-list-tile slot="activator">
              <v-list-tile-title style="font-size: 17px">SuperMicro</v-list-tile-title>
            </v-list-tile>

            <v-list-tile
              v-for="(edc, i) in edcs"
              :key="i"
              @click="open"
            >
              <v-list-tile-title v-text="edc[0]" style="font-size:11px;"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="edc[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
          <v-list-group
            no-action
            sub-group
          >
            <v-list-tile slot="activator">
              <v-list-tile-title style="font-size: 17px">Other</v-list-tile-title>
            </v-list-tile>

            <v-list-tile
              v-for="(bdc, i) in bdcs"
              :key="i"
              @click="open"
            >
              <v-list-tile-title v-text="bdc[0]" style="font-size:11px;"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="bdc[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
          <v-list-group
            prepend-icon="domain"
          >
            <v-list-tile slot="activator" >
              <v-list-tile-title style="font-size: 18px">Infrastructure</v-list-tile-title>
            </v-list-tile>

            <v-list-group
              no-action
              sub-group
            >
              <v-list-tile slot="activator">
                <v-list-tile-title style="font-size: 17px">Available</v-list-tile-title>
              </v-list-tile>

              <v-list-tile
                v-for="(dc, i) in dcs"
                :key="i"
                @click="open"
              >
                <v-list-tile-title  v-on:click="proceed(dc[0])"  v-text="dc[0]" style="font-size:11px;"></v-list-tile-title>
                <v-list-tile-action>
                  <v-icon></v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>
          </v-list-group>
          <v-list-group
            prepend-icon="account_circle"
            value="true"
          >
            <v-list-tile slot="activator" >
              <v-list-tile-title style="font-size: 18px">Users manage</v-list-tile-title>
            </v-list-tile>

            <v-list-group
              no-action
              sub-group
              value="true"
            >
              <v-list-tile slot="activator">
                <v-list-tile-title>Admin</v-list-tile-title>
              </v-list-tile>

              <v-list-tile
                v-for="(admin, i) in admins"
                :key="i"
                @click="open"
              >
                <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                <v-list-tile-action>
                  <v-icon v-text="admin[1]"></v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>

            <v-list-group
              sub-group
              no-action
            >
              <v-list-tile slot="activator">
                <v-list-tile-title>Actions</v-list-tile-title>
              </v-list-tile>

              <v-list-tile
                v-for="(crud, i) in cruds"
                :key="i"
                @click="open"
              >
                <v-list-tile-title v-on:click="ebash = crud[0]" v-text="crud[0]"></v-list-tile-title>
                <v-list-tile-action>
                  <v-icon v-text="crud[1]"></v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>
          </v-list-group>
        </v-list>
        </div>
        <!--<video controls autoplay>
          <source src="../assets/dvizh.mp4" type="video/mp4" v-if="ebash">
          Your browser does not support the video tag.
        </video>
           <hydra>
            <img src="../assets/unit_7_2.gif" style="position: absolute; top: 76%; left: 18%;"/>
          </hydra> -->
        <!-- <Info style="position: absolute; left:5%; right: 5%; bottom: 7%; font-family: SimSun; text-align: center; color:#f2f2f2">Project:Hydra_Synergy, inventory tool, device66, 2018</Info>-->
  </v-navigation-drawer>
    </nav>
      <main id="panel">
        <header>
          <div>
            <expand-btn class="toggle-button"><v-btn icon  style="margin-left: 14%"><v-icon>menu</v-icon></v-btn>
              <v-btn icon v-if="mode !== 'dashboard'"><v-icon>dashboard</v-icon></v-btn>
              <v-btn icon  color="black" v-show="mode === 'dashboard'"><v-icon color="#4865E3" dark >dashboard</v-icon></v-btn>
              <!-- <v-btn icon v-if="mode !== 'chart'"><v-icon>graphic_eq</v-icon></v-btn>
              <v-btn icon  color="black" v-show="mode === 'chart'"><v-icon color="#00cb00" dark>graphic_eq</v-icon></v-btn> -->
              <v-btn icon v-if="mode !== 'table'"><v-icon>tab</v-icon></v-btn>
              <v-btn icon  color="black" v-show="mode === 'table'"><v-icon color="#4865E3" dark>tab</v-icon></v-btn>
              <v-btn icon v-show="dev === false || dev === 'none'"><v-icon>device_hub</v-icon></v-btn>
              <v-btn v-show="dev !== false && dev !=='none'" icon style="font-family: 'Copperplate Gothic Bold'">{{dev}}</v-btn>
              <v-btn icon v-show="see === false || see === 'none'"><v-icon>domain</v-icon></v-btn>
              <v-btn v-show="see !== false && see !=='none'" icon medium outline style="font-family: 'Copperplate Gothic Bold'; "><b  style="color: #4865E3">{{see}}</b></v-btn>
              <v-btn icon><v-icon>account_circle</v-icon></v-btn></expand-btn>
           <!--  <v-btn icon v-on:click="info = !info" style="position: absolute; bottom: 6%; left: -4%">
            <v-icon medium light>info_outline</v-icon>
            </v-btn> -->
            <!--<v-divider style=" position: absolute; top: 80%;"></v-divider>
            <v-icon style=" position: absolute; top: 80%; left: 11%;" large v-show="mode === 'Table'">tab</v-icon>
            <v-icon style=" position: absolute; top: 80%; left: 11%;" large v-show="mode === 'Chart'">graphic_eq</v-icon> -->
            <Clock :blink="true" style=" position: absolute; top: 90%; left: 11%; font-family: 'Courier New'; color: #bababa"></Clock>
            <div style="position: absolute; top: 92%; left: 15%; font-family: 'Courier New'; color: #bababa">{{ new Date().getDate() }} {{ new Date().getMonth() }} {{ new Date().getFullYear() }}</div>
          </div>
        </header>
      </main>
    <esc style="position: fixed; background: linear-gradient(to bottom, #6d4585 0%, #f8f8f6 100%);   left: 324px; top: 7.5%;  bottom: 85%; right: 4%; font-family: 'Roboto', serif; font-size: 17px" v-if="see && mode && mode !== 'dashboard'">
      <v-icon style="position: absolute;left: 1%; top: 22%">my_location</v-icon>
      <v-text style="position: absolute;left: 4%; top: 26%">
        <b>Currently you are viewing <u>{{see}}</u>, mode: {{mode}}</b>
      </v-text>
    <v-btn icon style="right: -95%" v-on:click="seen"><v-icon dark>close</v-icon></v-btn>
     <!-- <v-btn icon style="right: -68%" v-show="mode === 'Table'" v-on:click="see= false"><v-icon dark>close</v-icon></v-btn> -->
    </esc>
    <esc2 style="position: fixed; background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, #ffffff 100%); left: 324px; top: 7.5%;  bottom: 85%; right: 4%; font-family: 'Roboto', serif; font-size: 18px" v-if="mode === 'dashboard'">
      <v-icon light style="position: absolute;left: 1%; top: 22%">my_location</v-icon>
      <v-text style="position: absolute;left: 4%; top: 26%;">
        <b>Currently you are in mode: {{mode}}</b>
      </v-text>
      <v-btn icon style="right: -95%" v-on:click="seen"><v-icon >close</v-icon></v-btn>
      <!-- <v-btn icon style="right: -68%" v-show="mode === 'Table'" v-on:click="see= false"><v-icon dark>close</v-icon></v-btn> -->
    </esc2>
 <!-- DEBUG   <esc2 style="position: absolute; background: linear-gradient(to bottom, #feffff 0%, #6c2f82 100%);   left: 324px; top: 3.5%;  bottom: 69%; right: -490%; font-family: 'Roboto', serif; font-size: 18px">
      <v-icon light style="position: absolute;left: 1%; top: 22%">my_location</v-icon>
      <v-text style="position: absolute;left: 4%; top: 26%;">
        <b>Currently you are in mode: {{ebash}}</b>
      </v-text>
      <v-btn icon style="right: -95%" v-on:click="seen"><v-icon light>close</v-icon></v-btn> -->
      <!-- <v-btn icon style="right: -68%" v-show="mode === 'Table'" v-on:click="see= false"><v-icon dark>close</v-icon></v-btn> -->

      <lrkDT :name1="ebash" style="position: fixed; left: 324px; right: 4%; top: 13.8%; bottom: 10%; overflow-y: auto" v-if="mode==='table' && see !== false && see !=='none'"></lrkDT>
    <!-- <miaDT style="position: absolute; left: 324px; right: -465%; top: 10%; bottom: 10%; overflow-y: auto" v-if="see==='MIA2' && mode==='table'"></miaDT> -->
    <miaDash style="position: absolute; left: 324px; right: -465%; top: 10%; height: 464px; background: #f5f5f5" v-if="see==='MIA2' && mode==='chart'"></miaDash>
    <lrkDash style="position: absolute; left: 324px; right: -465%; top: 10%; height: 464px; background: #f5f5f5" v-if="see==='LRK1' && mode==='chart'"></lrkDash>
    <Dash :hwvsall="hwvsall" :dash_val="ebash" style="position: fixed; background: linear-gradient(to bottom, rgb(255,255,255) 0%, rgba(0,0,0,0.8) 100%); left: 324px; right: 4%; top: 13.8%; bottom: 10%; " v-if="mode === 'dashboard'"></Dash>
  </Slideout>
</template>

<script>
import miaDT from '@/components/miaDT'
import miaDash from '@/components/miaDash'
import Dash from '@/components/Dash'
import lrkDash from '@/components/lrkDash'
import lrkDT from '@/components/lrkDT'
import tb from '@/components/tb'
import VTextField from 'vuetify/es5/components/VTextField/VTextField'
import VBtn from 'vuetify/es5/components/VBtn/VBtn'
import VIcon from 'vuetify/es5/components/VIcon/VIcon'
import VCard from 'vuetify/es5/components/VCard/VCard'
import VListTile from 'vuetify/es5/components/VList/VListTile'
import VInput from 'vuetify/es5/components/VInput/VInput'
import VContainer from 'vuetify/es5/components/VGrid/VContainer'
import VLayout from 'vuetify/es5/components/VGrid/VLayout'
import VFlex from 'vuetify/es5/components/VGrid/VFlex'
import VForm from 'vuetify/es5/components/VForm/VForm'
import VNavigationDrawer from 'vuetify/es5/components/VNavigationDrawer'
import VList from 'vuetify/es5/components/VList/VList'
import VListGroup from 'vuetify/es5/components/VList/VListGroup'
import VListTileAction from 'vuetify/es5/components/VList/VListTileAction'
import VListTileAvatar from 'vuetify/es5/components/VList/VListTileAvatar'
import VDivider from 'vuetify/es5/components/VDivider/VDivider'
import VTab from 'vuetify/es5/components/VTabs/VTab'
import Slideout from 'vue-slideout'
import Clock from 'vue-digital-clock'
import Vuetify from 'vuetify/es5/components/Vuetify/'
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
import axios from 'axios'
export default {
  name: 'Nnd',
  components: {
  //  axios1,
    miaDT,
    Dash,
    miaDash,
    tb,
    Vuetify,
    lrkDT,
    lrkDash,
    Clock,
    VTab,
    VBtn,
    VDivider,
    VForm,
    VContainer,
    VLayout,
    VFlex,
    VInput,
    VTextField,
    VList,
    VNavigationDrawer,
    VListGroup,
    VListTileAction,
    VListTileAvatar,
    VListTile,
    VCard,
    VIcon,
    Slideout
  },
  props: {
    mode: {
      type: String
    },
    see: {
      type: String
    },
    ebash: {
      type: Array
    },
    hwvsall: {
      type: Array
    }
  },
  data () {
    return {
      dev: false,
      // hwvsall: [0],
      // ebash: 'lol',
      // see: false,
      // mode: false,
      items: [
        {title: 'Dashboard', icon: 'dashboard'},
        // {title: 'Chart', icon: 'graphic_eq'}
        {title: 'Table', icon: 'tab'}
        // {title: 'Infrastructure', icon: 'domain'}
      ],
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ],
      ucs: [
        ['ALL', 'UCS'],
        ['UCS1', 'UCS1'],
        ['UCS2']
      ],
      dcs: [
        ['ALL'],
        ['AMS'],
        ['ASH'],
        ['BER'],
        ['CHI'],
        ['FRA'],
        ['LON'],
        ['HKG'],
        ['SAO'],
        ['SYD']
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
      ]
    }
  },
  methods: {
    proceed: function (x) {
      var y
      y = x
      x = 'ASH'
      x = y
      // this.ebash = null
      this.mode = false
      if (x === 'ALL') {
        axios.get('http://10.211.34.12:8080/api/v0/device?name__contains=')
          .then(response => (this.ebash = response.data)).then(x => (this.see = y))
        loadProgressBar()
      } else {
        loadProgressBar()
        axios.get('http://10.211.34.12:8080/api/v0/device?name__contains=' + x)
          .then(response => (this.ebash = response.data)).then(x => (this.see = y))
      }
      /* const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
      sleep(5000).then(() => {
        this.see = x
      }) */
      //     } else alert('fku')
    },
    collect: function (x) {
      var y
      y = x
      x = 'ASH'
      x = y
      // this.ebash = null
      this.mode = false
      if (x === 'dashboard') {
        axios.get('http://10.211.34.12:8080/api/v0/device?name__contains=')
          .then(response => (this.ebash = response.data)).then(x => (this.mode = y))
        axios.get('http://10.211.34.12:8080/api/v0/device?mac_eth0__contains=:')
          .then(response => (this.hwvsall = response.data.length))
        // let z = this.hwvsall
        // this.hwvsall = parseInt(z / this.ebash.length * 100)
        loadProgressBar()
      } else { this.mode = x }
      //     } else alert('fku')
    },
    open: function () {
      // this.ebash = !this.ebash
      // alert(this.mode)
      console.log('slideoutOpen')
    },
    seen: function () {
      // this.ebash = null
      this.mode = false
      this.see = false
    }
  },
  computed: {
    s () {
      return this.mode
    }
  }
}

</script>

<style scoped>
  img {
    position: absolute;
    left: 70px;
    top:6px;

  }
  #panel {
  }
  .slideout-menu {
    position: fixed;
    top: 54px;
    width: 256px;
    height: 95vh;
    z-index: 0;
    display: none;
  }

  .slideout-menu-left {
    left: 0;
    border-right-width: 2px;
  }

  .slideout-menu-right {
    right: 0;
  }

  .slideout-panel {
    background: linear-gradient(to bottom, #f8f8f6 0%, #311b3e 100%);
    position: fixed;
    height: 95vh;
    width: 54px;
    z-index: 1;
    min-height: 1vh;
    will-change: transform;
    -webkit-box-shadow: 10px 10px 20px -2px #ff963d;
    box-shadow: 10px 10px 20px -2px #415eca;
  }

  .slideout-open,
  .slideout-open body,
  .slideout-open .slideout-panel {
    overflow: hidden;
    position: fixed;
  }

  .slideout-open .slideout-menu {
    display: block;

  }
  .slideout-open .slideout-panel-left{
    transform: translateX(248px);
    -webkit-transform: translateX(248px);
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgb(186, 186, 186);
  }
  ::-webkit-scrollbar-thumb {
    background-color: #8e61bf;  /*thumb color */
    outline: 2px solid #fffffd;
  }
</style>
