<script setup>
const helpArticles = [
  {
    title: 'How to watch lectures',
    link: 'google.com/s/how',
  },
  {
    title: 'How upgrade account',
    link: 'google.com/s/upgrade',
  },
];
</script>
<template>
  <div>
    <h2>Help Component</h2>
    <div
      class="p-4 border-box flex flex-col justify-between h-full bg-blue-100"
    >
      <div>
        <input
          class="max-w-full w-full p-2 rounded-md border-1 border-solid"
          type="text"
          placeholder="Search for help topic"
        />
      </div>
      <div
        v-for="h in helpArticles"
        class="
          py-2
          bg-white
          hover:bg-blue-100
          shadow-sm
          cursor-pointer
          rounded-md
          my-1
          text-gray-600
        "
      >
        {{ h.title }}
      </div>
    </div>
  </div>
</template>
