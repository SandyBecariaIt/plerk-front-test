<template>
  <div class="content-search">
    <input @input="e => hdlOnChange(e)" class="input" />
  </div>
</template>

<script>
export default {
  methods: {
    hdlOnChange (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
