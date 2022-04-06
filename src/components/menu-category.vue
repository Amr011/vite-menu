<script>
export default {
  props: {
    categoryTitle: { default: 'Coffee', type: String },
    isActive: { default: true, type: Boolean },
  },
}
</script>

<template>
  <button
    @click="isActive = !isActive"
    class="bg-secondery w-full py-2 px-2 text-base font-bold text-white md:px-6 lg:px-8 lg:text-lg xl:px-8 xl:text-xl"
  >
    <!--     :class="isActive ? 'bg-secondery' : 'bg-primary'"
 -->
    {{ categoryTitle }}
  </button>
</template>
