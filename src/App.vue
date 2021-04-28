<template class="w-screen h-screen">
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
  <div id="navBar">
    <base-main-navbar></base-main-navbar>
    <router-view />
  </div>
</template>

<style>
body {
  font-family: "Prompt", sans-serif;
}
h1 {
  padding: 3rem;
  font-weight: bold;
  font-family: "Prompt", sans-serif;
  color: brown;
  text-align: center;
}
</style>