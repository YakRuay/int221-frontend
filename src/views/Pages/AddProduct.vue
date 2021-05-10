<template >
  <!-- <h1 class="text-center">This is our Add Product page</h1> -->
  <the-forms @submit-form="addProduct" :productProp="addingProduct"></the-forms>
</template>

<script>
import axios from "axios";
import TheForms from "../../components/TheForms.vue";
export default {
    data() {
        return {
            backendURL: "http://52.187.108.86/backend",
            addingProduct: {
                productID: "",
                productName: "",
                productReleaseDate: "",
                productDetail: "",
                brandID: "",
                productImage: "",
                colors: [],
                productPrice: 0
            }
        }
    },
    components: { TheForms },
    methods: {
        backToHomePage() {
            // this.$emit('changecomp', 'view-product');
            location.reload();
        },
        async addProduct(product, productImageFile, lastProductId) {
            product.productID = lastProductId + 1
            product.productImage = `${product.productID}.png`
            await axios.post(`${this.backendURL}/products/add`, product)

            const formData = new FormData();
            formData.append("file", productImageFile);
            await axios.post(`${this.backendURL}/images/add/${product.productImage}`, formData);
            location.reload()
        }
    }
};
</script>

<style scoped>

</style>