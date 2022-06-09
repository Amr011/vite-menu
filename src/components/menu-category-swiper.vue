<script>
import menuCategory from './menu-category.vue'
// import Swiper core and required modules
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

export default {
  components: {
    menuCategory,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      isActive: false,
      indexNum: ['Hot  Chocolate  Chocolate', 'Espresso', 'Cold Tea'],
    }
  },
}
</script>
<template>
  <swiper
    class="swiper-wrapper swiper-container ml-10 w-80 md:w-[480px] lg:w-[520px] xl:w-[580px]"
    :slidesPerView="4"
    :spaceBetween="10"
    :slideToClickedSlide="true"
    :paginationClickable="true"
    :grabCursor="true"
    :watchSlidesVisibility="true"
    :observer="true"
    :observeParents="true"
    :autoHeight="true"
  >
    <swiper-slide class="border-2" v-for="index in indexNum" :key="index"
      ><menuCategory :categoryTitle="index"
    /></swiper-slide>
  </swiper>
</template>

<style>
.swiper-warper {
  display: flex;
}
</style>
