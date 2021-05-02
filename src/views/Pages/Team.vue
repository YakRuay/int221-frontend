<template class="h-screen w-screen">
  <div id="member-Rew" class="CardData">
    <the-member-card class="block">
      <img src="@/assets/TeamImgs/059-Pongsathorn-Rew.jpg" />
      <p>This is our Members, our Team page</p>
    </the-member-card>
  </div>

  <div id="member-Lookpad" class="CardData flex justify-between">
    <the-member-card>
      <img src="@/assets/TeamImgs/073-Pattranit-Lookpad.jpg" />
      <p>This is our Members, our Team page</p>
    </the-member-card>
  </div>

  <div id="member-Pro" class="CardData">
    <the-member-card>
      <img src="@/assets/TeamImgs/075-Puwa-Pro.jpg" />
      <p>This is our Members, our Team page</p>
    </the-member-card>
  </div>
</template>

<script>
import TheMemberCard from "../../components/TheMemberCard.vue";

export default {
  components: {
    TheMemberCard,
  },
};
</script>

<style scoped>
p {
  font-family: "Prompt", sans-serif;
}

img {
  width: 150px;
}

/* responsive for mobile s and larger*/
@media (min-width: 320px) {
  img {
    margin: 7%;
    width: 150px;
  }
  p {
    margin: 0% 5% 7% 5%;
    padding: 3%;
  }
}

/* responsive for tablet and larger*/
@media (min-width: 768px) {
  img {
    margin: 7%;
    width: 175px;
  }
  p {
    font-size: 0.75rem;
    margin: 7%;
    padding: 3%;
  }
}

@media (min-width: 1024px) {
  img {
    margin: 10%;
    margin-left: 13%;
    width: 175px;
  }
  p {
    font-size: 0.75rem;
    margin: 5%;
    padding: 7% 3% 3% 3%;
  }
}

/* responsive for laptop l*/
@media (min-width: 1440px) {
  img {
    margin: 7%;
    margin-left: 10%;
    width: 200px;
  }
  p {
    font-size: 1rem;
    padding: 5% 5% 5% 0%;
  }
}

/* Responsive for 4k */
@media (min-width: 2560px) {
  img {
    margin: 7%;
    margin-left: 15%;
    width: 400px;
  }
  p {
    font-size: 1.75rem;
    padding: 7%;
    padding-right: 0%;
    padding-left: 0%;
  }
}
</style>