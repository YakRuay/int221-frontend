<template>
  <div class="flex justify-center w-screen">
    <div class="widthOfCards flex flex-row py-10 b">
      <!-- lg:px-10 md:px-10 px-5 lg:px-56 md:px-44 w-7/12-->
      <div class="memberCards flex justify-between w-full bg-pink-300">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* laptop large and larger sizes responsive */
@media (max-width: 2561px) {
  .widthOfCards {
    width: 50%;
  }

  .memberCards {
    flex-direction: row;
  }
}

/* laptop and smaller sizes responsive */
@media (max-width: 1025px) {
  .widthOfCards {
    width: 60%;
  }

  .memberCards {
    flex-direction: row;
  }
}

/* mobile s and larger sizes responsive*/
@media (max-width: 426px) {
  .widthOfCards {
    width: 80%;
  }
  .memberCards {
    align-items: center;
    flex-direction: column;
  }
}

.memberCards {
  border: 2px solid #e5e5e5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.memberCards:hover{
  border: 2px solid rgba(0, 0, 0, 0.25);
}
</style>