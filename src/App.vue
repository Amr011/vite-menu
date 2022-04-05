<script>
export default {}
</script>

<template>
  <div>
    <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {{ $route.meta.title }}
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
