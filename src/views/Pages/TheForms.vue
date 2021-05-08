<template >
  <h1>This is our Forms page <b> TheForms.vue</b></h1>
  <div class="p-3 flex justify-center w-screen">
    <form @submit.prevent="validateForm" class="for-forms">
      <!-- PRODUCT NAME -->
      <label for="product-name">PRODUCT NAME</label>
      <input
        v-model="product.productName"
        type="text"
        id="product-name"
        name="product-name"
        placeholder="PRODUCT NAME"
      />
      <!-- MFD -->
      <label for="manu-date">MANUFACTURER DATE</label>
      <input
        v-model="product.productReleaseDate"
        type="date"
        id="manu-date"
        name="manu-date"
      />
      <!-- PRODUCT DESCRIPTION -->
      <label for="desc">PRODUCT DESCRIPTION</label>
      <textarea
        v-model="product.productDetail"
        type="text"
        id="desc"
        name="desc"
        placeholder="PRODUCT DESCRIPTION"
      />
      <!-- BRAND -->
      <label for="brand" class="brand-heading"> BRAND </label>
      <select
        v-model="brandInput"
        @click="brandsHandler(brandInput)"
        name="brand"
        id="brand"
      >
        <option value="1">ADIDAS</option>
        <option value="2">CROCS</option>
        <option value="3">FILA</option>
      </select>
      <!-- IMAGE -->
      <div class="image-upload">
        <label for="product-img" id="IMAGE-heading"
          >IMAGE <br />
          <p class="font-normal">.png only</p>
          <img src="@/assets/FormsImg/add-image.png" id="upload-pic" />
        </label>
        <input
          @change="imageHandler"
          type="file"
          id="product-img"
          name="product-img"
          accept="image/png"
        />
        <br />
        <!-- <span id="click-here"> Click To Upload an Image. </span> -->
      </div>
      <!-- COLORS -->
      <div class="flex flex-col p-3 pl-0">
        <span id="colors-heading">COLORS</span>
        <div class="for-nextLine flex flex-row">
          <label class="container">
            <input
              @click="colorHandler(1)"
              type="checkbox"
              id="black"
              name="colors"
              value="black"
            />
            <span class="checkmark black"></span>
          </label>
          <label class="container">
            <input
              @click="colorHandler(2)"
              type="checkbox"
              id="white"
              name="colors"
              value="white"
            />
            <span class="checkmark white"></span>
          </label>
          <label class="container">
            <input
              @click="colorHandler(3)"
              type="checkbox"
              id="brownish"
              name="colors"
              value="brownish"
            />
            <span class="checkmark brownish"></span>
          </label>
          <label class="container">
            <input
              @click="colorHandler(4)"
              type="checkbox"
              id="green"
              name="colors"
              value="green"
            />
            <span class="checkmark green"></span>
          </label>
          <label class="container">
            <input
              @click="colorHandler(5)"
              type="checkbox"
              id="cardinal"
              name="colors"
              value="cardinal"
            />
            <span class="checkmark cardinal"></span>
          </label>
          <label class="container">
            <input
              @click="colorHandler(6)"
              type="checkbox"
              id="rhino"
              name="colors"
              value="rhino"
            />
            <span class="checkmark rhino"></span>
          </label>
        </div>
      </div>
      <!-- PRICE -->
      <label for="price" class="price-heading">PRICE</label>
      <input
        v-model="product.productPrice"
        type="number"
        id="price"
        name="price"
        min="1"
        placeholder="PRICE"
      />
      <!-- SUBMIT -->
      <div class="flex justify-end">
        <input type="submit" value="Save" class="save-button" />
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      backendURL:"http://52.187.108.86/backend",
      productValidate: false,
      brandInput: "",
      lastProductId: null,
      tempBrands: [],
      tempColors: [],
      productImageFile: null,
      product: {
        productID: "",
        productName: "",
        productReleaseDate: "",
        productDetail: "",
        brandID: "",
        productImage: "",
        colors: [],
        productPrice: 0,
      },
    };
  },

  methods: {
    validateForm() {
      if (this.product.productName == "") {
        this.productValidate = true;
        alert("Please enter PRODUCT NAME.");
      }
      if (this.product.productReleaseDate == "") {
        this.productValidate = true;
        alert("Please enter MANUFACTURER DATE.");
      }
      if (this.product.productDetail == "") {
        this.productValidate = true;
        alert("Please enter PRODUCT DESCRIPTION.");
      }
      if (this.product.productBrand == "") {
        this.productValidate = true;
        alert("Please enter PRODUCT BRAND.");
      }
      // if (this.product.productImage.length == 0) {
      //   this.productValidate = true;
      //   alert("Please Upload an IMAGE.");
      // }
      if (this.product.colors.length == 0) {
        this.productValidate = true;
        alert("Please enter PRODUCT COLOR.");
      }
      if (this.productValidate == false) {
        console.log("productValidate: " + this.productValidate);
        this.addProduct();
      }
    },

    async addProduct() {
      // let imageName = this.product.productImage
      this.product.productID = this.lastProductId + 1;
      this.product.productImage = `${this.product.productID}.png`;
      await axios.post(`${this.backendURL}/products/add`,this.product)
      // send image
      const formData = new FormData();
      formData.append("file", this.productImageFile);
      await axios.post(`${this.backendURL}/images/add/${this.product.productImage}`, formData);    
    },

    imageHandler(event) {
      const input = event.target.files[0];
      this.productImageFile= input
    },

    brandsHandler(selectBrandID) {
      let index = this.tempBrands
        .map(function (e) {
          return e.brandID;
        })
        .indexOf(parseInt(selectBrandID));
      this.product.brandID = {
        brandID: this.tempBrands[index].brandID,
        brandName: this.tempBrands[index].brandName,
      };
      console.log(this.product.brandID);
    },

    colorHandler(selectColorID) {
      let colorIsExist = this.product.colors.filter(function (e) {
        return e.colorID == selectColorID;
      });

      for (let index = 0; index < this.product.colors.length; index++) {
        if (this.product.colors[index] == colorIsExist[0]) {
          this.product.colors.splice(index, 1);
        }
      }
      if (colorIsExist.length === 0) {
        let index = this.tempColors
          .map(function (e) {
            return e.colorID;
          })
          .indexOf(selectColorID);
        this.product.colors.push({
          colorID: this.tempColors[index].colorID,
          colorName: this.tempColors[index].colorName,
        });
      }
      console.log(this.product.colors);
    },
  },
  async created() {
    this.tempColors = await axios.get(
      `${this.backendURL}/colors/getall`
    );

    this.tempBrands = await axios.get(
      `${this.backendURL}/brands/getall`
    );

    this.lastProductId = await axios.get(
      `${this.backendURL}/products/last`
    );
    this.lastProductId = this.lastProductId.data[0]
    console.log(this.lastProductId);
    this.tempColors = this.tempColors.data;
    console.log(this.tempColors);
    this.tempBrands = this.tempBrands.data;
  },
};
</script>

<style scoped>
#colors-heading {
  font-weight: bold;
  font-family: "Prompt", sans-serif;
  padding-top: 3%;
}

/* input IDs */
#product-name,
#manu-date,
#desc,
#price {
  width: 100%;
}
#manu-date {
  color: gray;
}

label {
  font-weight: bold;
  font-family: "Prompt", sans-serif;
  display: block;
  margin: 8% 1% 1% 0%;
}

/* .price,.brand{
  display:inline-block;
  width: fit-content;
} */

.for-forms {
  flex-direction: column;
  padding-bottom: 5%;
}

input,
textarea,
select {
  background-color: white;
  font-weight: normal;
  font-family: "Prompt", sans-serif;
  border: 1px solid #73767a;
  box-sizing: border-box;
  border-radius: 7px;
  padding: 1.5%;
  /* width: 80%; */
}

select:hover,
textarea:hover,
input:hover {
  box-shadow: 2px 2px 8px #888888;
  border: 1px solid black;
}

.radio-tick {
  padding: 0%;
}
textarea {
  height: 10%;
}

h1 {
  text-align: center;
}

#product-img::-webkit-file-upload-button {
  display: none;
}
#product-img {
  color: gray;
  border: 1px solid dimgray;
  background-color: whitesmoke;
  width: 70%;
  padding: 2%;
  margin-top: 0%;
}
#product-img:hover {
  box-shadow: unset;
}

.image-upload img {
  width: 1000px;
  cursor: pointer;
}

#upload-pic {
  background-color: dimgray;
  border: 1px solid dimgray;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 3%;
  margin-top: 3%;
  margin-bottom: 3%;
}

#upload-pic:hover {
  border-color: transparent;
  background-color: cadetblue;
  box-shadow: 2px 2px 8px dimgray;
}

#IMAGE-heading {
  width: 20%;
}

/* The container */
.container {
  width: 25px;
  flex-direction: column;
  display: block;
  position: relative;
  padding-left: 0%;
  /* margin-bottom: 12px;  */
  cursor: pointer;
  /* font-size: 22px; */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0%;
}

/* Hide the browser's default checkbox */
.container input {
  position: relative;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  padding: 0%;
}

.for-nextLine {
  height: 25px;
  padding-top: 1%;
  padding-left: 5%;
  margin: 0%;
}

/* Create a custom checkbox - per colors*/
.black {
  position: absolute;
  /* top: 0;
  left: 0; */
  height: 25px;
  width: 25px;
  background-color: black;
}
.white {
  position: absolute;
  /* top: 0;
  left: 0; */
  height: 25px;
  width: 25px;
  background-color: white;
  border: 1px solid dimgray;
}
.brownish {
  position: absolute;
  height: 25px;
  width: 25px;
  background-color: #81785b;
}
.green {
  position: absolute;
  height: 25px;
  width: 25px;
  background-color: #549a65;
}
.cardinal {
  position: absolute;
  /* top: 0;
  left: 0; */
  height: 25px;
  width: 25px;
  background-color: #bf1b2f;
}
.rhino {
  position: absolute;
  /* top: 0;
  left: 0; */
  height: 25px;
  width: 25px;
  background-color: #343e61;
}
/* END OF CUSTOM CHECKBOX PER COLORS */

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/* for White color check (Black tick) */
.container .white:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid black;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.save-button {
  margin-top: 7%;
  margin-bottom: 0%;
  width: 75px;
  color: white;
  background: #10b981;
  border-radius: 5px;
  border-color: transparent;
  cursor: pointer;
}

.save-button:hover {
  background-color: cadetblue;
  border-color: transparent;
  box-shadow: 2px 2px 8px dimgray;
}

@media (max-width: 768px) {
  .for-forms {
    width: 90vw;
    padding-bottom: 15%;
  }
  label,
  span {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .image-upload img {
    cursor: pointer;
  }
  #product-img {
    width: 95%;
  }
  #IMAGE-heading {
    width: 25%;
  }
}
@media (width: 768px) {
  .for-forms {
    width: 60%;
  }
}
@media (min-width: 1024px) {
  .for-forms {
    width: 40%;
  }
}
</style>