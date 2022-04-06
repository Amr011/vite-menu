<script>
export default {
  name: 'menu-item',
  props: {
    itemTitle: { default: 'HOT-CHOCOLATE', type: String },
    itemContent: {
      default: '7spices Resturatnt for for another video',
      type: String,
    },
    itemImgSrc: {
      default: '../../public/images/123.jpg',
      type: String,
    },
    itemImageAlt: {
      default: 'Black Opal Menu Item',
      type: String,
    },

    itemPrice: { default: 2600, type: Number },
    itemCurrency: { default: 'AED', type: String },

    itemIsSized: { default: true, type: Boolean },
    itemSize: { default: 1, type: Number },

    itemIsTimed: { default: true, type: Boolean },
    itemTime: { default: 1, type: Number },
  },

  methods: {
    filter(v) {
      return v.substring(0, 40) + '...'
    },
  },
}
</script>
<template>
  <div class="menu-item">
    <div class="\ col-span-2 flex items-center justify-start">
      <img :src="itemImgSrc" class="-lg h-full object-cover" :alt="itemImageAlt" />
    </div>
    <div class="col-span-3 my-0.5 grid grid-rows-3 justify-start">
      <div class="row-span-2">
        <p class="text-base font-bold uppercase md:text-lg lg:text-lg xl:text-2xl">
          {{ itemTitle }}
        </p>
        <p class="text-xs font-semibold text-gray-600 md:text-sm lg:text-base xl:text-lg">
          {{ filter(itemContent) }}
        </p>
      </div>
      <div
        class="text-secondery row-span-1 flex items-end space-x-1.5 text-sm md:space-x-2 md:text-base lg:space-x-3 lg:text-lg xl:space-x-4 xl:text-xl"
      >
        <div v-if="itemIsSized" class="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-cup-fill h-[14px] w-[14px] md:h-4 md:w-4 lg:h-[18px] lg:w-[18px] xl:h-[18px] xl:w-[18px]"
            viewBox="0 0 16 16"
          >
            <path
              d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"
            />
          </svg>
          <p class="font-semibold">{{ itemSize }} size</p>
        </div>
        <div v-if="itemIsTimed" class="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-stopwatch-fill h-[14px] w-[14px] md:h-4 md:w-4 lg:h-[18px] lg:w-[18px] xl:h-[18px] xl:w-[18px]"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"
            />
          </svg>
          <p class="font-semibold">{{ itemTime }} min</p>
        </div>
      </div>
    </div>

    <div class="col-span-1 my-0.5 grid grid-rows-2 justify-end">
      <div class="row-span-1 grid justify-end -space-y-2 text-center">
        <p class="text-md font-bold md:text-lg lg:text-lg xl:text-2xl">{{ itemPrice }}</p>
        <p class="text-xs font-normal text-gray-600 md:text-sm lg:text-sm xl:text-base">
          {{ itemCurrency }}
        </p>
      </div>
      <div
        class="text-primary row-span-2 flex items-end text-sm md:text-base lg:text-lg xl:text-xl"
      >
        <button
          class="border-primary hover:bg-primary flex items-center border-2 px-1.5 font-bold uppercase"
        >
          <p>Preview</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.menu-item {
  @apply mx-auto mt-4 grid  h-[110px] w-80 grid-cols-6 gap-2  border-2 p-2  md:h-[125px] 
  md:w-[480px] md:gap-4 lg:h-[140px] lg:w-[520px] lg:gap-4 xl:h-[170px] xl:w-[580px] xl:gap-6 xl:p-3;
}
</style>
