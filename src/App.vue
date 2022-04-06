<script>
import navbar from './components/navbar.vue'
import menuFooter from './components/menu-footer.vue'
export default {
  components: { navbar, menuFooter },
}
</script>

<template>
  <div>
    <div class="container mx-auto flex justify-center">
      <navbar v-if="$route.meta.title" />
    </div>
    <main>
      <router-view />
    </main>
    <menuFooter v-if="$route.meta.title" />
  </div>
</template>
