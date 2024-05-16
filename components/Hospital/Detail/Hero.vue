<template>
  <div class="mt-2 flex flex-col md:flex-row">
    <img
      :src="`/images/hospital/${hospital.figure}`"
      class="w-full md:w-1/2 md:h-1/2 md:px-4"
      alt=""
    />

    <div class="w-full md:w-1/2">
      <h1 class="mt-1">{{ hospital.category }} - {{ hospital.name }}</h1>
      <div class="text-slate-500 text-lg mt-3 border-b pb-5 justify-between">
        <div class="flex-col">
          <p class="">
            地址:
            <a :href="hospital.google">
              {{ hospital.address }}
            </a>
          </p>
          <p class="">電話: {{ hospital.telphone }}</p>
          <p class="">營業時間: {{ hospital.hours }}</p>
        </div>

        <p class="flex flex-row space-x-4">
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
        </p>
      </div>
      <div class="flex flex-row space-x-4">
        <a v-if="hospital.suggestion" :href="hospital.suggestion">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"
          >
            推薦
          </button>
        </a>
        <a v-if="hospital.suggestion2" :href="hospital.suggestion2">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"
          >
            推薦 2
          </button>
        </a>
      </div>
      <div
        class="mt-2"
        v-if="hospital.description"
        v-html="hospital.description"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  hospital: Object,
});
</script>
