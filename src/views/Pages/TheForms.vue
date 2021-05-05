<template >
  <h1>This is our Forms page</h1>
  <div class="bg-yellow-500 p-3 flex justify-center w-screen">
    <form class="for-forms bg-green-300">
      <label for="product_name">PRODUCT NAME</label>
      <input type="text" id="product-name" name="product_name" placeholder="PRODUCT NAME" />

      <label for="manu_date">MANUFACTURER DATE</label>
      <input type="date" id="manu-date" name="manu_date"/>

      <label for="desc">PRODUCT DESCRIPTION</label>
      <textarea type="text" id="desc" name="desc" placeholder="PRODUCT DESCRIPTION"/>

      <label for="brand"> BRAND </label>
      <select name="brand" id="brand">
        <option value="ADIDAS"> ADIDAS </option>
        <option value="CROCS"> CROCS </option>
        <option value="FILA"> FILA </option>
    </select>


      <label for="product_img">Image</label>
      <input type="file" id="product-img" name="product_img" placeholder="Click here to upload image" />

      <label for="lname">COLORS</label>
      <input type="color" id="colors" name="colors" />

      <label for="price">PRICE</label>
     <input type="number" id="price" name="price" min="1" />

      <label for="warranty">WARRANTY</label>
      <input type="text" id="warranty" name="warranty" />

     <div class="flex flex-col justify-start">
      <span class="radio-check-words"> BRAND </span>
      
      <input type="radio" id="adidas" name="brand" value="ADIDAS" class="radio-tick">
      <label for="adidas"> ADIDAS </label>
      <input type="radio" id="crocs" name="brand" value="CROCS" class="radio-tick">
      <label for="crocs"> CROCS </label>
      <input type="radio" id="fila" name="brand" value="FILA" class="radio-tick">
      <label for="fila"> FILA </label>
      </div>

      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* input IDs */
label{
  font-weight:bold;
  font-family: "Prompt", sans-serif;
  display: block;
  padding: 5% 1% 1% 0%;

}

.for-forms {
  flex-direction: column;
}

@media (min-width: 1024px) {
  .for-forms {
    width: 37%;
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
</style>