<template>
  <div class="singleproductcard">
    <div class="image-box">
      <router-link :to="{ name: 'productdetails', params: { product } }"
        ><img clas="responsive-image" :src="product.image" alt="Card image"
      /></router-link>
    </div>
    <div class="title-box">
      <p>{{ product.title | uppaerStr }}</p>
    </div>
    <hr />
    <div class="price-rating-box">
      <div class="price">
        <p>৳ {{ product.price }}</p>
      </div>
      <div class="rating">
        <p>{{ product.rate }} (Rating)</p>
      </div>
    </div>
  </div>
</template>

<script>
  import stringMethods from '../mixins/stringMethods'
export default {
  name: "SingleProductCard",
  props: ["product"],
  mixins: [stringMethods],
  components: {
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.image-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}
.image-box img {
  
  object-fit: cover;
  height: 280px;
  display: block;
  width: 280px;
  transition: all 0.4s;
}
.responsive-image {
  width: 100%;
  height: auto;
}
.image-box:hover img {
  transform: scale(1.2);
}

.title-box {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 150%;
  
}
.title-box p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 300px;
}
.price-rating-box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}
.price {
  width: 50%;
}
.rating {
  width: 50%;
}
.price p {
  text-align: left;
  font-size: 150%;
}
.rating p {
  text-align: right;
  font-size: 150%;
}
</style>
