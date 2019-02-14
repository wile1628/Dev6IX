<template>
  <v-form>
    <div class="block">
      <p class="digit">{{ days | two_digits }}</p>
      <p class="text">Days</p>
    </div>
    <div class="block">
      <p class="digit">{{ hours | two_digits }}</p>
      <p class="text">Hours</p>
    </div>
    <div class="block">
      <p class="digit">{{ minutes | two_digits }}</p>
      <p class="text">Minutes</p>
    </div>
    <div class="block">
      <p class="digit">{{ seconds | two_digits }}</p>
      <p class="text">Seconds</p>
    </div>
  </v-form>
</template>

<script>
import VForm from 'vuetify/es5/components/VForm/VForm'
export default {
  components: {VForm},
  methods: {
    todo () {
      window.setInterval(function () {
        this.now = Math.trunc((new Date()).getTime() / 1000)
      }.bind(this), 1000)
    }
  },
  mounted: function () {
    this.todo()
  },
  props: {
    date: {
      type: Date
    }
  },
  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },
  computed: {
    seconds () {
      var mydate = new Date(this.date)
      var next = Math.trunc(mydate.getTime() / 1000)
      return (next - this.now) % 60
    },
    minutes () {
      var mydate = new Date(this.date)
      var next = Math.trunc(mydate.getTime() / 1000)
      return Math.trunc((next - this.now) / 60) % 60
    },
    hours () {
      var mydate = new Date(this.date)
      var next = Math.trunc(mydate.getTime() / 1000)
      return Math.trunc((next - this.now) / 60 / 60) % 24
    },
    days () {
      var mydate = new Date(this.date)
      var next = Math.trunc(mydate.getTime() / 1000)
      return Math.trunc((next - this.now) / 60 / 60 / 24)
    }
  }
}

</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);
  .block {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }
  .text {
    color: #1abc9c;
    font-size: 40px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 400;
    margin-top:10px;
    margin-bottom: 10px;
    text-align: center;
  }
  .digit {
    color: #979b9c;
    font-size: 65px;
    font-weight: 100;
    font-family: 'Roboto', serif;
    margin: 10px;
    text-align: center;
  }
</style>
