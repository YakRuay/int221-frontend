<template>
  <div class="flex flex-col justify-center">
    <!-- <button class="bg-red-400 p-5" @click="$emit('changecomp', 'add-product')">
      Edit Product Button > Go to TheForms.vue
    </button>

      เรืองฤทธิ์สอน

      <div class="md:w-1/5 lg:max-w-md flex justify-center uppercase">
      <button @click="setSelectedComponent('edit-product')" id="EditProduct">Edit&nbsp;Product</button> 
      </div>-->


    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
   
    <ProductCard v-bind:productList="productList" @change-to-edit="changeToEdit"/>
  </div>
</template>


<script>
import axios from "axios";

import EditProduct from "@/views/Pages/EditProduct.vue";

export default {
  components: {
    EditProduct,
  },
  data() {
    return {
      backendURL: "http://52.187.108.86/backend",
      selectedComponent: null,
      productList: [],
      test: "String test",
    };
  },
  methods: {
    changeToEdit(componentName, product) {
      this.$emit("changecomp", componentName, product)
    }, 
    setSelectedComponent(comp) {
      this.selectedComponent = comp;
    },
  },
  async created() {
    this.productList = await axios.get(`${this.backendURL}/products/getall`);
    this.productList = this.productList.data;
    // console.log(this.productList);
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: maroon;
}
</style>