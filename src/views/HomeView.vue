<template>
  <section class="forbg-card bg-black w-full h-full fixed top-0 opacity-70 z-20" v-show="getState"></section>
  <section class="cartPage absolute right-0 top-0 bg-white w-[400px] h-[100%] z-30 py-10 px-5 flex flex-col justify-between" v-show="getState">
      <div class="top flex justify-between">
         <h2 class="font-bold text-2xl">Корзина</h2>
      <img @click='menuCloser' class="cursor-pointer" src="../assets/images/close.svg" alt="#">
      </div>
      <div class="boxs">

      </div>

      <div class="price">
        <div class="itogo flex justify-between">
          <h4>Итого:</h4>
          <p>руб.</p>
        </div>

        <div class="nalog flex justify-between">
          <h4>Налог 5%: </h4>
          <p>руб.</p>
        </div>

        <button class="btn mt-5 text-white bg-lime-500 py-3 w-full rounded-lg">Оформить заказ</button>
      </div>
  </section>
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
              <img :class="{'hidden' : item.id == this.activeAdded}" @click="getId(item.id); getProduct; sendingProduct" src="../assets/images/plus.svg" alt="#">
              <img v-show="item.id == this.activeAdded" src="../assets/images/checked.svg" alt="#">
            </div>
          </div>
        </div>
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
      activeAdded: 0,
      AllId: [],
    }
  },
  methods: {
    getId(id) {
      this.activeAdded = id
      this.AllId.push(id)
    },  
    sendingProduct(){
      this.$emit('products' , this.sortingProduct)
    },
    menuCloser(){
      return this.$store.commit("menuClose")
    }
  },
  computed: {
    getFilter() {
      if(this.inputValue.length == 0) {
        return this.array
      }
      
      return this.array.filter(item => item.name.indexOf(this.inputValue) > -1)
    },
    getProduct(){
      return this.array.filter(item => this.AllId.includes(item.id))
    },
    uniqueNumbers() {
      return [...new Set(this.AllId)];
    },
    sortingProduct() {
      return [...new Set(this.getProduct)]
    },
    getState(){
      return this.$store.state.menu.menuOpener
    },
  },
}
</script>

<style>
  .hidden {
    display: none;
  }

</style>