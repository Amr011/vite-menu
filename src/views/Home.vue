<script>
import menuItem from '../components/menu-item.vue'
export default {
  name: 'Home',
  components: { menuItem },
}
</script>

<template>
  <div class="container mx-auto font-bold">
    <div>
      <ul class="list-none">
        <li>
          <menu-item />
        </li>
        <li>
          <menu-item />
        </li>
        <li>
          <menu-item />
        </li>
      </ul>
    </div>

    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div class="inline-flex justify-center rounded-md shadow">
        <router-link
          to="/about"
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none"
          >Next Page</router-link
        >
      </div>
    </div>
  </div>
</template>
