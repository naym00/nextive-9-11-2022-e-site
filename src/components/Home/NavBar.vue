<template>
  <div class="navbar">
    <div class="container">
      <div class="container-center">
        <div class="container-center-left">
          <a href="/" class="website-logo-name">
            <div class="website-logo">
              <img
                width="110"
                height="100"
                src="@/assets/images/logo.png"
                alt="website logo"
              />
            </div>
            <div class="website-name">
              <div class="inner-website-name">
                <div><p>Hello</p></div>
                <div><p>Clothings</p></div>
              </div>
            </div>
          </a>
          <div class="website-navbar" v-html="prepareAnchorTags"></div>
        </div>
        <div v-if="NavBarDetails.popupVisibilityForPriceRange" class="container-center-right">
          <div class="shopping-cart">
            <button><img src="@/assets/images/shopping-cart.png" alt="shopping cart" /></button>
            
          </div>

          <div class="filter-by-rating">
            <a class="filter-by-rating-a" href="#" @click="showRating">Rating</a>
          </div>

          <div class="filter-by-price">
            <a class="filter-by-price-a" href="#" @click="showPrice">Price Range</a>
          </div>
        </div>

        <div v-if="!NavBarDetails.popupVisibilityForPriceRange" class="container-center-right">
          <div class="shopping-cart">
            <button><img src="@/assets/images/shopping-cart.png" alt="shopping cart" /></button>
          </div>
        </div>

      </div>
    </div>

    <div v-if="popupFlagForRating" class="popup-class">
        <button @click="getRatingRange($event)" value="0-1">0-1</button>
        <button @click="getRatingRange($event)" value="2-3">2-3</button>
        <button @click="getRatingRange($event)" value="4-5">4-5</button>
        <button @click="getRatingRange($event)" style="background-color:red; border-radius: 10px;" value="Cancle">Cancle</button>
    </div>

    <div v-if="popupFlagForPriceRange" class="popup-class">
        <button @click="getPriceRange($event)" value="0-100">000-100</button>
        <button @click="getPriceRange($event)" value="101-200">101-200</button>
        <button @click="getPriceRange($event)" value="201-300">201-300</button>
        <button @click="getPriceRange($event)" value="301-400">301-400</button>
        <button @click="getPriceRange($event)" value="401-500">401-500</button>
        <button @click="getPriceRange($event)" style="background-color:red; border-radius: 10px;" value="Cancle">Cancle</button>
    </div>

  </div>
</template>

<script>
  import PrepareNavbar from '@/mixins/PrepareNavbar'
export default {
  mixins: [PrepareNavbar],
    data(){
        return {
            popupFlagForPriceRange: false,
            popupFlagForRating: false,
        }
    },
    methods:{
        showPrice(){
          if(this.popupFlagForRating){
            this.popupFlagForRating = false;
          }
          this.popupFlagForPriceRange = true;
        },
        getPriceRange(value){
            this.popupFlagForPriceRange = false;
            this.$emit('getLowHighPrice', value.target.value);
        },
        showRating(){
          if(this.popupFlagForPriceRange){
            this.popupFlagForPriceRange = false;
          }
            this.popupFlagForRating = true;
        },
        getRatingRange(value){
            this.popupFlagForRating = false;
            this.$emit('getRating', value.target.value);
        }
    },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 1% 0%;
  background-color: #DCDCDC;
  box-shadow: 0 2px 10px -1px rgb(178, 190, 181);
}
.container-center {
  display: flex;
  justify-content: space-around;
  width: 90%;
}
.container-center-left {
  display: flex;
  justify-content: space-around;
  width: 75%;
}
.website-logo-name {
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  width: 20%;
}
.website-logo {
  display: flex;
  align-items: center;
}
.website-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.inner-website-name {
  display: flex;
  flex-direction: column;
  margin-left: 5px;
}
.inner-website-name div {
  text-align: left;
}
.inner-website-name div p {
  font-size: 150%;
}
.website-navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
}
.navbar-a div a:hover{
  color: #0086ae;
  text-decoration: underline;
}
.container-center-right {
  display: flex;
  justify-content: space-around;
  width: 25%;
}
.shopping-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;

}
.shopping-cart button{
  text-decoration: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.filter-by-rating{
  display: flex;
  justify-content: right;
  align-items: center;
  width: 40%;
}
.filter-by-rating-a {
  padding: 5px 15px;
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #0086ae;
}
.filter-by-price {
  display: flex;
  justify-content: right;
  align-items: center;
  width: 40%;
}
.filter-by-price-a {
  padding: 5px 15px;
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #0086ae;
}
.popup-class{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    background-color: papayawhip;
    border-radius: 10px;
    height: 300px;
    width: 200px;
    opacity: 0.5;
}
.popup-class:hover{
    opacity: 0.8;
}
.popup-class button{
    background-color: Transparent;
    text-decoration: none;
    border: none;
    font-size: 150%;
    font-weight: bold;
    margin: 3% 0%;
    cursor: pointer;
}
.popup-class button:hover{
    background-color: cornflowerblue;
    border-radius: 5px;
    margin: 3% 0%;
}
</style>
