<template>
  <div class="home">
    <NavBar v-on:getLowHighPrice="getLowHighPriceRange($event)"></NavBar>
    <HomePage :lowHighPrice="lowHighPrice"></HomePage>

  </div>
</template>

<script>
import NavBar from '@/components/Home/NavBar.vue'
import HomePage from '@/components/Home/HomePage.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    HomePage
  },
  data(){
    return {
      lowHighPrice: [0, 1000],
    }
  },
  methods: {
    getLowHighPriceRange(price){
      this.lowHighPrice = [...(price.split("-")).map(Number)];
    },
  }
}
</script>
