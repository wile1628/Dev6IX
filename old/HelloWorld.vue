<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <h2>My own</h2>
    <ul>
      <li>
        <a
          href="https://exchange.softserveinc.com/owa/#path=/mail"
          target="_blank"
        >
          Softserveinc
        </a>
      </li>
      <li>
        <a
          href="https://mail.cisco.com/owa/?bO=1#path=/mail"
          target="_blank"
        >
          Ciscomail
        </a>
      </li>
      <li>
        <a
          href="https://app.datadoghq.com/monitors/manage"
          target="_blank"
        >
          Datadog
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/"
          target="_blank"
        >
          Facebook
        </a>
      </li>
    </ul>
    <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open">
      <nav id="menu">
        <div>Menu</div>
      </nav>
      <main id="panel">
        <header>
          <div>
            <toggle-button :value="false" :color="black" :sync="true" :labels="true"/>
            <ToggleButton class="toggle-button">+</ToggleButton>
          </div>
        </header>
      </main>
    </Slideout>
  </div>
</template>

<script>
import Slideout from 'vue-slideout'
import ToggleButton from 'vue-js-toggle-button/src/Button'
Slideout.use(ToggleButton)

export default {
  name: 'HelloWorld',
  components: {
    Slideout
  },
  methods: {
    open: function () {
      console.log('slideoutOpen')
    }
  },
  data () {
    return {
      msg: 'Heyo, dude'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: circle;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 30px;
}
a {
  color: #42b983;
}
.slideout-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 256px;
  height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 0;
  display: none;
  background-color: #1D1F20;
  color: white;
}

.slideout-menu-left {
  left: 0;
}

.slideout-menu-right {
  right: 0;
}

.slideout-panel {
  background-color: #4B5;
  color: white;
  position: absolute;
  z-index: 1;
  will-change: auto;
  min-height: 1vh;
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
  overflow: hidden;
}

.slideout-open .slideout-menu {
  display: block;
}
</style>
