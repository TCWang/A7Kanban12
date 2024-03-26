<template>
  <div class="container">
    <NuxtErrorBoundary>
      <!-- Groud Buying -->

      <h1>地區醫療</h1>
      <HospitalCards />

      <template #error="{ error }">
        <div class="text-center mx-auto flex flex-col">
          <h1 class="text-5xl text-red-600 mb-4">Sorry Something went wrong</h1>
          <code>{{ error }}</code>
          <button
            class="text-white bg-blue-400 px-10 py-3 rounded mt-4"
            @click="error.value = null"
          >
            Go Back
          </button>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup>
const route = useRoute();

useHead({
  title: "健康休閒-地區醫療",
  meta: [
    { name: "description", content: "A7新林口-社區網站: 12.健康休閒資訊平台 " },
  ],
});

definePageMeta({
  layout: "default",
});
</script>
