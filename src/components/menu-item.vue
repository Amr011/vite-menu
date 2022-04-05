<script>
export default {
  name: 'menu-item-card',
  props: {
    itemTitle: { default: 'HOT-CHOCOLATE', type: String },
    itemContent: {
      default: '7spices Resturatnt do for you for free',
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
}
</script>
<template>
  <div class="menu-item">
    <div class="col-span-2 flex items-center justify-start rounded-lg">
      <img :src="itemImgSrc" class="h-full rounded-lg object-cover" :alt="itemImageAlt" />
    </div>
    <div class="col-span-3 my-0.5 grid grid-rows-3 justify-start">
      <div class="row-span-2">
        <p class="text-base font-bold uppercase md:text-lg lg:text-lg xl:text-2xl">
          {{ itemTitle }}
        </p>
        <p class="text-xs font-normal text-gray-600 md:text-sm lg:text-base xl:text-lg">
          {{ itemContent }}
        </p>
      </div>
      <div
        class="text-secondery row-span-1 flex items-end space-x-4 text-sm md:text-base lg:text-lg xl:text-lg"
      >
        <p v-if="itemIsTimed">{{ itemTime }} min</p>
        <p v-if="itemIsSized">
          {{ itemSize }}
          size
        </p>
      </div>
    </div>

    <div class="col-span-1 my-0.5 grid grid-rows-2 justify-end">
      <div class="row-span-1 grid justify-end -space-y-2 text-center">
        <p class="text-md md:text-lg lg:text-lg xl:text-xl">{{ itemPrice }}</p>
        <p class="text-xs font-extralight text-gray-600 md:text-sm lg:text-sm xl:text-base">
          {{ itemCurrency }}
        </p>
      </div>
      <div
        class="text-primary row-span-2 flex items-end text-base md:text-lg lg:text-lg xl:text-xl"
      >
        <button class="uppercase">Preview</button>
      </div>
    </div>
  </div>
</template>

<style>
.menu-item {
  @apply mx-auto mt-4 grid w-80 grid-cols-6 gap-2 rounded-lg border-2 p-2 md:w-[480px] md:gap-4 lg:w-[520px] lg:gap-4 xl:w-[580px] xl:gap-6 xl:p-3;
}
</style>
