<template>
  <div class="home">

    <NavBar :NavBarDetails="['Home-', 'Category', 'About']" :cart_visibility="true" v-on:getLowHighPrice="getLowHighPriceRange($event)"></NavBar>

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
      //addToCartProductDetails: JSON.parse(window.localStorage.getItem('productAddToCartLocalStorage')),
      //CartList: [],
    }
  },
  mounted(){
    this.addToCart();
  },
  /*
  watch:{
    
    addToCartProductDetails: function (){
      console.log('Here!!');
    this.addToCartProductList.push(this.addToCartProductDetails);
    window.localStorage.removeItem('productAddToCartLocalStorage');
  }

},*/
  methods: {
    getLowHighPriceRange(price){
      if(price != 'Cancle'){
        this.lowHighPrice = [...(price.split("-")).map(Number)];
      }
      
    },
    addToCart(){

      console.log('Here!!');
      this.CartList.push(this.addToCartProductDetails);
      window.localStorage.removeItem('productAddToCartLocalStorage');
  },
  },
  
}

</script>
