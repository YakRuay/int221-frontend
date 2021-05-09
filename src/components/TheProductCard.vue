<template>
  <div>
    <div>
      <ul v-for="product in productList" :key="product.productID">
        <div class="flex justify-center w-screen">
          <div class="widthOfCards flex flex-row py-10 b">
            <div class="productCards flex justify-between flex-col w-full">
              <li class="flex justify-center lg:p-10">
                <!-- <div class="bg-yellow-600"> -->
                <img class="productImg" :src="getImage(product.productImage)" />
                <!-- </div> -->
              </li>
              <div class="flex flex-col">
                <div class="flex flex-col w-1/2 list-product">
                  <li class="font-bold text-2xl text-center">
                    {{ product.productName }}
                  </li>
                  <li class="text-lg text-gray-600 py-3">
                    {{ product.productDetail }}
                  </li>
                  <li class="px-1 text-gray-600">
                    <b class="text-lg text-gray-900">MFG:</b>
                    {{ product.productReleaseDate }}
                  </li>
                  <li class="px-1 text-gray-600">
                    <b class="text-lg text-gray-900">BRAND:</b>
                    {{ product.brandID.brandName }}
                  </li>
                  <li class="px-1 text-gray-600">
                    <b class="text-lg text-gray-900">PRICE:</b>
                    {{ product.productPrice }} BAHT
                  </li>
                  <ul v-for="color in product.colors" :key="color.colorID">
                    <li :id="'c0'+color.colorID"></li>
                    <!-- {{ color.colorName }} -->
                  </ul>
                </div>

                <div class="flex flex-row p-5 button-align">
                  <button id="edit"
                    class="w-20 flex justify-center"
                    @click="$emit('change-to-edit', 'edit-products', product)"
                  >
                    <img
                      src="../assets/ProductImgs/edit.png"
                      class="w-9"
                    />
                  </button>
                  <button id="delete"
                    class="w-20 flex justify-center"
                    @click="deleteProduct(product.productID)"
                  >
                    <img src="../assets/ProductImgs/delete.png" class="w-9" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductCard",
  props: {
    productList: Object,
  },
  data() {
    return {
      backendURL: "http://52.187.108.86/backend",
      image: null,
    };
  },
  methods: {
    getImage(imgname) {
      return `${this.backendURL}/images/get/${imgname}`;
    },
    async deleteProduct(productID) {
      await axios.delete(`${this.backendURL}/products/${productID}`);
      location.reload();
    },
  },
};
</script>

<style scoped>
li {
  line-height: 2rem;
  font-family: "Prompt", sans-serif;
}
.list-product {
  margin: 0% 5% 2% 5%;
  padding: 3%;
  justify-items: center;
}

button {
  padding: 2%;
  border: 2px solid #e5e5e5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

button:hover {
  /* border: 2px solid rgba(0, 0, 0, 0.25);; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
#edit:hover{
  background-color:darkseagreen;
}
#delete:hover{
  background-color: rgb(204, 57, 57);
}

.productCards {
  border: 2px solid #e5e5e5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.productCards:hover {
  border: 2px solid rgba(0, 0, 0, 0.25);
}
.productImg {
  margin: 7%;
  border: 2px solid #e5e5e5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

/* styling Color Results yeahhhhhh I can do this!*/
#c01{
  padding: 3%;
  text-align: center;
  width: 20%;
  background-color: black;
  color: whitesmoke;
}
#c02{
  padding: 3%;
  text-align: center;
  width:20%;
  background-color: gray;
  color: whitesmoke;
}
#c03{
   text-align: center;
  color: #81785b;

}
#c04{
  width: 20%;
  text-align: center;
  color: whitesmoke;
  background-color:#549a65;
}
#c05{
  width: 20%;
  text-align: center;
  background-color:#bf1b2f;
  color: whitesmoke;
}
#c06{
  width: 20%;
  text-align: center;
  color: whitesmoke;
  background-color:#343e61;
}


/* mobile s and larger sizes responsive*/
@media (max-width: 426px) {
  .widthOfCards {
    width: 80%;
  }
  .productCards {
    align-items: center;
    flex-direction: column;
  }
  .productImg {
    width: 250px;
    justify-content: center;
  }
  .list-product {
    margin: 0% 5% 0% 5%;
    padding: 10%;
    justify-items: center;
    width: 90%;
  }
  .button-align {
    justify-content: center;
  }
  button img {
    width: 25px;
  }
  #c01,#c02,#c03,#c04,#c05,#c06{
    width: 50px;
    height: 25px;
  }
}

@media (min-width: 768px) {
  .widthOfCards {
    width: 65%;
  }

  .productCards {
    flex-direction: column;
  }

  .productImg {
    width: 270px;
    height: max-content;
  }
  .list-product {
    padding: 10%;
    padding-bottom: 2%;
    width: 90%;
  }
  .button-align {
    justify-content: center;
  }
}
@media (min-width: 1024px) {
  .widthOfCards {
    width: 60%;
  }
  .productCards {
    flex-direction: row;
  }
  .list-product {
    margin-left: 0%;
    width: 300px;
  }
  .button-align {
    justify-content: flex-end;
  }
}

/* laptop and larger sizes responsive */
@media (min-width: 1440px) {
  .widthOfCards {
    width: 60%;
  }
  .productCards {
    flex-direction: row;
  }
  .list-product {
    margin-left: 0%;
    width: 500px;
  }
  .button-align {
    justify-content: flex-end;
  }
  .productImg {
    width: 300px;
  }
}

/* 4K */
@media (min-width: 2560px) {
  .widthOfCards {
    width: 60%;
  }
  .productCards {
    flex-direction: row;
  }
  .list-product {
    padding-top: 20%;
    margin-left: 0%;
    width: 700px;
  }
  .button-align {
    justify-content: flex-end;
  }
  .productImg {
    width: 600px;
  }
}
</style>