<template>
  <div v-if="hospital">
    <HospitalDetailHero :hospital="hospital" />

    <HospitalBack />
  </div>
</template>

<script setup>
import hospitals from "@/data/hospitals.json";
const route = useRoute();

const hospital = computed(() => {
  return hospitals.find((hospital) => {
    return hospital.name === route.params.name;
  });
});

if (!hospital.value) {
  throw createError({
    statusCode: 404,
    message: `Hospital  with name of ${route.params.name} does not exist`,
  });
}

useHead({
  title: `地區醫療:${route.params.name}`,
});

definePageMeta({
  layout: "custom",
});
</script>
