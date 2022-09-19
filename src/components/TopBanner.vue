<script setup>
import MenuItem from './MenuItem.vue';
import MenuList from './MenuList.vue';
import ActiveMenu from './ActiveMenu.vue';

let activeItem = '';
function onMenuClick(event) {
  console.log(event.target);
  activeItem.value = event.target;
}
</script>
<template>
  <div
    class="
      fixed
      top-0
      left-0
      w-screen
      bg-blue-900
      flex
      p-1
      justify-between
      h-16
    "
  >
    <img class="rounded-md" src="https://picsum.photos/60" alt="logo" />
    <MenuList />
    <!-- <div
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
      <MenuItem @click="onMenuClick" text="">
        <span
          class="
            outline-red-500
            bg-blue-500
            text-white
            flex
            items-center
            justify-center
            px-8
            py-2
            rounded-md
            h-8
            hover:text-white hover:bg-blue-600 hover:text-gray-100
          "
          >Upgrade Account</span
        >
      </MenuItem>
      <MenuItem @click="onMenuClick" text="Students Online"
        ><span
          class="
            border-solid
            rounded-md
            border-1
            p-1
            bg-blue-100
            text-blue-800
            border-right border-white
            mr-2
          "
          >36</span
        >
      </MenuItem>
      <MenuItem @click="onMenuClick" text="How to use" />
      <MenuItem @click="onMenuClick" text="❓" />
      <MenuItem @click="onMenuClick" text="⚙️" />
      <MenuItem @click="onMenuClick" text="🔔" />
      <MenuItem @click="onMenuClick" text="🙋" />
    </div> -->
  </div>
  <ActiveMenu />
</template>
