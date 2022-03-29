<template>
    <aside>
        <article class="card-body p-5" v-for="product in products[0]" :key="product.id">
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
            <button
                @click="onAddProductToCart()"
                class="btn btn-lg btn-outline-primary text-uppercase"
            >
                <i class="fa fa-shopping-cart"></i> Add to cart
            </button>
        </article>
    </aside>
</template>

<script>
import axios from "axios";
import { ADD_PRODUCT_TO_CART } from "../../store/types";


var baseUrl = (window.location).href; // You can also use document.URL
var koopId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
koopId = koopId.split("/");
koopId = koopId[koopId.length - 1];
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
    name: "ProductDetail",
    data() {
        return {
            products: datas,
        }
    },
    props: {
        // product: datas[0]
    },
    methods: {
        onAddProductToCart() {
            this.$store.commit(ADD_PRODUCT_TO_CART, this.product);
        }
    }
}
</script>

<style scoped>
</style>
