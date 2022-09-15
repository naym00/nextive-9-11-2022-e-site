<template>
    <div class="pujacollection">
      <NavBar :NavBarDetails="navbarDetails" :addToCartLength="getAddToCartProducts().length" v-on:getRating="getRating($event)" v-on:getLowHighPrice="getLowHighPrice($event)"></NavBar>
      <h3 class="page-heading">{{prepareHeading()[0].name}}</h3>
      <HomePage :lowHighPrice="lowHighPrice" :lowHighRating="lowHighRating" :category="category"></HomePage>
    </div>
</template>
  
<script>
  import navBarForPujaCollection from "@/assets/forNavbar/PujaCollection.json";
  import NavBar from '@/components/Home/NavBar.vue'
  import HomePage from '@/components/Home/HomePage.vue'
  export default {
    name: 'PujaCollection',
    components: {
      NavBar,
      HomePage,
    },
    data(){
      return {
        lowHighPrice: [0, 1000],
        lowHighRating: [0, 5],
        category: "puja collection",
        navbarDetails: JSON.parse(JSON.stringify(navBarForPujaCollection)),
      }
    },
    mounted(){
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
    },
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
  