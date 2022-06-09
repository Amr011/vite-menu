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
    class="bg-secondery py-1 px-4 text-base font-bold text-white md:px-6 lg:px-8 lg:text-lg xl:px-8 xl:text-xl"
    style="width: auto !important"
  >
    {{ categoryTitle }}
  </button>
</template>
