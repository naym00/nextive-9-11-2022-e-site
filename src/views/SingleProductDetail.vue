<template>
    <div class="SingleProductdetail">
        <NavBar :NavBarDetails="navbarDetails" :addToCartLength="getAddToCartProducts().length"></NavBar>
        <h3 class="page-heading">{{prepareHeading[0].name}}</h3>
        <div class="flex-container">
            <div class="inner-container">
                <div class="image">
                    <img class="responsive-image" v-bind:src="product.image" /> 
                </div>
                <div class="details">
                    <div class="product-rating">
                        <div class="rating-icon" v-html="rating"></div>
                        <div class="rating-value"><p>( Rating {{product.rate}} )</p></div>
                    </div>
                    <div v-if="!visibilityForDiscountProductPrice" class="original-product-price-no-discount"><span>৳ {{product.price}}</span></div>
                    <div v-if="visibilityForDiscountProductPrice" class="original-product-price"><span>৳ {{product.price}}</span></div>
                    <div v-if="visibilityForDiscountProductPrice" class="discounted-product-price">
                        <span class="discounted-product-price-firsthalf">৳ {{calculateDiscountedProductPrice()}}</span>
                        <span class="discounted-product-price-secondhalf">{{product.discount}}% discount</span>
                    </div>
                    <div class="product-title">
                        <span>{{product.title | uppaerStr}}</span>
                    </div>
                    <div class="product-description">
                        <span>{{product.description}}</span>
                    </div>
                    <div class="product-size">
                        <span class="product-size-span">SIZE:</span>
                        <div class="product-size-type">
                            <input type="radio" name="productSize" v-model="productSize" value="S">S
                            <input type="radio" name="productSize" v-model="productSize" value="M">M
                            <input type="radio" name="productSize" v-model="productSize" value="L">L
                            <input type="radio" name="productSize" v-model="productSize" value="XL">XL
                            <input type="radio" name="productSize" v-model="productSize" value="XXL">XXL

                        
                            <!--
                            <button v-on:click="getProductSize($event)" type="button" value="S">S</button>
                            <button v-on:click="getProductSize($event)" type="button" value="M">M</button>
                            <button v-on:click="getProductSize($event)" type="button" value="L">L</button>
                            <button v-on:click="getProductSize($event)" type="button" value="XL">XL</button>
                            <button v-on:click="getProductSize($event)" type="button" value="XXL">XXL</button>
                            -->
                        </div>
                    </div>
                    <div class="count-product-calculate-price">
                        <div class="count-product">
                            <div class="decrement-product-count">
                                <button v-on:click="decrementProductCount" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></button>
                            </div>
                            <div class="show-product-count">
                                <span>{{quantity}}</span>
                            </div>
                            <div class="increment-product-count">
                                <button v-on:click="incrementProductCount" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/></svg></button>
                            </div>
                        </div>
                        <div v-if="Boolean(productSize.length)" class="calculate-price">
                            <span>৳ {{totalPrice}}</span>
                        </div>
                    </div>
                    <div class="addtocart">
                        <button v-on:click="addToCart" type="button">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
  
  <script>
    import navBarForSingleProductDetail from "@/assets/forNavbar/SingleProductDetail.json";
    import NavBar from '../components/Home/NavBar.vue'
    import stringMethods from '../mixins/stringMethods'
export default {
    /*
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", 
        "price": 109.95, 
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", 
        "category": "men's clothing", 
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", 
        "rate": 3.9,
        "discount": 5
    */
    name: "SingleProductDetail",
    props: ['product'],
    mixins: [stringMethods],
    components: {
        NavBar,
    },
    data() {
        return {
            visibilityForDiscountProductPrice: Boolean(this.product.discount),
            productSize: '',
            quantity: 1,
            totalPrice: this.calculateDiscountedProductPrice(),
            navbarDetails: JSON.parse(JSON.stringify(navBarForSingleProductDetail)),
        }
    },
    methods: {
        getAddToCartProducts(){
            let addtoCartProductsSTR = window.localStorage.getItem('ProductsAddToCart');
      
            return JSON.parse(`[${addtoCartProductsSTR}]`);
        },
        calculateDiscountedProductPrice(){
            return (((100-this.product.discount)*this.product.price)/100).toFixed(2);
        },
        incrementProductCount(){
            if(this.productSize.length){
                this.quantity++;
                this.calculatePrice();
            }

        },
        decrementProductCount(){
            if(this.productSize.length){
                if(this.quantity>1){
                    this.quantity--;
                    this.calculatePrice();
                }
                else{
                    alert("Product Quantuty Can't be less than 1!!");
                }
            }
            
        },
        calculatePrice(){
            this.totalPrice = (this.calculateDiscountedProductPrice()*this.quantity).toFixed(2);
        },
        addToCart(){
            if(!this.productSize.length){
                alert("Product Size is missing!");
            }
            else{
                
                if(confirm(`Title: ${this.product.title}\nQuantity: ${this.quantity}\nPrice: ${this.totalPrice}\nSize: ${this.productSize}`)){

                    let previousProductsAddToCart = window.localStorage.getItem('ProductsAddToCart');
                    if(previousProductsAddToCart == null || previousProductsAddToCart == ""){
                        let objStr = JSON.stringify([this.product.title, this.product.image, [this.quantity], [this.totalPrice], [this.productSize]]);
                        window.localStorage.setItem('ProductsAddToCart', `${objStr}`);
                    }
                    else{
                        let existingProductList = this.getAddToCartProducts();
                        
                        let index = 0;
                        for(index; index<existingProductList.length; index+=1){
                            if(existingProductList[index][0]==this.product.title && existingProductList[index][1]==this.product.image){
                                break;
                            }
                        }
                        if(index != existingProductList.length){
                            let productSizeArray = existingProductList[index][4].filter((productSize, productSizeIndex) => {
                                if(productSize == this.productSize){
                                    let newTotalPrice = (parseFloat(existingProductList[index][3][productSizeIndex]) + parseFloat(this.totalPrice)).toFixed(2).toString();
                                    existingProductList[index][3][productSizeIndex] = newTotalPrice;
                                    let newQuantity = existingProductList[index][2][productSizeIndex] + this.quantity;
                                    existingProductList[index][2][productSizeIndex] = newQuantity;
                                    return productSize;
                                }
                            });
                            if(!productSizeArray.length){
                                existingProductList[index][2].push(this.quantity);
                                existingProductList[index][3].push(this.totalPrice);
                                existingProductList[index][4].push(this.productSize);
                            }
                            let existingProductListSTR = JSON.stringify(existingProductList);
                            window.localStorage.removeItem('ProductsAddToCart');
                            window.localStorage.setItem('ProductsAddToCart', existingProductListSTR.substring(1, existingProductListSTR.length-1));
                        }
                        else{
                            let objStr = JSON.stringify([this.product.title, this.product.image, [this.quantity], [this.totalPrice], [this.productSize]]);
                            window.localStorage.setItem('ProductsAddToCart', `${previousProductsAddToCart}, ${objStr}`);
                        }
                        

                    }

                    this.$router.push({ name: 'home' });
                }
            }
        }
    },
    computed: {
        rating() {
            let rateStr = '';
            let stars = parseInt(Math.round(this.product.rate));
            for (let i = 1; i <= stars; i++) {
                rateStr += `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>`;
            }
            for (let i = 1; i <= 5-stars; i++) {
                rateStr += `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg>`;
            }
            return rateStr;
        },
        prepareHeading(){
          return this.navbarDetails.navbars.filter(eachNavbar => eachNavbar.active);
        },
    },
}
</script>

  <style>
    .page-heading{
    font-size: 250%;
    color:burlywood;
    text-align: center;
  }
    .flex-container{
        display:flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        margin-top: 100px;
    }
    .inner-container{
        display:flex;
        flex-direction: row;
        width: 90%;
    }
    .image{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 50%;
    }
    .responsive-image{
        max-width: 600px;
        height: 80%;
    }
    .details{
        display:flex;
        flex-direction: column;
        width: 50%;
    }
    .product-rating{
        display:flex;
        flex-direction: row;
    }
    .original-product-price-no-discount{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .original-product-price-no-discount span{
        font-size: 230%;
        color:red;
    }
    .original-product-price{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .original-product-price span{
        font-size: 230%;
        text-decoration-line: line-through;
        color:darkgrey
    }
    .discounted-product-price{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .discounted-product-price-firsthalf{
        width: 25%;
        font-size: 250%;
        color:red;
    }
    .discounted-product-price-secondhalf{
        width: 60%;
        font-size: 250%;
        color:dimgray;
    }
    .rating-icon{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 20%;
    }
    .rating-value{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 80%;
    }
    .rating-value p{
        font-size: 180%;
    }
    .product-title{
        margin: 2% 0%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .product-title span{
        font-size: 180%;
    }
    .product-description{
        margin: 2% 0%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .product-description span{
        font-size: 150%;
    }
    .product-size{
        margin: 5% 0%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .product-size-span{
        width: 20%;
        font-size: 180%;
        font-weight: bold;
    }
    .product-size-type{
        display: flex;
        align-items: center;
        width: 80%;
    }
    .product-size-type input{
        cursor: pointer;
        height: 30px;
        width: 30px;
        margin: 0 10px;
    }
    .count-product-calculate-price{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .count-product{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 30%;
        margin: 0 5px;
        
    }
    .decrement-product-count{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
    }
    .decrement-product-count button{
        text-decoration: none;
        width: 100%;
        height: 35px;
        background-color:dimgray;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
    .decrement-product-count button:hover{
        background-color:cadetblue;
    }
    .show-product-count{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
    }
    .show-product-count span{
        font-size: 150%;
    }
    .increment-product-count{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
    }
    .increment-product-count button{
        text-decoration: none;
        width: 100%;
        height: 35px;
        background-color:dimgray;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
    .increment-product-count button:hover{
        background-color: cadetblue;
    }
    .calculate-price{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60%;
    }
    .calculate-price span{
        font-size: 200%;
    }
    .addtocart{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }
    .addtocart button{
        text-decoration: none;
        width: 30%;
        height: 40px;
        background-color:darkgreen;
        font-size: 150%;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
    .addtocart button:hover{
        background-color:cadetblue;
    }
  </style>