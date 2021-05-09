<template>
  <div>
    <p>-- ProductCard Component --</p>
    <p>{{ test }}</p>
    <div>
      <ul v-for="product in productList" :key="product.productID">
        <li>PRODUCTID:{{ product.productID}}</li>
        <li>{{ product.productName }}</li>
        <li>{{ product.productDetail }}</li>
        <li>{{ product.productReleaseDate }}</li>
        <li>{{ product.productPrice }}</li>
        <!-- <li>{{ product.brandID}}</li> -->
        <li>{{ product.productPrice }}</li>
        <ul v-for="color in product.colors" :key="color.colorID">
          <li>{{ color.colorName }}</li>
        </ul>
      </ul>
    </div>
    <!-- <p>{{ productList }}</p> -->
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    productList: Object,
    test: String,
  },
};
</script>

<style>
</style>