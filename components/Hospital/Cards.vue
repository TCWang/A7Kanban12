<template>
  <div class="flex flex-row flex-wrap">
    <HospitalCard
      v-for="hospital in hospitals"
      :key="hospital.id"
      :hospital="hospital"
    />
  </div>
</template>

<script setup>
import hospitals from "@/data/hospitals.json";
</script>
