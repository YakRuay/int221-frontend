<template >
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


  <h1>This is our Forms page</h1>
  <div class="p-3 flex justify-center w-screen bg-red-300">
    <form class="for-forms bg-yellow-300">
      <label for="product-name">PRODUCT NAME</label>
      <input type="text" id="product-name" name="product-name" placeholder="PRODUCT NAME" />

      <label for="manu-date">MANUFACTURER DATE</label>
      <input type="date" id="manu-date" name="manu-date"/>

      <label for="desc">PRODUCT DESCRIPTION</label>
      <textarea type="text" id="desc" name="desc" placeholder="PRODUCT DESCRIPTION"/>

      <label for="brand"> BRAND </label>
      <select name="brand" id="brand">
        <option value="ADIDAS"> ADIDAS </option>
        <option value="CROCS"> CROCS </option>
        <option value="FILA"> FILA </option>
    </select>

      <div class="image-upload">
        <label for="product-img">Image
       <img src="@/assets/FormsImg/add-image.png" id="upload-pic"></label>
        <input type="file" id="product-img" name="product-img"/>
        <span id="click-here"> Click To Upload an Image. </span>
      </div>
      
      <label for="colors">COLORS</label>
      <input type="radio" id="black" name="colors" value="black" />
      <input type="radio" id="whiite" name="colors" value="white"/>
      <input type="radio" id="brownish" name="colors" value="brownish"/>
      <input type="radio" id="green" name="colors" value="green"/>
      <input type="radio" id="cardinal" name="colors" value="cardinal"/>
      <input type="radio" id="rhino" name="colors" value="rhino"/>


    <label for="price">PRICE</label>
    <input type="number" id="price" name="price" min="1" placeholder="PRICE" />

    
      <label>WARRANTY</label>
    <div class="WARRANTY-BOX flex flex-col p-7 pt-0">
      <div>
      <input type="radio" id="none" name="warranty" value="none"/>
      <label for="none" class="warranty-class"> none </label></div>
      <div>
      <input type="radio" id="7days" name="warranty" value="7days"/>
      <label for="7days" class="warranty-class"> 7days </label></div>
      <div>
      <input type="radio" id="14days" name="warranty" value="14days"/>
      <label for="14days" class="warranty-class"> 14days </label></div>
   </div>

      <input type="submit" value="Save" class="justify-self-end"/>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* input IDs */
#product-name,#manu-date,#desc,#price{
  width:100%;
}

label{
  font-weight:bold;
  font-family: "Prompt", sans-serif;
  display: block;
  padding: 8% 1% 1% 0%;

}

.for-forms {
  flex-direction: column;
}

@media (min-width: 1024px) {
  .for-forms {
    width: 30%;
  }
}

input,
textarea,select {
  font-weight: normal;
  font-family: "Prompt", sans-serif;
  border: 1px solid #73767a;
  box-sizing: border-box;
  border-radius: 7px;
  padding: 1.5%;
  /* width: 80%; */
}

input:hover {
  border: 1px solid darkslategray;
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

.image-upload > input
{
    display: none;
}

.image-upload img
{
    width: 80px;
    cursor: pointer;
}

#upload-pic{
  background-color: darkslategray;
  border: 1px solid darkslategray;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 3%;
  margin: 3% 0% 1% 3%;
}

#click-here{
  padding-left:3% ;
  font-weight: normal;
  font-family: "Prompt", sans-serif;
}

.warranty-class{
  padding: 1%;
  margin: 2%;
  display: contents;
  font-weight: normal;
}

</style>