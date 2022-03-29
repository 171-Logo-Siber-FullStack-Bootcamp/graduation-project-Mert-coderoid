<template>
  <Fragment>
    <HeaderComp></HeaderComp>
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
    <FooterComp></FooterComp>
  </Fragment>
</template>

<script>
import HeaderComp from "./components/core/HeaderComp";
import FooterComp from "./components/core/FooterComp";
// import Fragment


export default {
  name: "app",
  components: {
    FooterComp,
    HeaderComp

  },
  data() {
    return {

    };
  }
};
</script>

<style>
.swal-button {
  background-color: #138496;
}

.swal-button:hover {
  background-color: #036979 !important;
}

.page-enter-active {
  animation: slide-in 0.3s ease-out forwards;
}

.page-leave-active {
  animation: slide-out 0.3s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: scale(0.9);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.9);
    opacity: 0;
  }
}
</style>
