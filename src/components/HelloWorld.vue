<template>
  <div class="hello">
    <tb></tb>
  </div>
</template>

<script>
import Slideout from 'vue-slideout'
import tb from '@/components/tb'
import Nnd from '@/components/Nnd'
import DT from '@/components/DT'
import Clock from 'vue-digital-clock'
import VFooter from 'vuetify/es5/components/VFooter'
// import VApp from 'vuetify/es5/components/VApp/VApp'
// import VToolbar from 'vuetify/es5/components/VToolbar/VToolbar'
// import VToolbarSideIcon from 'vuetify/es5/components/VToolbar/VToolbarSideIcon'
// Slideout.use(ToggleButton)

export default {
  name: 'HelloWorld',
  components: {
    VFooter,
    Clock,
    Nnd,
    tb,
    DT,
    Slideout
  },
  methods: {
    open: function () {
      console.log('slideoutOpen')
    }
  },

  data () {
    return {
      msg: 'Welcome to Device [Synergy]'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--overflow-y: scroll;sl.menu-->
<!-- width: 1956px;-->
<style scoped>

</style>
