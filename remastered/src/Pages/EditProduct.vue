
<template>
    <aside class="row container" style="margin: auto;">
        <article class="card-body p-5 col-5" v-for="product in products[0]" :key="product.id">
            <div>
                <div class="mt-5"></div>
            </div>
            <div class="img-small-wrap">
                <div class="item-gallery">
                    <img :src="'http://localhost:3000/uploads' + product.image" height="350px" />
                </div>
            </div>
            <div>
                <h3 class="title mb-3">{{ product.name }}</h3>
                <p class="price-detail-wrap">
                    <span class="price h3 text-warning">
                        <span class="currency">$</span>
                        <span class="num">{{ product.price | priceFormatter }}</span>
                    </span>
                </p>
                <dl class="param param-feature">
                    <dt>Category</dt>
                    <!-- <dd class="text-capitalize">{{product.brand}}</dd> -->
                    <dd class="text-capitalize">{{ product.category }}</dd>
                </dl>
                <dl class="param param-feature">
                    <dt>Quantity</dt>
                    <dd>{{ product.quantity }}</dd>
                </dl>
                <dl class="param param-feature">
                    <dt>Created at</dt>
                    <dd>{{ product.updated_at }}</dd>
                </dl>
                <dl class="item-property">
                    <dt>Description</dt>
                    <dd>
                        <!-- <p class="text-capitalize">{{ product.description }}</p>  -->
                    </dd>
                </dl>
                <hr />
            </div>
        </article>
        <article class="col-5">
            <div class="container mt-5">
                <!-- create form to add new product -->
                <form
                    v-on:submit.prevent="postData()"
                    enctype="multipart/form-data"
                    class="form-group"
                >
                    <div class="row">
                        <input
                            class="col-5 mx-2 my-2"
                            type="text"
                            placeholder="name"
                            v-model="form.name"
                        />
                        <input
                            class="col-5 mx-2 my-2"
                            type="number"
                            placeholder="price"
                            v-model="form.price"
                        />
                    </div>
                    <div class="row">
                        <input
                            type="text"
                            placeholder="category"
                            class="col-5 mx-2 my-2"
                            v-model="form.category"
                        />
                        <input
                            type="text"
                            placeholder="description"
                            class="col-5 mx-2 my-2"
                            v-model="form.description"
                        />
                    </div>
                    <div class="row">
                        <input
                            type="number"
                            placeholder="quantity"
                            class="col-5 mx-2 my-2"
                            v-model="form.quantity"
                        />
                        <!-- <input type="text" placeholder="image" class="col-5 mx-2 my-2" v-model="form.image" /> -->
                    </div>
                    <input type="file" @change="onFileChange" />
                    <button @click="onUploadFile" class="upload-button mx-2 my-2">Submit</button>
                </form>
                <div style="height: 300px;"></div>
            </div>
        </article>
    </aside>
</template>

<script>
import axios from "axios";
// import { ADD_PRODUCT_TO_CART } from "../../store/types";


var baseUrl = (window.location).href; // You can also use document.URL
var koopId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
koopId = koopId.split("/");
koopId = koopId[koopId.length - 1];
console.log(koopId);
var datas = [];

axios.get("http://localhost:3000/products/" + koopId)
    .then(function (response) {
        // handle success
        datas.push(response.data);
        console.log("---------", datas);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });


export default {
    name: "EditProduct",
    data() {
        return {
            products: datas,
            Id: koopId,
            form: {
                name: "",
                price: "",
                description: "",
                quantity: "",
                image: this.selectedFile,
                category: "",
            },

            selectedFile: null,
        }
    },
    props: {
        // product: datas[0]
    },
    methods: {
        postData() {
            axios
                .put(`http://localhost:3000/products/${this.Id}`, this.form)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        },

        onFileChange(e) {
            console.log("file changed");
            const selectedFile = e.target.files[0]; // accesing file

            this.selectedFile = selectedFile;

            // send the file path to the form.path
            this.form.image = `/${selectedFile.name}`;
            console.log("yhisID", this.Id)

            console.log(selectedFile);

        },

        onUploadFile() {
            const formData = new FormData();
            formData.append("file", this.selectedFile); // appending file to formData

            // sending file to the backend
            axios
                .post("http://localhost:3000/upload", formData)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
        },
    }
}
</script>

<style scoped>
</style>
