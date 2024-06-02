<template>
    <div class="box">
      <TheNavbar />
      <HomeView/>
    </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
import HomeView from './views/HomeView.vue'
export default {
  components: {
    TheNavbar, HomeView
  },
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