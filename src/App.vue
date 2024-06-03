<template>
    <div class="box">
      <TheNavbar />
      <Transition name="fade">
    <RouterView />
  </Transition>
    </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
import { RouterLink, RouterView } from 'vue-router'
export default {
  components: {
    TheNavbar
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>