<template>
  <section class="forbg-card bg-black w-full h-full fixed top-0 opacity-70 z-20" v-show="getState"></section>
  <section class="cartPage absolute right-0 top-0 bg-white w-[400px] h-[100%] z-30 py-10 px-5 flex flex-col justify-between" v-show="getState">
      <div class="top flex justify-between">
         <h2 class="font-bold text-2xl">Корзина</h2>
      <img @click='menuCloser' class="cursor-pointer" src="../assets/images/close.svg" alt="#">
      </div>
      <div class="boxs overflow-y-scroll">
        <div class="box flex items-center border rounded-xl mb-5 mt-5" v-for="item in sortingProduct" :key="item.id">
          <img class="w-[120px]" :src="item.img" alt="#">
          <div class="text">
            <h3 class="font-bold">{{ item.name }}</h3>
            <p>{{ item.price }} руб.</p>
          </div>

          <img @click="removeItem(item.id)" src="../assets/images/close.svg" alt="#" class="mr-5 mt-2 cursor-pointer">
        </div>
      </div>

      <div class="price">
        <div class="itogo flex justify-between">
          <h4>Итого: {{ totalProductPrice }}</h4>
          <p>руб.</p>
        </div> 
        <div class="nalog flex justify-between">
          <h4>Налог 5%: 1000 </h4>
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
              <img :class="{'hidden' : item.id == this.activeAdded}" @click="getId(item.id); productToArr(); dispatching" src="../assets/images/plus.svg" alt="#">
              <!--  getProduct; sendingProduct to img click -->
              <img v-show="item.id == this.activeAdded" src="../assets/images/checked.svg" alt="#">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
<!-- sendingProduct(){
      this.$emit('products' , this.sortingProduct)
    }, -->
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
      sortingProduct: [],
    }
  },
  methods: {
    getId(id) {
      this.activeAdded = id
      this.AllId.push(id)
    },
    menuCloser(){
      return this.$store.commit("menuClose")
    },
    removeItem(id) {
        this.sortingProduct = this.sortingProduct.filter(c => c.id != id)
        },
    productToArr(){
        console.log('funksiya iwlamoqda')
        this.sortingProduct = this.array.filter(item => this.AllId.includes(item.id))
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
    // sortingProduct() {
    //   return [...new Set(this.getProduct)]
    // },
    getState(){
      return this.$store.state.menu.menuOpener
    },
    totalProductPrice(){
      return this.sortingProduct.reduce((sum , item) => sum + Number(item.price), 0)
    },
    dispatching(){
      this.$store.dispatch("getTotalProduct" , this.totalProductPrice)
    }
  },
}
</script>

<style>
  ::-webkit-scrollbar {
   width: 7px;
}

::-webkit-scrollbar-thumb {
   background: rgb(63, 219, 28);
}

::-webkit-scrollbar-thumb:hover {
   background:  rgb(33, 145, 83);
}

  .hidden {
    display: none;
  }

</style>