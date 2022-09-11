<template>
  <div class="singleproductcard">
    <div class="image-box">
      <router-link :to="{ name: 'productdetails', params: { product } }"
        ><img clas="responsive-image" :src="product.image" alt="Card image"
      /></router-link>
    </div>
    <div class="title-box">
      <p>{{ product.title }}</p>
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
export default {
  name: "SingleProductCard",
  props: ["product"],
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.image-box {
  height: 300px;
}
.image-box img {
  display: block;
  height: 100%;
  width: auto;
  margin: auto;
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
