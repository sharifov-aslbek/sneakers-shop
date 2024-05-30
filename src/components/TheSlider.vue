<template>
   <div class="container">
      <swiper
     :spaceBetween="30"
     :centeredSlides="true"
     :autoplay="{
       delay: 2700,
       disableOnInteraction: false,
     }"
     :pagination="{
       clickable: true,
     }"
     :navigation="true"
     :modules="modules"
     class="mySwiper"
   >
     <swiper-slide>
      <img class="h-[400px] max-w-[100%]" src="../assets/images/slider-img.png" alt="#">
     </swiper-slide>
     <swiper-slide>
      <img class="h-[400px] w-full max-w-[100%]" src="../assets/images/slider-img2.png" alt="#">
     </swiper-slide>
     
   </swiper>
   </div>
 </template>
 <script>
   // Import Swiper Vue.js components
   import { Swiper, SwiperSlide } from 'swiper/vue';
 
   // Import Swiper styles
   import 'swiper/css';
 
   import 'swiper/css/pagination';
   import 'swiper/css/navigation';
  
   // import required modules
   import { Autoplay, Pagination, Navigation } from 'swiper/modules';
 
   export default {
     components: {
       Swiper,
       SwiperSlide,
     },
     setup() {
       return {
         modules: [Autoplay, Pagination, Navigation],
       };
     },
   };
 </script>


<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 30%;
  margin-top: 50px;
  border-radius: 25px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .swiper-slide img {
  display: block;
  width: 100%;
  height: 30%;
  object-fit: cover;
} */

</style>