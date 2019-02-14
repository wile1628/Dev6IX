<template>
  <!-- https://paweljw.github.io/2017/09/vue.js-front-end-app-part-3-authentication/ -->
  <div class="login-wrapper" v-on:keyup.enter="login">
    <div class="alert alert-danger" v-if="error">{{ error }}</div>
    <img  src="../assets/bck4.jpg" id="bg" alt=""/>
    <v-form style="background: rgba(245,245,245,0.71); position: absolute; left: 30%; right: 30%; top: 30%">
      <v-container fluid>
        <img src="../assets/login.gif" style="position: absolute; top: -18.5%; left: 0%; background: rgba(245,245,245,0.71);"/>
          <v-text-field
            v-model="username"
            label="Username"
          ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'visibility_off' : 'visibility'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="Make sure no one can see it"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
        <v-btn flat large v-on:click="login" style="background: rgba(245,245,245,0.71); position: absolute; left: 41%;  top: 101%"><v-icon>lock_open</v-icon>Login</v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import VBtn from 'vuetify/es5/components/VBtn/VBtn'
import VIcon from 'vuetify/es5/components/VIcon/VIcon'
import VTextField from 'vuetify/es5/components/VTextField/VTextField'
import VFlex from 'vuetify/es5/components/VGrid/VFlex'
import VLayout from 'vuetify/es5/components/VGrid/VLayout'
import VContainer from 'vuetify/es5/components/VGrid/VContainer'
import VForm from 'vuetify/es5/components/VForm/VForm'

export default {
  name: 'Login',
  components: {
    VIcon,
    VBtn,
    VTextField,
    VFlex,
    VLayout,
    VContainer,
    VForm
  },
  data () {
    return {
      username: '',
      error: false,
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: '',
      rules: {
        required: value => !!value || 'Required',
        min: v => v.length >= 8 || 'Doesn\'t seems like your password, it\'s too short!'
      }
    }
  },
  methods: {
    login () {
      // this.$http.post('/auth', { user: this.email, password: this.password })
      if (this.username === 'ohud' && this.password === 'ltvjysvjzcbkf4') { this.loginSuccessful() } else this.loginFailed()
      //   .then(request => this.loginSuccessful(request))
      //   .catch(() => this.loginFailed()
      console.log(this.username)
      console.log(this.password)
    },
    loginSuccessful () {
      this.$router.replace(this.$route.query.redirect || '/main')
    },
    loginFailed () {
      this.error = 'Login failed!'
      alert(this.error)
    }
  }
}
</script>

<style scoped>
  #bg {
    position: fixed;
    top: 0;
    left: 0;

    /* Preserve aspet ratio */
    min-width: 100%;
    min-height: 100%;
  }
</style>
