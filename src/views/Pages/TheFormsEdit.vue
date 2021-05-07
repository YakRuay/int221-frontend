<template >
  <h1 class="text-center">This is our Edit Product page <b> TheFormsEdit.vue</b></h1>
  <h1 class="text-center p-3 font-bold "> Edit Product Detail</h1>
  <button class="bg-red-400 p-5" @click="$emit('changecomp', 'view-product')">
    "back to ViewProduct" </button>
  <the-forms></the-forms>
</template>

<script>
import TheForms from "./TheForms.vue";
export default {
  components: { TheForms },
};
</script>

<style scoped>

</style>