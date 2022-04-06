<script>
export default {
  name: 'navbar',
  props: {
    logoImg: { default: 'https://www.unoiraq.com/assets/images/logo.png', type: String },
    logoAlt: { default: 'https://www.unoiraq.com/assets/images/logo.png', type: String },
  },
}
</script>

<template>
  <div class="container mx-auto flex w-full justify-center">
    <div class="sm:w-3/5 md:w-6/12 lg:w-6/12 xl:w-6/12">
      <div class="flex items-center justify-between space-x-16 xl:space-x-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
        <img :src="logoImg" :alt="logoAlt" class="h-[61px] w-[105px] object-contain" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
