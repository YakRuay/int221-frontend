<template>
  <div class="flex flex-col justify-center">
    <h1>
      this is from new <b>ViewProduct.vue</b> that run on <b>Product.vue </b>
    </h1>
    <!-- <button class="bg-red-400 p-5" @click="$emit('changecomp', 'add-product')">
      Edit Product Button > Go to TheForms.vue
    </button>

      เรืองฤทธิ์สอน

      <div class="md:w-1/5 lg:max-w-md flex justify-center uppercase">
      <button @click="setSelectedComponent('edit-product')" id="EditProduct">Edit&nbsp;Product</button> 
      </div>-->

    <button
      class="bg-red-500 p-5"
      @click="$emit('changecomp', 'edit-products')"
    >
      Go to Hidden Update Form
    </button>

    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    <div>
      <ul v-for="product in productList" :key="product.productID">
        <li>{{product.productName}}</li>
        <li>{{product.productDetail}}</li>
        <li>{{product.productReleaseDate}}</li>
        <li>{{product.productPrice}}</li>
        <li>{{product.brandID}}</li>
        <li>{{product.productPrice}}</li>
        <li>{{product.colors}}</li>
      </ul>
    </div>
  </div>
</template>


<script>
import axios from "axios";

import EditProduct from "@/views/Pages/TheFormsEdit.vue";

export default {
  components: {
    EditProduct,
  },
  data() {
    return {
      backendURL: "http://52.187.108.86/backend",
      selectedComponent: null,
      productList: [],
      // productImageFiles: null,
    };
  },
  methods: {
    setSelectedComponent(comp) {
      this.selectedComponent = comp;
    },

    // async getProductImageFiles() {
      
    // }
  },
  async created() {
    this.productList = await axios.get(`${this.backendURL}/products/getall`);
    this.productList = this.productList.data;
    console.log(this.productList);
    // this.getProductImageFiles();
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: maroon;
}
</style>