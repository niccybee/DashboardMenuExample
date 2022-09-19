<script setup>
const props = defineProps({
  text: String,
});
</script>
<template>
  <a
    href="#"
    class="
      h-full
      flex
      items-center
      justify-center
      text-white
      px-4
      hover-bg-blue-800
      border-r border-blue-700
    "
  >
    <slot></slot>
    <span v-if="text">{{ props.text }}</span>
  </a>
</template>
