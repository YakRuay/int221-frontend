<template class="h-screen w-screen">
  <div id="member-Rew" class="CardData">
    <the-member-card class="block">
      <img src="@/assets/TeamImgs/059-Pongsathorn-Rew.jpg" />
      <div class="texts-content">
        <h1>นายพงศธร พิชัยยุทธ์</h1>
        <h2>62130500059</h2>
        <p>
          <b class="respons"> Responsibilities </b>
          <span>
            <br />
            <b>DevOps </b> <br />Deals with all DevOps tasks.
          </span>
          <span>
            <br />
            <b> Database </b> <br />
            Handles all related Database works.
          </span>
        </p>
      </div>
    </the-member-card>
  </div>

  <div id="member-Lookpad" class="CardData flex justify-between">
    <the-member-card>
      <img src="@/assets/TeamImgs/073-Pattranit-Lookpad.jpg" />
      <div class="texts-content">
        <h1>นางสาวภัทรานิษฐ์ คงแสนคำ</h1>
        <h2>62130500073</h2>
        <p>
          <b class="respons"> Responsibilities </b>
          <span>
            <br />
            <b>Front-end </b> <br />Works on all Front-end, design and
            responsive tasks.
          </span>
        </p>
      </div>
    </the-member-card>
  </div>

  <div id="member-Pro" class="CardData">
    <the-member-card>
      <img src="@/assets/TeamImgs/075-Puwa-Pro.jpg" />
      <div class="texts-content">
        <h1>นายภูว เติมนุพันธ์</h1>
        <h2>62130500075</h2>
        <p>
          <b class="respons"> Responsibilities </b>
          <span>
            <br />
            <b>Back-end </b> <br />Does all works about Back-end part</span
          >
          <span>
            <br />
            <b> Database </b> <br />
            Helps on Database diagram design
          </span>
        </p>
      </div>
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
.respons {
  font-size: larger;
}

.texts-content {
  line-height: 2rem;
  font-family: "Prompt", sans-serif;
  /* background-color: thistle; */
}
h1 {
  text-align: center;
  font-weight: bolder;
  font-size: 1.25rem;
  line-height: 1.75rem;
}
h2 {
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.5rem;
}

p {
  padding-top: 5%;
  color: darkslategray;
}

img {
  border: 2px solid #e5e5e5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 150px;
}

/* responsive for mobile s and larger*/
@media (min-width: 320px) {
  img {
    margin: 7%;
    width: 150px;
  }
  .texts-content {
    margin: 0% 5% 7% 5%;
    padding: 3%;
    justify-items: center;
    width: 80vw;
  }
  p {
    padding-left: 10%;
    padding-right: 10%;
  }
}

/* responsive for tablet and larger*/
@media (min-width: 768px) {
  img {
    margin: 2%;
    width: 150px;
  }
  .texts-content {
    font-size: 0.75rem;
      line-height: 1.25rem;

    /* margin: 7%; */
    /* padding-top: 10%; */
    width: 75%;
  }
}

@media (min-width: 1024px) {
  img {
    margin: 5%;
    /* margin-left: 13%; */
    width: 175px;
  }
  .texts-content {
    font-size: 0.75rem;
    margin: 5%;
    padding: 7% 3% 3% 3%;
    width: 50%;
  }
}

/* responsive for laptop l*/
@media (min-width: 1440px) {
  img {
    margin: 7%;
    margin-left: 10%;
    width: 200px;
  }
  .texts-content {
    line-height: 1.5rem;
    font-size: 1rem;
    /* padding: 5%; */
  }
}

/* Responsive for 4k */
@media (min-width: 2560px) {
  h1,h2{
    font-size: xx-large;
    line-height: 3rem;
  }

  img {
    margin: 7%;
    width: 400px;
  }
  .texts-content {
    font-size: 1.75rem;
    line-height: 3rem;

    padding: 7%;
  }
}
</style>