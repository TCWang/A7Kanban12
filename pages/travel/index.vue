<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
    <div class="w-full my-2">
      <h2>蘇杭滬 旅遊導遊</h2>

      <a href="https://a7kanban12.netlify.app/travel/v027">
        <button
          class="w-1/2 border-2 border-blue-600 px-4 py-2 bg-blue-300 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
        >
          旅遊準備
        </button>
      </a>
      <a href="https://a7kanban12.netlify.app/travel/v022">
        <button
          class="w-1/2 border-2 border-blue-600 px-4 py-2 bg-blue-300 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
        >
          行程規劃
        </button>
      </a>
      <a href="https://a7kanban12.netlify.app/travel/v023">
        <button
          class="w-1/2 border-2 border-blue-600 px-4 py-2 bg-blue-300 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
        >
          景點介紹
        </button>
      </a>
      <a href="https://a7kanban12.netlify.app/travel/v024">
        <button
          class="w-1/2 border-2 border-blue-600 px-4 py-2 bg-blue-300 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
        >
          旅館介紹
        </button>
      </a>
      <a href="https://a7kanban12.netlify.app/travel/v025">
        <button
          class="w-1/2 border-2 border-blue-600 px-4 py-2 bg-blue-300 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
        >
          餐館介紹
        </button>
      </a>
      <a href="https://a7kanban12.netlify.app/travel/v026">
        <button
          class="w-1/2 border-2 border-blue-600 px-4 py-2 bg-blue-300 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
        >
          交通規劃
        </button>
      </a>
    </div>
    <div class="w-full my-2">
      <h2>台灣 旅行導遊</h2>

      <a href="https://tcwang.github.io/TravelGuide-Islands/Index.html">
        <button
          class="w-1/2 border-2 border-blue-600 px-4 py-2 bg-blue-300 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
        >
          離島旅遊
        </button>
      </a>
      <a href="https://tcwang.github.io/TravelGuide-EastCoast/index.html">
        <button
          class="w-1/2 border-2 border-blue-600 px-4 py-2 bg-blue-300 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
        >
          花東旅遊
        </button>
      </a>
      <a href="https://tcwang.github.io/TravelGuide-Taoyuan/index.html">
        <button
          class="w-1/2 border-2 border-blue-600 px-4 py-2 bg-blue-300 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
        >
          桃園旅遊
        </button>
      </a>
      <a href="https://tcwang.github.io/TravelGuide-TaiChung/index.html">
        <button
          class="w-1/2 border-2 border-blue-600 px-4 py-2 bg-blue-300 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
        >
          台中旅遊
        </button>
      </a>
      <a href="https://tcwang.github.io/TravelGuide-Tainan/index.html">
        <button
          class="w-1/2 border-2 border-blue-600 px-4 py-2 bg-blue-300 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
        >
          台南旅遊
        </button>
      </a>
    </div>
  </div>
  <div class="w-full">
    <h2>旅遊筆記</h2>
    <div class="column space-x-24 ml-6">
      <div>類別</div>
      <div>標題</div>
      <div>日期</div>
    </div>
    <ul>
      <li style="list-style: none" v-for="post in posts" :key="post._path">
        <NuxtLink
          :to="post._path"
          class="column hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div
            :class="{
              'text-white ': !post.displayCategory,
              'text-gray-900': post.displayCategory,
            }"
          >
            {{ post.category }}
          </div>
          <div class="pl-6">{{ post.title }}</div>
          <div class="pl-6">{{ post.fullDate }}</div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
useHead({
  title: "健康休閒-旅行導遊",
  meta: [
    { name: "description", content: "A7新林口-社區網站: 12.健康休閒資訊平台 " },
  ],
});

const { data } = await useAsyncData("travel-list", () =>
  queryContent("/travel")
    .where({ _path: { $ne: "/travel" } })
    .only([
      "_path",
      "title",
      "publishedAt",
      "category",
      "sequence",
      "link",
      "image",
    ])
    .sort({ publishedAt: -1 })
    .sort({ category: 1 })
    .find()
);

const posts = computed(() => {
  if (!data.value) {
    return [];
  }

  const result = [];
  let lastCategory = null;

  for (const post of data.value) {
    const publishedDate = new Date(post.publishedAt);
    const year = publishedDate.getFullYear();
    const month = publishedDate.getMonth() + 1; // Adding 1 because getMonth returns a zero-based index (0 for January)
    const day = publishedDate.getDate();

    // Format the date as desired (e.g., YYYY-MM-DD)
    const fullDate = `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;

    const category = post.category;

    const displayCategory = category !== lastCategory;

    post.displayCategory = displayCategory;
    post.categorykeep = category;
    post.fullDate = fullDate;
    result.push(post);
    lastCategory = category;
  }

  return result;
});
</script>

<style scoped>
.column {
  @apply flex  py-1;
}
</style>
