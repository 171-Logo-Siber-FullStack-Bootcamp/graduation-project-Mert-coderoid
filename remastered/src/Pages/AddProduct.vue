<template>
  <div class="mt-5">
    <div class="container mt-5">
      <!-- create form to add new product -->
      <form v-on:submit.prevent="postData()" enctype="multipart/form-data" class="form-group">
        <div class="row">
          <input class="col-5 mx-2 my-2" type="text" placeholder="name" v-model="form.name" />
          <input class="col-5 mx-2 my-2" type="number" placeholder="price" v-model="form.price" />
        </div>
        <div class="row">
          <input type="text" placeholder="category" class="col-5 mx-2 my-2" v-model="form.category" />
          <input type="text" placeholder="description" class="col-5 mx-2 my-2" v-model="form.description" />
        </div>
        <div class="row">
          <input type="number" placeholder="quantity" class="col-5 mx-2 my-2" v-model="form.quantity" />
          <!-- <input type="text" placeholder="image" class="col-5 mx-2 my-2" v-model="form.image" /> -->
        </div>
        <input type="file" @change="onFileChange" />
        <button @click="onUploadFile" class="upload-button mx-2 my-2">Submit</button>
      </form>
      <div style="height: 300px;"></div>
    </div>
    <!-- <img src="`../../public/assets/uploads/${form.path}`" alt /> -->
  </div>
</template>

<script>
const axios = require("axios");

// get the data from the service
export default {

    data() {
    return {

      form: {
        name: "",
        price: "",
        description: "",
        quantity: "",
        image: this.selectedFile,
        category: "",
      },

      selectedFile: null,
    };
  },

  methods: {
    // post the data to the service
    postData() {
      axios
        .post("http://localhost:3000/products", this.form)

    },

    onFileChange(e) {
      console.log("file changed");
      const selectedFile = e.target.files[0]; // accesing file

      this.selectedFile = selectedFile;

      // send the file path to the form.path
      this.form.image = `/${selectedFile.name}`;
      console.log(selectedFile);

    },

    onUploadFile() {
      const formData = new FormData();
      formData.append("file", this.selectedFile); // appending file to formData

      // sending file to the backend
      axios
        .post("http://localhost:3000/upload", formData)
    },
  },

  components: {
    // SimpleUpload,
  },
};
</script>

