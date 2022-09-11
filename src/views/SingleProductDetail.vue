<template>

    <div class="SingleProductdetail">

        <div class="flex-container">
            <div class="inner-container">
                <div class="image"></div>
                <div class="details">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>

    </div>

</template>
  
  <script>
export default {
    /*
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", 
        "price": 109.95, 
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", 
        "category": "men's clothing", 
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", 
        "rate": 3.9
    */
    name: "SingleProductDetail",
    props: ['product'],
    components: {
    },
    data() {
        return {
            
        }
    },
    methods: {
        rating() {
            this.rateStr = '';
            let stars = parseInt(Math.round(this.product.rate));
            for (let i = 1; i <= stars; i++) {
                this.rateStr += '<span class="fa fa-star checked"></span>';
            }
        },
        increment(){
            this.quantity++;
            this.calculatePrice();
        },
        decrement(){
            if(this.quantity>1){
                this.quantity--;
                this.calculatePrice();
            }
        },
        calculatePrice(){
            this.totalPrice = (this.product.price*this.quantity).toFixed(2);
        },
        addToCart(){
            if(this.productSize.localeCompare('')===0){
                alert("Product Size is missing!");
            }
            else{
                if(confirm(`Title: ${this.product.title}\nPrice: ${this.totalPrice}\nSize: ${this.productSize}`)){
                    this.$router.push({ name: 'home' });
                }
            }
        }
    },
    mounted() {
        //this.sendPageName();
        //this.rating();
        //this.calculatePrice();
    }
}
</script>

  <style>
    .flex-container{
        display:flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }
    .inner-container{
        display:flex;
        flex-direction: row;
        width: 90%;
        background-color: aqua;
    }
    .image{
        width: 50%;
        padding: 10% 0%;
        background-color:blue;
    }
    .details{
        width: 50%;
        padding: 10% 0%;
        background-color:chartreuse;
    }
  </style>