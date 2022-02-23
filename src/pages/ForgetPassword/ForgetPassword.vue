<template>
  <div class="login">
    <label>Iniciar sesión</label>

    <form>
      <div class="content-search">
        <input
          class="input"
          v-model="email"
          placeholder="example@hotmail.com"
          required
        />
      </div>

      <button
        class="button"
        @click="goToNewPassword"
      >
        Recuperar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: ''
    }
  },
  methods: {
    goToNewPassword () {
      this.$router.push('/new-password')
    }
  }
}
</script>
