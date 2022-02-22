<template>
  <div class="container">
    <div class="colum">
      <div>
        <search-component v-model="searchValue" />
      </div>

      <div v-if="!loader && secondArray.length > 0" class="colum card-styles">
        <div v-for="(item, index) in secondArray" :key="index" class="cards-content">
          <card-component
            :infoCard="item"
          />
        </div>
      </div>

      <div v-else-if="!loader && secondArray.length === 0" class="text-not-found">
        No se encontraron resultados.
      </div>

      <div v-if="loader" class="colum card-styles">
        <div v-for="item in 10" :key="item" class="cards-content">
          <card-component
            :loader="loader"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as network from '@/utils/getInformation.js'

export default {
  data () {
    return {
      searchValue: '',
      loader: false,
      infoCard: [],
      secondArray: []
    }
  },
  watch: {
    searchValue () {
      this.searchFuntion()
    }
  },
  mounted() {
    this.getCategories()
  },
  methods: {
    async getCategories () {
      this.loader = true
      const { data, status } = await network.getData()

      if (status === 'ok') {
        this.infoCard = data
        this.secondArray = data
      }

      this.loader = false
    },
    searchFuntion () {
      const search = this.infoCard.find(e => e.name.esp.toLowerCase() === this.searchValue.toLowerCase())
      this.secondArray = []
      
      if (this.searchValue === '') {
        this.secondArray = this.infoCard
      }
      if (search) {
        this.secondArray.push(search)
      }
      console.log(search)
    },
    hdlOnChange (value) {
      setTimeout(function() {
        this.searchValue(value)
      }, 5000);
    }
  },
  components: {
    CardComponent: () => import('@/components/ui/CardComponent'),
    SearchComponent: () => import('@/components/ui/SearchComponent')
  }
}
</script>
