<template>
  <div class="flex flex-row flex-wrap">
    <WebCard v-for="web in webs" :key="web.id" :web="web" />
  </div>
</template>

<script setup>
import webs from "@/data/webs.json";
</script>
