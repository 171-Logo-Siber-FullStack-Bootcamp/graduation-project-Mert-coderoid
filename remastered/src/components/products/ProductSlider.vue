<template>
    <aside>
        <!-- {{ currentImage }} -->
        <article>
            <div>
                <div class="mt-5"></div>
            </div>
            <div class="img-small-wrap">
                <div v-for="item in images[0]" :key="item.id" class="item-gallery">
                    <img :src="'http://localhost:3000/uploads' + item.image" />
                </div>
            </div>
        </article>
    </aside>
</template>

<script>

import axios from "axios";

var baseUrl = (window.location).href; // You can also use document.URL
var koopId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
koopId = koopId.split("/");
koopId = koopId[koopId.length - 1];

var datas = [];


// convert datas to array


axios.get("http://localhost:3000/products/" + koopId)
    .then(function (response) {
        // handle success
        datas.push(response.data);
        console.log(datas[0]);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });

datas = Object.values(datas);

export default {
    name: "ProductSlider",
    props: {
        // image: Array
    },
    data() {
        return {
            // currentImage: this.$props.image[0],
            images: datas
        }
    },

    methods: {
        changeImage(n) {
            this.currentImage = this.$props.image[n];
        }
    }
}
</script>

<style scoped>
.gallery-wrap .img-big-wrap img {
    height: 450px;
    width: auto;
    display: inline-block;
}

.gallery-wrap .img-small-wrap .item-gallery {
    width: 60px;
    height: 60px;
    border: 1px solid #ddd;
    margin: 7px 2px;
    display: inline-block;
    overflow: hidden;
}

.gallery-wrap .img-small-wrap {
    text-align: center;
}
.gallery-wrap .img-small-wrap img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
}
</style>
