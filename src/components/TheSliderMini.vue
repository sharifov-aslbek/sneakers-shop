<template>
   <section class="partners my-10">
     <div class="container">
       <h2 class="text-center font-bold text-black/90 text-3xl lg:text-4xl mb-10 lg:mb-20">Нашы кроссовки</h2>
       <!-- <div class=""> -->
       <div class="partners-swiper swiper-container">
         <div class="swiper-wrapper">
           <div class="swiper-slide">
             <div class="image">
               <img src="../assets/images/sneakers/sneakers-1.jpg" alt="">
             </div>
           </div>
           <div class="swiper-slide">
             <div class="image">
               <img src="../assets/images/sneakers/sneakers-2.jpg" alt="">
             </div>
           </div>
           <div class="swiper-slide">
             <div class="image">
               <img src="../assets/images/sneakers/sneakers-3.jpg" alt="">
             </div>
           </div>
           <div class="swiper-slide">
             <div class="image">
               <img src="../assets/images/sneakers/sneakers-4.jpg" alt="">
             </div>
           </div>
           <div class="swiper-slide">
             <div class="image">
               <img src="../assets/images/sneakers/sneakers-5.jpg" alt="">
             </div>
           </div>
           <div class="swiper-slide">
             <div class="image">
               <img src="../assets/images/sneakers/sneakers-6.jpg" alt="">
             </div>
           </div>
         </div>
       </div>
       <!-- </div> -->
     </div>
   </section>
 </template>
 
 <script>
 import { register } from 'swiper/element/bundle';
 register();
 
 import Swiper from 'swiper';
 
 export default {
   components: {
     Swiper,
   },
   mounted() {
     new Swiper('.partners-swiper', {
       slidesPerView: 1,
       loop: true,
       autoplay: {
         delay: 1000,
         disableOnInteraction: false,
       },
       breakpoints: {
         640: {
           slidesPerView: 2,
         },
         900: {
           slidesPerView: 3,
         },
         1000: {
           slidesPerView: 4
         }
       }
     });
   },
 }
 </script>
 
 <style scoped>
 .partners .container .swiper-container {
   overflow-x: hidden;
   display: flex;
   align-items: center;
 }
 
 .partners .container .swiper-container .swiper-wrapper {
   display: flex;
   align-items: center;
 }
 
 .partners .container .swiper-container .swiper-wrapper .swiper-slide .image {
   width: 200px;
   margin: 0 auto;
 }
 
 .partners .container .swiper-container .swiper-wrapper .swiper-slide img {
   width: 100%;
   height: 100%;
   object-fit: cover;
 }
 </style>
 