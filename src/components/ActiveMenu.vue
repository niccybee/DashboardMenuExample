<script setup>
import { useMenuStore } from '../stores/MenuStore';

const item = useMenuStore();
</script>
<template>
  <div class="absolute top-18 right-0 bg-gray-500 min-w-36 min-h-36">
    {{ item.activeItem }}
    <!-- {{ activeItem }} -->
  </div>
</template>
