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
          <div class="website-navbar" v-html="prepareAnchorTags">
            <!--
            <div><a class="navbar-a" href="/" >Home</a></div>
            <div><a class="navbar-a" href="#">Category</a></div>
            <div><a class="navbar-a" href="#">Discount</a></div>
            <div><a class="navbar-a" href="#">About</a></div>
            -->
          </div>
        </div>
        <div v-if="cart_visibility" class="container-center-right">
          <div class="shopping-cart">
            <button><img src="@/assets/images/shopping-cart.png" alt="shopping cart" /></button>
            
          </div>
          <div class="filter-by-price">
            <a class="filter-by-price-a" href="#" @click="showPrice">Price Range</a>
          </div>
        </div>

        <div v-if="!cart_visibility" class="container-center-right">
          <div class="shopping-cart">
            <button><img src="@/assets/images/shopping-cart.png" alt="shopping cart" /></button>
          </div>
        </div>

      </div>
    </div>

    <div v-if="popup_flag" class="popup-class">
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
export default {
  props: ['NavBarDetails', 'cart_visibility'],
    data(){
        return {
            popup_flag: false,
        }
    },
    methods:{
        showPrice(){
            this.popup_flag = true;
        },
        getPriceRange(value){
            this.popup_flag = false;
            this.$emit('getLowHighPrice', value.target.value);
        }
    },
    computed:{
      prepareAnchorTags(){
        let preparedNavbar = ''
        const activeStyle = 'style="text-decoration: underline;color: black;border: none;background: none;cursor: pointer;margin: 0 10px;"';
        const navbarStyle = 'style="text-decoration: none;color: black;border: none;background: none;cursor: pointer;margin: 0 10px;"';
        
        this.NavBarDetails.forEach(item => {
          preparedNavbar += item.includes('-') ? `<div><a ${activeStyle} href="/" >${item.substring(0, item.length-1)}</a></div>` : `<div><a ${navbarStyle} href="/" >${item}</a></div>`;
          
        });
        return preparedNavbar;
      }
    }
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
/*
.navbar-a {
  color: black;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  margin: 0 10px;
}
.navbar-a:hover {
  color: #0086ae;
  text-decoration: underline;
}
*/
.container-center-right {
  display: flex;
  justify-content: space-around;
  width: 25%;
}
.shopping-cart {
  display: flex;
  justify-content: right;
  align-items: center;
  width: 40%;
}
.shopping-cart button{
  text-decoration: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.filter-by-price {
  display: flex;
  justify-content: right;
  align-items: center;
  width: 60%;
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
    top: 35%;
    left: 90%;
    background-color: papayawhip;
    border-radius: 10px;
    height: 270px;
    width: 200px;
    opacity: 0.5;
}
.popup-class button{
    background-color: Transparent;
    text-decoration: none;
    border: none;
    font-size: 150%;
    margin: 3% 0%;
    cursor: pointer;
}
.popup-class button:hover{
    background-color: cornflowerblue;
    border-radius: 5px;
    margin: 3% 0%;
}
</style>
