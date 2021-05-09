<template>
  <div>
    <div>
      <img src="http://52.187.108.86/backend/images/get/10.png" />
      <ul v-for="product in productList" :key="product.productID">
        <li>PRODUCTID: {{ product.productID }}</li>
        <li><img :src="getImage(product.productImage)" /></li>
        <li>{{ product.productName }}</li>
        <li>{{ product.productDetail }}</li>
        <li>MFG: {{ product.productReleaseDate }}</li>
        <li>{{ product.productPrice }}</li>
        <li>BRAND: {{ product.brandID.brandName }}</li>
        <li>PRICE: {{ product.productPrice }}</li>
        <ul v-for="color in product.colors" :key="color.colorID">
          <li>{{ color.colorName }}</li>
        </ul>
        <button
          class="inline-block px-8 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
        >
          Delete
        </button>
      </ul>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "ProductCard",
  props: {
    productList: Object,
  },
  data() {
    return {
      image: null,
    };
  },
  methods: {
    getImage(imgname) {
      return `http://52.187.108.86/backend/images/get/${imgname}`;
    },
  },
};
</script>

<style>
</style>