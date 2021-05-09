<template >
  <h1 class="text-center">
    This is our Edit Product page
  </h1>
  <h1 class="text-center p-3 font-bold">Edit Product Detail</h1>
  <button class="bg-red-400 p-5" @click="backToHomePage">
    "back to ViewProduct"
  </button>
  <the-forms @submit-form="editProduct" :productProp="editingProduct"></the-forms>
</template>

<script>
import axios from "axios";
import TheForms from "../../components/TheForms.vue";
export default {
  props: {
    editingProduct: Object
  },
  data() {
    return {
      backendURL: "http://52.187.108.86/backend"
    };
  },
  components: { TheForms },
  methods: {
    backToHomePage() {
      // this.$emit('changecomp', 'view-product');
      location.reload();
    },
    async editProduct(product, productImageFile) {
      await axios.put(`${this.backendURL}/products/${product.productID}`, product);

      const formData = new FormData();
      formData.append("file", productImageFile);
      await axios.put(
        `${this.backendURL}/images/edit/${product.productImage}`,
        formData
      )
      location.reload();
    }
  }
};
</script>

<style scoped>
</style>