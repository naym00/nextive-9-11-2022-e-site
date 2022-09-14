<template>
  <div class="homepage">
    <ShowAllProducts :products="copyProducts"></ShowAllProducts>
  </div>
  
</template>

<script>
  import extraProducts from '@/assets/ExtraProduct/extraProduct.json'
    import ShowAllProducts from '@/components/ShowAllProducts.vue'
export default {
  name: "HomePage",
  components: {
    ShowAllProducts,
  },
  props: ["lowHighPrice", "lowHighRating", "category"],
  data() {
    return {
        products: [],
        copyProducts: [],
        extraAddedProducts: JSON.parse(JSON.stringify(extraProducts)),
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
            this.products = [...response.data].map(item => ({ title: item.title, price: item.price, description: item.description, category: [item.category], image: item.image, rate: item.rating.rate, discount: parseInt(Math.random() * (10 - 1) + 1)}));
            this.products = [...this.products, ...this.extraAddedProducts]
            if(this.category == "all"){
              this.copyProducts = [...this.products];
            }
            else{
              this.copyProducts = this.products.filter(product => product.category.indexOf(this.category) != -1);
            }
          })
          .catch((err) => console.log(err));
    },
  },
  watch:{

    lowHighPrice: function (){
      this.copyProducts=[...this.products.filter(product => product.price >= this.lowHighPrice[0] && product.price <= this.lowHighPrice[1])];
    },
    lowHighRating: function (){
      this.copyProducts=[...this.products.filter(product => product.rate >= this.lowHighRating[0] && product.rate <= this.lowHighRating[1])];
    }

  },
};
</script>

<style scoped></style>
