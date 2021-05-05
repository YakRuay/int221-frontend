<template>
  <div
    class="bg-black p-5 md:text-xl text-sm text-gray-100 flex justify-center navbar-container"
  >
    <div class="md:w-2/5 flex justify-between uppercase">
      <router-link to="/">Product</router-link>
      <router-link to="/about-us">About&nbsp;Us</router-link>
      <router-link to="/team">Team</router-link>
    </div>
  </div>
</template>

<style scoped>
.navbar-container {
  min-width: 100vw;
  overflow: hidden;
}
a {
  font-family: "Prompt", sans-serif;
  padding: 0rem 2rem 0rem 2rem;
  font-weight: 300;
  color: cornsilk;
}

a:hover {
  text-decoration-line: underline;
  text-decoration-color: cornsilk;
}
a.router-link-exact-active {
  color: oldlace;
  padding: 0rem 2rem 0rem 2rem;
  font-weight: 600;
}
</style>