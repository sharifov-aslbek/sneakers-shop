<template>
    <div class="box">
      <TheNavbar />
      <HomeView @products="sendToNavbar" />
    </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
import HomeView from './views/HomeView.vue'
export default {
  components: {
    TheNavbar, HomeView
  },
  methods: {
    sendToNavbar(product){
      console.log(product);
    }
  }
}
</script>

<style>
/* body {
  background: greenyellow;
}
.box {
  background: red;
  height: 50vh;
  padding: 15px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
} */
</style>