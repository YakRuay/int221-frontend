<template >
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 <button class="bg-red-400 p-5" @click="$emit('changecomp', 'view-product')"> "back" </button>



  <h1>This is our Edit Product page <b> TheFormsEdit.vue</b></h1>
  <div class="p-3 flex justify-center w-screen">
    <form class="for-forms">
      <label for="product-name">PRODUCT NAME</label>
      <input type="text" id="product-name" name="product-name" placeholder="PRODUCT NAME" />

      <label for="manu-date">MANUFACTURER DATE</label>
      <input type="date" id="manu-date" name="manu-date"/>

      <label for="desc">PRODUCT DESCRIPTION</label>
      <textarea type="text" id="desc" name="desc" placeholder="PRODUCT DESCRIPTION"/>

      <label for="brand" class="brand-heading"> BRAND </label>
      <select name="brand" id="brand">
        <option value="ADIDAS"> ADIDAS </option>
        <option value="CROCS"> CROCS </option>
        <option value="FILA"> FILA </option>
    </select>

      <div class="image-upload">
        <label for="product-img" id="IMAGE-heading">IMAGE
       <img src="@/assets/FormsImg/add-image.png" id="upload-pic"></label>
        <input type="file" id="product-img" name="product-img"/> <br/>
        <!-- <span id="click-here"> Click To Upload an Image. </span> -->
      </div>
      
      <div class="flex flex-col p-3 pl-0">
      <span id="colors-heading">COLORS</span>
      <div class="for-nextLine flex flex-row">
        <label class="container">
          <input type="checkbox" id="black" name="colors" value="black"/>
          <span class="checkmark black"></span>
        </label>
        <label class="container"> 
          <input type="checkbox" id="whiite" name="colors" value="white"/>
            <span class="checkmark white"></span>
        </label>
        <label class="container">
          <input type="checkbox" id="brownish" name="colors" value="brownish"/>
          <span class="checkmark brownish"></span>
        </label>
        <label class="container">  
          <input type="checkbox" id="green" name="colors" value="green"/>
          <span class="checkmark green"></span>
        </label>
        <label class="container">
          <input type="checkbox" id="cardinal" name="colors" value="cardinal"/>
          <span class="checkmark cardinal"></span>
        </label>
        <label class="container">  
          <input type="checkbox" id="rhino" name="colors" value="rhino"/>
          <span class="checkmark rhino"></span>
        </label>
        </div>
      </div>

    <label for="price" class="price-heading">PRICE</label>
    <input type="number" id="price" name="price" min="1" placeholder="PRICE" />

    
      <label class="warranty-heading">WARRANTY</label>
    <div class="WARRANTY-BOX flex flex-col p-7 pt-0">
      <div>
      <input type="radio" id="none" name="warranty" value="none"/>
      <label for="none" class="warranty-class"> none </label></div>
      <div>
      <input type="radio" id="7days" name="warranty" value="7days"/>
      <label for="7days" class="warranty-class"> 7 days </label></div>
      <div>
      <input type="radio" id="14days" name="warranty" value="14days"/>
      <label for="14days" class="warranty-class"> 14 days </label></div>
   </div>

     <div class="flex justify-end"> <input type="submit" value="Save" class="save-button"/> </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#colors-heading{
  font-weight: bold;
  font-family: "Prompt", sans-serif;
  padding-top: 3%;
}

/* input IDs */
#product-name,#manu-date,#desc,#price{
  width:100%;
}
#manu-date{
  color: gray;
}

label{
  font-weight:bold;
  font-family: "Prompt", sans-serif;
  display: block;
  margin:  8% 1% 1% 0%;
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
textarea,select {
  background-color:white;
  font-weight: normal;
  font-family: "Prompt", sans-serif;
  border: 1px solid #73767a;
  box-sizing: border-box;
  border-radius: 7px;
  padding: 1.5%;
  /* width: 80%; */
}

select:hover,textarea:hover,input:hover {
  box-shadow: 2px 2px 8px #888888;
  border: 1px solid black;
}

.radio-tick{
  padding: 0%;
}
textarea{
  height: 10%;
}


h1 {
  text-align: center;
}

#product-img::-webkit-file-upload-button
{
    display:none;
}
#product-img{
  color: gray;
  border:1px solid dimgray;
  background-color:whitesmoke;
  width: 70%;
  padding: 2%;
  margin-top:0%;
}
#product-img:hover{
  box-shadow:unset;
}

.image-upload img
{
    width: 1000px;
    cursor: pointer;
}

#upload-pic{
  background-color: dimgray;
  border: 1px solid dimgray;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 3%;
  margin-top: 3%;
  margin-bottom: 3%;
}

#upload-pic:hover{
  border-color: transparent;
  background-color: cadetblue;
  box-shadow: 2px 2px 8px dimgray;
}

#IMAGE-heading{
  width: 20%;
}

.warranty-class{
  padding: 1%;
  margin: 2%;
  display: contents;
  font-weight: normal;
}
/* The container */
.container{
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
  position:relative;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  padding: 0%;
}

.for-nextLine{
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
  border:1px solid dimgray;
}
.brownish {
  position: absolute;
  height: 25px;
  width: 25px;
  background-color: #81785B;
}
.green {
  position: absolute;
  height: 25px;
  width: 25px;
  background-color: #549A65;
}
.cardinal {
  position: absolute;
  /* top: 0;
  left: 0; */
  height: 25px;
  width: 25px;
  background-color: #BF1B2F;

}
.rhino {
  position: absolute;
  /* top: 0;
  left: 0; */
  height: 25px;
  width: 25px;
  background-color:#343E61;
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

.save-button{
  width: 75px;
  color: white;
  background: #10B981;
  border-radius: 5px;
  border-color: transparent;
  cursor: pointer;
}

.save-button:hover{
  background-color: cadetblue;
  border-color: transparent;
  box-shadow: 2px 2px 8px dimgray;
}

@media (max-width:768px) {
  .for-forms {
  width: 90vw;
  padding-bottom: 15%;
}
label,span{
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.image-upload img
{
    cursor: pointer;
}
#product-img{
  width: 95%;
}
#IMAGE-heading{
  width: 25%;
}
}
@media (width:768px) {
  .for-forms {
  width: 60%;
}
}
@media (min-width:1024px) {
  .for-forms {
  width: 40%;
}
}
</style>