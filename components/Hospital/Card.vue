<template>
  <div
    class="relative shadow border-hidden w-full lg:w-1/2 overflow-hidden mb-5 cursor-pointer h-full"
  >
    <div
      class="m-2 flex flex-row md:flex-row h-full bg-zinc-100 rounded-2xl shadow-md"
      @click="navigateTo(`/hospital/${hospital.name}`)"
    >
      <img
        :src="`/images/hospital/${hospital.figureLogo}`"
        alt=""
        class="w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-xl transform hover:scale-110 duration-200"
      />

      <div class="p-4 flex flex-col">
        <div>
          <p class="text-bold">{{ hospital.category }} - {{ hospital.name }}</p>

          <p class="mt-auto">
            <a :href="hospital.google"> {{ hospital.address }} </a>
          </p>
          <p class="mt-auto">電話: {{ hospital.telphone }}</p>
          <p v-show="hospital.email" class="mt-auto">
            郵箱: {{ hospital.email }}
          </p>
          <p class="mt-auto">營業: {{ hospital.hours }}</p>
        </div>

        <div class="flex flex-row space-x-4">
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
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  hospital: Object,
});
</script>
