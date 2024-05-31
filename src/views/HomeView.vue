<template>
  <section class="slider">
    <TheSlider />
  </section>

  <section class="hero mt-10 mb-10">
    <div class="container">
      <div class="top flex items-center justify-between">
        <h2 class="title font-bold text-3xl">
          Все кроссовки
        </h2>
        <form class="flex gap-3 border py-3 px-3 rounded-xl">
          <img src="../assets/images/search.svg" alt="#">
          <input type="text" placeholder="Поиск..." v-model="inputValue" class="outline-none border-none">
        </form>
      </div>
      <div class="boxs flex items-center flex-wrap gap-10 mt-10">
        <div class="box border w-[260px] h-[340px] py-3 px-4 rounded-3xl" v-for="item in getFilter">
          <div class="img-action">
            <img src="../assets/images/heart.svg" alt="#">
            <img :src="item.img" alt="">
          </div>
          <h2 class="title">{{ item.name }}</h2>
          <div class="price flex items-center justify-between gap-5 mt-4">
            <div class="text">
              <span class="font-bold">Цена:</span>
              <h3>{{ item.price }} руб.</h3>
            </div>

            <div class="add cursor-pointer">
              <img :class="{'hidden' : item.id == this.activeAdded}" @click="getId(item.id); getProduct" src="../assets/images/plus.svg" alt="#">
              <img v-show="item.id == this.activeAdded" src="../assets/images/checked.svg" alt="#">
            </div>
          </div>
        </div>
        {{ getProduct }}
      </div>
    </div>
  </section>
</template>

<script>
import TheSlider from '../components/TheSlider.vue'
import productsArray from '../productsArray.js'
export default {
  components: {
    TheSlider
  },
  data() {
    return {
      inputValue: '',
      array: productsArray,
      isAdded: false,
      activeAdded: 0
    }
  },
  methods: {
    getId(id) {
      this.activeAdded = id
    },  
  },
  computed: {
    getFilter() {
      if(this.inputValue.length == 0) {
        return this.array
      }

      return this.array.filter(item => item.name.indexOf(this.inputValue) > -1)
    },
    getProduct(){
      return this.array.filter(item => item.id == this.activeAdded)
    }
  }
}
</script>

<style>
  .hidden {
    display: none;
  }
</style>