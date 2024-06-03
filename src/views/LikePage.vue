<template>
   <section class="favourites">
      <div class="container">
         <div v-if="!likeProducts" class="flex items-center flex-col mt-32 gap-4">
            <img src="../assets/images/emoji-2.png" alt="#">
            <h1 class="font-bold text-[40px]">Закладок нет :(</h1>
            <p class="text-gray-400 text-[20px]">Вы ничего не добавляли в закладки</p>
            <button class="btn text-white bg-lime-500 py-3 w-[200px] rounded-lg" @click="$router.push({name: 'home'})">Вернуться назад</button>
         </div>
         <div class="content" v-else>
            <div class="text">
            <h2 class="font-bold text-3xl">Мои закладки</h2>
         </div>
         <div class="boxs flex gap-3 mt-4">
            <div class="box border w-[260px] h-[350px] py-3 px-4 rounded-3xl cursor-pointer" v-for="item in likeProducts" @click="$router.push({name: 'home'})">
          <div class="img-action">
            <img src="../assets/images/like-2.svg" alt="#">
            <!-- <img v-show="item.id == this.activeLiked" src="../assets/images/like-2.svg" alt="#"> -->
            <img :src="item.img" alt="">
          </div>
          <h2 class="title">{{ item.name }}</h2>
          <div class="price flex items-center justify-between gap-5 mt-4">
            <div class="text">
              <span class="font-bold">Цена:</span>
              <h3>{{ item.price }} руб.</h3>
            </div>
          </div>
        </div>
         </div>
         </div>
      </div>
   </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
   computed: {
      ...mapState({
         likeProducts: state => state.menu.likeArray
      })
   }
}
</script>

<style></style>