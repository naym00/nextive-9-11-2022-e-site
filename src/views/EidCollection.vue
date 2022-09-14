<template>
    <div class="eidcollection">
      <NavBar :NavBarDetails="navbarDetails" v-on:getRating="getRating($event)" v-on:getLowHighPrice="getLowHighPrice($event)"></NavBar>
      <HomePage :lowHighPrice="lowHighPrice" :lowHighRating="lowHighRating" :category="category"></HomePage>
    </div>
</template>
  
<script>
  import navBarForEidCollection from "@/assets/forNavbar/EidCollection.json";
  import NavBar from '@/components/Home/NavBar.vue'
  import HomePage from '@/components/Home/HomePage.vue'
  export default {
    name: 'EidCollection',
    components: {
      NavBar,
      HomePage,
    },
    data(){
      return {
        lowHighPrice: [0, 1000],
        lowHighRating: [0, 5],
        category: "eid collection",
        navbarDetails: JSON.parse(JSON.stringify(navBarForEidCollection)),
      }
    },
    mounted(){
    },
    methods: {
    getLowHighPrice(price){
      if(price != 'Cancle'){
        this.lowHighPrice = [...(price.split("-")).map(Number)];
      }
    },
    getRating(rating){
      if(rating != 'Cancle'){
        this.lowHighRating = [...(rating.split("-")).map(Number)];
      }
    },
  },
    
  }
</script>
  