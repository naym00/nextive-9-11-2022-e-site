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
            this.products = [...response.data].map(item => ({ title: item.title, price: item.price, description: item.description, category: item.category, image: item.image, rate: item.rating.rate, discount: parseInt(Math.random() * (10 - 1) + 1)}));
            this.$emit('getAllProducts', this.products);
          })
          .catch((err) => console.log(err));
      },
    },
  }
    </script>
  
    