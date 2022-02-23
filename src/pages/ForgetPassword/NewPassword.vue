<template>
  <div class="login">
    <label>Iniciar sesión</label>

    <form>
      <div class="content-search">
        <input
          class="input"
          v-model="password"
          placeholder="Nueva contraseña"
          type="password"
          required
        />
      </div>

      <div class="content-search center-content">
        <input
          class="input"
          v-model="confirmPassword"
          placeholder="Repetir contraseña"
          type="password"
          required
        />
      </div>

      <button
        class="button"
        @click="goToLogin"
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
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    goToLogin () {
      this.$router.push('/')
    }
  }
}
</script>
