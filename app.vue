<template>
    <NuxtPage/>
</template>
<script>
import {provideToast, POSITION} from "vue-toastification";
import "vue-toastification/dist/index.css";

export default {
  setup() {
    provideToast();
    return {}
  }

}

</script>
<style>
.router-link-active, .router-link-exact-active {
  color: #1680EA !important;
}

body {
  scroll-behavior: smooth;
}
</style>
