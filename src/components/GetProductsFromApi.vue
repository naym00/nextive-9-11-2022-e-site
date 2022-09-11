<script>
    export default {
      name: 'GetProductsFromApi',
      data(){
          return {
              products: [],
          }
      },
      mounted(){
          this.init();
      },
      methods: {
      init() {
        const apiUrl = "https://fakestoreapi.com/products";
        this.$http
          .get(apiUrl)
          .then((response) => {
            let apiResponse = response.data;
            this.products = [...apiResponse].map(item => ({ title: item.title, price: item.price, description: item.description, category: item.category, image: item.image, rate: item.rating.rate }));
            this.$emit('getAllProducts', this.products);
          })
          .catch((err) => console.log(err));
      },
    },
  }
    </script>
  
    