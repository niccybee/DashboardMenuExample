<script setup>
import { useMenuStore } from '../stores/MenuStore';


const item = useMenuStore();
</script>
<template>
  <div
    v-if="item.activeItem"
    class="
      absolute
      top-18
      rounded-b-md
      text-grey-800
      right-1
      shadow-2
      bg-gray-300
      w-128
      z-1
      min-w-36 min-h-1/2
    "
  >
    <!-- {{ item.activeItem.component }} -->
    <!-- {{ activeItem.component }} -->
    <component :is="item.activeItem.component"></component>
  </div>
</template>
