<template>
  <div id="app">
    <principal-component />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    PrincipalComponent: () => import('@/components/Principal')
  }
}
</script>

