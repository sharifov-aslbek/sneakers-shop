
<template>
   <header class="head bg-white pt-5">
      <div class="container flex items-center justify-between">
         <div class="logo flex items-center justify-around gap-3 cursor-pointer" @click="$router.push({name: 'home'})">
            <div class="img">
               <img src="../assets/images/logo.png" alt="#">
            </div>

            <div class="text">
               <h3 class="font-bold text-xl">VUE SNEAKERS</h3>
               <p class="text-gray-500">Магазин лучших кроссовок</p>
            </div>
         </div>

         <div class="actions flex items-center justify-between w-[200px]">
            <div class="cart flex items-center gap-2 cursor-pointer" @click="menuMutations">
               <img src="../assets/images/cart.svg" alt="#">
               <p>{{ isPrice }} руб</p>
            </div>

            <div class="icons flex items-center gap-4">
               <router-link :to="{name: 'like'}">
                  <img src="../assets/images/heart.svg" alt="#">
               </router-link>
               <img src="../assets/images/profile.svg" alt="#">
            </div>
         </div>
      </div>
      <hr class="mt-10">
   </header>
</template>

<script>
export default {
   data() {
      return {
         openCartPage: false,
      }
   }, 
   computed: {
      isPrice(){
         return this.$store.state.menu.price
      }
   }, 
   methods: {
      menuMutations(){
         this.$store.dispatch('menuOpenerActions')
      },
   },
}
</script>

<style>

</style>