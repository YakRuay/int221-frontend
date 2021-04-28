<template>
  <div
    class="bg-white p-5 max-w-md md:text-xl text-sm text-gray-900 flex justify-center sec-navbar-container"
  >
    <div class="md:w-1/5 lg:max-w-md flex justify-center uppercase">
      <a href="#">View&nbsp;Products</a>
      <a href="#" id="AddProduct">Add&nbsp;Product</a>
      <a href="#" id="EditProduct">Edit&nbsp;Product</a>
    </div>
  </div>
</template>

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

a:hover {
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