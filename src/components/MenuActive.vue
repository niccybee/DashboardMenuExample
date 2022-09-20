<script setup>
import { useMenuStore } from '../stores/MenuStore';

const item = useMenuStore();
</script>
<template>
  <div
    @click="item.clearActive(item)"
    class="z-0 bg-green-100 w-full h-full absolute top-18 left-0"
  ></div>
  <div
    v-if="item.activeItem"
    :class="item.menuClass ? item.menuClass : 'w-128'"
    class="
      absolute
      top-18
      rounded-b-md
      text-grey-800
      right-1
      shadow-2
      bg-gray-300
      z-1
      min-w-36 min-h-1/2
      p-2
    "
  >
    <!-- {{ item.activeItem.component }} -->
    <!-- {{ activeItem.component }} -->
    <component :is="item.activeItem.component"></component>
  </div>
</template>
