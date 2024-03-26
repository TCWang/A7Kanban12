<template>
  <div class="container flex flex-col md:flex-row">
    <img
      :src="`../images/hospital/${hospital.figure}`"
      class="w-[240px] h-[240px] md:w-1/2 md:h-1/2 px-1 md:px-4"
      alt=""
    />

    <div class="md:w-1/2">
      <h1 class="mt-1">{{ hospital.name }}</h1>

      <p>類別: {{ hospital.category }}</p>

      <p>
        網站: {{ hospital.id }} -
        <a :href="hospital.web">
          {{ hospital.name }}
        </a>
      </p>
      <p>
        地址:
        <a :href="hospital.google">
          {{ hospital.address }}
        </a>
      </p>
      <p>電話: {{ hospital.telphone }}</p>
      <p>營業時間: {{ hospital.hours }}</p>

      <a v-show="hospital.web" :href="hospital.web">
        <NuxtImg
          class="h-12 hover:scale-150"
          src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Web.jpeg"
        />
      </a>
      <a v-show="hospital.facebook" :href="hospital.facebook">
        <NuxtImg
          class="h-12 hover:scale-150"
          src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Facebook.png
            "
        />
      </a>
      <a v-show="hospital.line" :href="hospital.line">
        <NuxtImg
          class="h-12 hover:scale-150"
          src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Line.png"
        />
      </a>
      <a v-show="hospital.ig" :href="hospital.ig">
        <NuxtImg
          class="h-12 hover:scale-150"
          src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Ig.png"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  hospital: Object,
});
</script>
