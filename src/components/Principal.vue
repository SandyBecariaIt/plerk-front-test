<template>
  <div>
    <div>
      Buscador
    </div>

    <div>
      <card-component />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      infoCard: []
    }
  },
  components: {
    CardComponent: () => import('@/components/ui/CardComponent')
  }
}
</script>
