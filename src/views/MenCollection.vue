<template>
    <div class="mencollection">
      <NavBar :NavBarDetails="navbarDetails" :addToCartLength="getAddToCartProducts().length" v-on:getRating="getRating($event)" v-on:getLowHighPrice="getLowHighPrice($event)"></NavBar>
      <h3 class="page-heading">{{prepareHeading[0].name}}</h3>
      <HomePage :lowHighPrice="lowHighPrice" :lowHighRating="lowHighRating" :category="category"></HomePage>
    </div>
</template>
  
<script>
  import navBarForMenCollection from "@/assets/forNavbar/MenCollection.json";
  import NavBar from '@/components/Home/NavBar.vue'
  import HomePage from '@/components/Home/HomePage.vue'
  export default {
    name: 'MenCollection',
    components: {
      NavBar,
      HomePage,
    },
    data(){
      return {
        lowHighPrice: [],
        lowHighRating: [],
        category: "men's clothing",
        navbarDetails: JSON.parse(JSON.stringify(navBarForMenCollection)),
      }
    },
    methods: {
      getAddToCartProducts(){
      let addtoCartProductsSTR = window.localStorage.getItem('ProductsAddToCart');
      
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
  