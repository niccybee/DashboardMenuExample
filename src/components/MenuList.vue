<script setup>
import MenuItem from './MenuItem.vue';
import useStoreAsRefs from 'pinia';
import { useMenuStore } from '../stores/MenuStore';

const { menu, setActive } = useMenuStore();
</script>
<template>
  <!-- {{ menu.length }} -->
  <nav
    class="
      flex
      justify-center
      items-center
      min-w-1/2
      text-3
      uppercase
      text-white
      hover:text-gray-100
    "
  >
    <MenuItem v-for="item in menu" @click="setActive(item)">
      <span v-html="item.body"></span><span>{{ item.text }}</span>
    </MenuItem>
  </nav>
</template>
