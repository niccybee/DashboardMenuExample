<script setup>
import MenuActive from './MenuActive.vue';
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
    <!-- <span v-if="props.text">{{ props.text }}</span> -->
  </a>
</template>
