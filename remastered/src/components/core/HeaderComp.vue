<template>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #365B6D; ">
        <div class="container">
            <router-link to="/products" class="navbar-brand">
                <img src="../../assets/TReVue.jpg" height="90" />
            </router-link>
            <router-link to="/add" class="navbar-brand mx-5" style="justify-self: left; flex: 1; flex-direction: row;">
                <h5 class="nav-link text-light ">
                    Add Product
                </h5>
            </router-link>
            <div>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/cart" class="nav-link">
                            <i class="fa fa-shopping-cart mr-2" aria-hidden="true"></i>
                            Cart
                            <!-- ({{ phones.cart }}) -->
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "HeaderComp",
}
</script>

<style scoped>
</style>
