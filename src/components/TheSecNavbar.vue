<template>
  <div
    class="bg-white p-5 max-w-md md:text-xl text-sm text-gray-900 flex justify-center sec-navbar-container"
  >
    <div class="md:w-1/5 lg:max-w-md flex justify-center uppercase">
      <div :class="{'font-bold':selectedComponent==='view-product'}" class="Target" @click="setSelectedComponent('view-product')">View&nbsp;Products</div>
      <div :class="{'font-bold':selectedComponent==='add-product'}" class="Target" @click="setSelectedComponent('add-product')" id="AddProduct">Add&nbsp;Product</div>
      <!-- <a href="#" id="EditProduct">Edit&nbsp;Product</a> -->
    <button class="Target" @click="setSelectedComponent('edit-products')" id="EditProducts">Edit&nbsp;Products02</button>

    </div>
  </div>
  <keep-alive>
        <component :is="selectedComponent" @changecomp="setSelectedComponent"></component>
  </keep-alive>

</template>

<script>
import ViewProduct from "../views/Pages/ViewProduct.vue";
import AddProduct from "../views/Pages/TheForms.vue";
import EditProducts from "../views/Pages/TheFormsEdit.vue";
 
export default {
  components: {
    ViewProduct,
    AddProduct,
    EditProducts,
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
.Target {
  font-family: "Prompt", sans-serif;
  padding: 0rem 2rem 0rem 2rem;
  /* font-weight:normal; */
  cursor: pointer;
  color: black;
}

.Target:hover{
  font-weight: bold;
}

#EditProducts {
  display: none;
}

</style>