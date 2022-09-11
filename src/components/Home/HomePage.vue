<template>
  <div class="homepage">
    <GetProductsFromApi v-on:getAllProducts="getProducts($event)"></GetProductsFromApi>
    <ShowAllProducts :products="products"></ShowAllProducts>
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
    };
  },
  methods: {
    getProducts(allProducts){
        this.products = [...allProducts];
    }
  },
};
</script>

<style scoped></style>
