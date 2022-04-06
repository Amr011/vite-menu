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
      indexNum: 10,
    }
  },
}
</script>
<template>
  <swiper
    class="w-80 md:w-[480px] lg:w-[520px] xl:w-[580px]"
    :slides-per-view="4"
    :space-between="2"
    :grabCursor="true"
    :watchSlidesVisibility="true"
  >
    <swiper-slide class="mx-2" v-for="index in indexNum" :key="index"
      ><menuCategory :categoryTitle="index"
    /></swiper-slide>
  </swiper>
</template>

<style></style>
