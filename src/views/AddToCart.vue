<template>
    <div class="addtocart-">
      <NavBar :NavBarDetails="navbarDetails" :addToCartLength="getAddToCartProducts().length"></NavBar>
      <h3 class="page-heading">{{prepareHeading[0].name}}</h3>

      <div v-if="getAddToCartProducts().length" class="flex-container">
        <div class="inner-flex-container">
            <table class="products">
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Size</th>
                    <th>Delete</th>
                </tr>
                <tr v-for="(product, index) in getAddToCartProducts()" :key="product[2]">
                    <td><img class="image" :src="product[1]" alt="product image"/></td>
                    <td><h1>{{product[0]}}</h1></td>
                    <td><h1>{{product[2].join('-')}}</h1></td>
                    <td><h1>{{product[3].join('-')}}</h1></td>
                    <td><h1>{{product[4].join('-')}}</h1></td>
                    <td><button @click="deleteProduct($event)" :value="index">Delete</button></td>
                    
                </tr>
            </table>
        </div>
      </div>
    
      <div v-else class="cart-div"> 
        <h3 class="">Your Cart is Empty!</h3>
      </div>
    </div>
</template>
  
<script>
  import navBarForAddToCart from "@/assets/forNavbar/AddToCart.json";
  import NavBar from '@/components/Home/NavBar.vue'
  export default {
    name: 'AddToCart',
    components: {
      NavBar,
    },
    data(){
      return {
        navbarDetails: JSON.parse(JSON.stringify(navBarForAddToCart)),
      }
    },
    methods: {
      getAddToCartProducts(){
      let addtoCartProductsSTR = window.localStorage.getItem('ProductsAddToCart');
      
      return JSON.parse(`[${addtoCartProductsSTR}]`);
    },

    deleteProduct(index){
      let afterDeleteProduct = this.getAddToCartProducts().filter((product, productIndex) => {
        if(productIndex != parseInt(index.target.value)){
          return product;
        }
      });
      let afterDeleteProductSTR = JSON.stringify(afterDeleteProduct);
      window.localStorage.removeItem('ProductsAddToCart');
      window.localStorage.setItem('ProductsAddToCart', afterDeleteProductSTR.substring(1, afterDeleteProductSTR.length-1));
      this.$router.go();
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
    .flex-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .inner-flex-container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .products {
  border-collapse: collapse;
  width: 100%;
}

.products td, .products th {
  border: 1px solid #ddd;
  padding: 8px;
}

.products tr:nth-child(even){background-color: #f2f2f2;}

.products tr:hover {background-color: #ddd;}

.products th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04AA6D;
  color: white;
}
.cart-div{
  display: flex;
  justify-content: center;
}
.cart-div h3{
  font-size: 200%;
  color:brown;
}
</style>

  