<template>
  <div class="home">

    <NavBar :NavBarDetails="navbarDetails" v-on:getRating="getRating($event)" v-on:getLowHighPrice="getLowHighPrice($event)"></NavBar>
    <h3 class="page-heading">{{prepareHeading()[0].name}}</h3>
    <HomePage :lowHighPrice="lowHighPrice" :lowHighRating="lowHighRating" :category="category"></HomePage>
  </div>
</template>

<script>
import navBarForEidCollection from "@/assets/forNavbar/HomeView.json";

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
      lowHighRating: [0, 5],
      category: "all",
      navbarDetails: JSON.parse(JSON.stringify(navBarForEidCollection)),
      //addToCartProductDetails: JSON.parse(window.localStorage.getItem('productAddToCartLocalStorage')),
      //CartList: [],
    }
  },
  /*
  mounted(){
    this.addToCart();
  },
  
  watch:{
    
    addToCartProductDetails: function (){
      console.log('Here!!');
    this.addToCartProductList.push(this.addToCartProductDetails);
    window.localStorage.removeItem('productAddToCartLocalStorage');
  }

},*/
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
