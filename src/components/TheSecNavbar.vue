<template>
  <div
    class="bg-white p-5 max-w-md md:text-xl text-sm text-gray-900 flex justify-center sec-navbar-container"
  >
    <div class="md:w-1/5 lg:max-w-md flex justify-center uppercase">
      <a href="#" @click="setSelectedComponent('view-product')">View&nbsp;Products</a>
      <a href="#" @click="setSelectedComponent('add-product')" id="AddProduct">Add&nbsp;Product</a>
      <a href="#" id="EditProduct">Edit&nbsp;Product</a>
     
    </div>
  </div>
  <keep-alive>
        <component :is="selectedComponent"></component>
     </keep-alive>

</template>

<script>
import ViewProduct from "../views/Pages/ViewProduct.vue";
import AddProduct from "../views/Pages/TheForms.vue";
 
 
export default {
  components: {
    ViewProduct,
    AddProduct,
  },
  data() {
    return {
      selectedComponent: "view-product",
    }
  },
  methods: {
    setSelectedComponent(comp) {
      this.selectedComponent = comp;
    },
  },
 
};
</script>


<style scoped>
.sec-navbar-container {
  min-width: 100vw;
  overflow: hidden;
}
a {
  font-family: "Prompt", sans-serif;
  padding: 0rem 2rem 0rem 2rem;
  font-weight: 300;
  color: black;
}

a:hover,a:active {
  font-weight: bold;
}

a:focus {
  color: black;
  padding: 0rem 2rem 0rem 2rem;
  font-weight: 600;
}

#EditProduct {
  display: none;
}
</style>