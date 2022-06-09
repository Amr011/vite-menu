<script>
import menuItem from '../components/menu-item.vue'
import menuHeader from '../components/menu-header.vue'
import menuFooter from '../components/menu-footer.vue'
import menuCategorySwiper from '../components/menu-category-swiper.vue'

export default {
  name: 'Home',
  components: { menuItem, menuHeader, menuFooter, menuCategorySwiper },

  data() {
    return {
      itemCount: 4,
      categoryIndex: 0,
    }
  },
}
</script>

<template>
  <div class="container mx-auto">
    <menu-header />
    <!-- <menuCategorySwiper class="mt-4" /> -->
    <div class="" v-for="item in itemCount" :key="item">
      <menu-item />
    </div>
  </div>
</template>
<style></style>
