<template>
  <div class="homepage">
    <!--<GetProductsFromApi v-on:getAllProducts="getProducts($event)"></GetProductsFromApi>-->
    <ShowAllProducts :products="copyProducts"></ShowAllProducts>
  </div>
  
</template>

<script>
    //import GetProductsFromApi from '@/components/GetProductsFromApi.vue'
    import ShowAllProducts from '@/components/ShowAllProducts.vue'
export default {
  name: "HomePage",
  components: {
    //GetProductsFromApi,
    ShowAllProducts,
  },
  props: ["lowHighPrice"],
  data() {
    return {
        products: [],
        copyProducts: [],
    };
  },
  mounted(){
    this.getProductDataFromAPI();
  },
  methods: {
    getProductDataFromAPI(){
      console.log('Called!');
      const apiUrl = "https://fakestoreapi.com/products";
        this.$http
          .get(apiUrl)
          .then((response) => {
            this.products = [...response.data].map(item => ({ title: item.title, price: item.price, description: item.description, category: item.category, image: item.image, rate: item.rating.rate, discount: parseInt(Math.random() * (10 - 1) + 1)}));
            //this.$emit('getAllProducts', this.products);
            this.getProducts();
          })
          .catch((err) => console.log(err));
    },
    //getProducts(allProducts){
    //    this.products=[...allProducts.filter(product => product.price >= this.lowHighPrice[0] && product.price <= this.lowHighPrice[1])];
    //    this.copyProducts = [...this.products];
    //}
    getProducts(){
      this.copyProducts=[...this.products.filter(product => product.price >= this.lowHighPrice[0] && product.price <= this.lowHighPrice[1])];
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
