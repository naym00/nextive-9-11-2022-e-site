<template>
    <div class="newcollection">
      <NavBar :NavBarDetails="navbarDetails"></NavBar>
      <HomePage :lowHighPrice="lowHighPrice" :lowHighRating="lowHighRating" :category="category"></HomePage>
    </div>
</template>
  
<script>
  import navBarForNewCollection from "@/assets/forNavbar/NewCollection.json";
  import NavBar from '@/components/Home/NavBar.vue'
  import HomePage from '@/components/Home/HomePage.vue'
  export default {
    name: 'NewCollection',
    components: {
      NavBar,
      HomePage,
    },
    data(){
      return {
        lowHighPrice: [0, 1000],
        lowHighRating: [0, 5],
        category: "new collection",
        navbarDetails: JSON.parse(JSON.stringify(navBarForNewCollection)),
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
  