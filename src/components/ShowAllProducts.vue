<template>
  <div class="showallproducts">


    <div v-if="products.length" class="flex-container">
        <div class="inner-flex-container">
            <!--For Loop-->

                <div class="card-container" v-for="product in products" :key="product.id">
                    <SingleProductCard :product="product"></SingleProductCard>
                </div>

            <!--For Loop-->
        </div>
    </div>
    <div class="loading" v-else>
      <img v-if="displayLoadingImage" clas="responsive-image" src="../assets/images/loading.gif" alt="loading image"/>
      <h3 class="no-products-available" v-else>No Products are available!</h3>
    </div>


  </div>
</template>

<script>
    import SingleProductCard from './SingleProductCard.vue'
export default {
  name: "ShowAllProducts",
  props: ['products'],
  components: {
    SingleProductCard,
  },
  data() {
    return {
      displayLoadingImage: true,
    };
  },
  mounted() {
  },
  watch:{
    products: function (){
      if(this.products.length!=0){
          this.displayLoadingImage = false;
        }
    },

  },

  methods: {
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.inner-flex-container{
    display: flex;
    flex-flow: row wrap;
    flex-direction: row;
    justify-content: space-around;
}
.card-container{
    margin: 5px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 515px;
    border-radius: 20px;
    box-shadow: 5px 10px 18px #888888;
    
}
.loading{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}
.responsive-image {
  width: 100%;
  height: auto;
}
.no-products-available{
  font-size: 200%;
  color: red;
}
</style>
