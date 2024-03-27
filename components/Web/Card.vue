<template>
  <div
    class="flex-row flex-wrap shadow border-hidden mb-1 cursor-pointer w-1/2 md:w-1/4 lg:1/6 h-[200px] md:h-[220px]"
  >
    <div class="flex flex-col h-full bg-zinc-100 rounded-2xl shadow-md">
      <a :href="web.web">
        <img
          :src="`images/web/${web.figure}`"
          alt=""
          class="ml-4 w-[120px] md:w-[120px] h-[120px] md:h-[120px] rounded-xl transform hover:scale-110 duration-200"
        />
      </a>

      <div class="p-4 flex flex-col">
        <div>
          <p class="bg-blue-200 hover:bolder-red px-3 py-2 rounded text-lg">
            <a :href="web.web"> {{ web.name }} </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  web: Object,
});
</script>
