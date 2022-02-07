<template>
  <div>
    <div v-if="!loader" class="card-content shadow1">
      <div class="img-content">
        <img class="img" :src="infoCard.image " />
      </div>

      <div class="content-text">
        <p class="item item-name">{{ infoCard.name.esp }}</p>
        <p class="item item-info">{{ currency(infoCard.suggested_budget || 0) }}</p>
        <p class="item item-info">{{ choseCategory(infoCard.category_type) }}</p>
      </div>

    </div>

    <div v-else class="card-content shadow1">
      <div class="img-content">
        <div class="loader-img" />
      </div>

      <div class="content-text">
        <template >
          <div class="loader" />
          <div class="loader" />
          <div class="loader" />
        </template>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    infoCard: {
      type: Object,
      default: () => {}
    },
    loader: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    choseCategory (type) {
      let category = ''
      switch (type) {
        case 1:
          category = 'Normal'
          break
        case 2:
          category = 'Libre'
          break
        default:
          category = 'Personalizada'
          break
      }

      return category
    },
    currency (number) {
      return Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(number);
    }
  }
}
</script>

