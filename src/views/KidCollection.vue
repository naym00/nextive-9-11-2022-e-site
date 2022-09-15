<template>
    <div class="kidcollection">
      <NavBar :NavBarDetails="navbarDetails" :addToCartLength="getAddToCartProducts().length" v-on:getRating="getRating($event)" v-on:getLowHighPrice="getLowHighPrice($event)"></NavBar>
      <h3 class="page-heading">{{prepareHeading[0].name}}</h3>
      <HomePage :lowHighPrice="lowHighPrice" :lowHighRating="lowHighRating" :category="category"></HomePage>
    </div>
</template>
  
<script>
  import navBarForKidCollection from "@/assets/forNavbar/KidCollection.json";
  import NavBar from '@/components/Home/NavBar.vue'
  import HomePage from '@/components/Home/HomePage.vue'
  export default {
    name: 'KidCollection',
    components: {
      NavBar,
      HomePage,
    },
    data(){
      return {
        lowHighPrice: [],
        lowHighRating: [],
        category: "kids",
        navbarDetails: JSON.parse(JSON.stringify(navBarForKidCollection)),
      }
    },
    methods: {
      getAddToCartProducts(){
      let addtoCartProductsSTR = localStorage.getItem('ProductsAddToCart');
      
      return JSON.parse(`[${addtoCartProductsSTR}]`);
    },
    getLowHighPrice(price){
      if(price != 'Cancle'){
        this.lowHighPrice = [...(price.split("-")).map(Number)];
      }
    },
    getRating(rating){
      if(rating != 'Cancle'){
        this.lowHighRating = [...(rating.split("-")).map(Number)];
      }
    }
  },
  computed: {
        prepareHeading(){
          return this.navbarDetails.navbars.filter(eachNavbar => eachNavbar.active);
        },
    },
    
  }
</script>

<style>
  .page-heading{
    font-size: 250%;
    color:burlywood;
    text-align: center;
  }
</style>
  