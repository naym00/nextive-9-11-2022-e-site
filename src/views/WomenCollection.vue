<template>
    <div class="womencollection">
      <NavBar :NavBarDetails="navbarDetails"></NavBar>
      <HomePage :lowHighPrice="lowHighPrice" :lowHighRating="lowHighRating" :category="category"></HomePage>
    </div>
</template>
  
<script>
  import navBarForWomenCollection from "@/assets/forNavbar/WomenCollection.json";
  import NavBar from '@/components/Home/NavBar.vue'
  import HomePage from '@/components/Home/HomePage.vue'
  export default {
    name: 'WomenCollection',
    components: {
      NavBar,
      HomePage,
    },
    data(){
      return {
        lowHighPrice: [0, 1000],
        lowHighRating: [0, 5],
        category: "women's clothing",
        navbarDetails: JSON.parse(JSON.stringify(navBarForWomenCollection)),
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
  