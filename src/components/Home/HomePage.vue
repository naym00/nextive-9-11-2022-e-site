<template>
  <div class="homepage">
    <GetProductsFromApi v-on:getAllProducts="getProducts($event)"></GetProductsFromApi>
    <ShowAllProducts :products="copyProducts"></ShowAllProducts>
  </div>
  
</template>

<script>
    import GetProductsFromApi from '@/components/GetProductsFromApi.vue'
    import ShowAllProducts from '@/components/ShowAllProducts.vue'
export default {
  name: "HomePage",
  components: {
    GetProductsFromApi,
    ShowAllProducts,
  },
  props: ["lowHighPrice"],
  data() {
    return {
        products: [],
        copyProducts: [],
    };
  },
  methods: {
    getProducts(allProducts){
        this.products=[...allProducts.filter(product => product.price >= this.lowHighPrice[0] && product.price <= this.lowHighPrice[1])];
        this.copyProducts = [...this.products];
    }
  },
  watch:{

    lowHighPrice: function (){
      this.copyProducts=[...this.products.filter(product => product.price >= this.lowHighPrice[0] && product.price <= this.lowHighPrice[1])];
    }

  },
};
</script>

<style scoped></style>
