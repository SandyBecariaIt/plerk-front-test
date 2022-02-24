<template>
  <div class="login">
    <label>Iniciar sesión</label>

    <form>
      <div class="content-search center-content">
        <input
          class="input"
          v-model="form.email"
          placeholder="example@hotmail.com"
          required
        />
      </div>

      <div class="content-search center-content">
        <input
          class="input"
          v-model="form.password"
          placeholder="********"
          type="password"
          required
        />
      </div>

      <div class="link-content">
        <a
          class="link"
          @click="forgetPassword"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <button
        class="button"
        @click="login"
      >
        Iniciar sesión
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$auth.loginWithRedirect();
    },
    forgetPassword () {
      this.$router.push('/forget-password')
    }
  }
}
</script>
