import { defineStore } from 'pinia';
import MenuHelpComponent from '../components/MenuHelpComponent.vue';
import MenuHowToUseComponent from '../components/MenuHowToUseComponent.vue';
import MenuStudentsOnline from '../components/MenuStudentsOnline.vue';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    activeItem: '',

    menu: [
      { text: '', body: '', link: 'https://google.com', component: '' },
      {
        text: '',
        active: false,
        body: `        <span
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
        >`,
        link: 'https://google.com',
        component: 'MenuUpgradeComponent',
      },
      {
        text: 'Students Online',
        active: false,
        body: `<span class="
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
        >`,
        link: 'https://google.com',
        component: MenuStudentsOnline,
      },
      {
        text: 'How to use',
        active: false,
        body: '',
        link: 'https://google.com',
        component: MenuHowToUseComponent,
      },
      {
        text: '❓',
        active: false,
        body: '',
        link: 'https://google.com',
        component: MenuHelpComponent,
      },
      {
        text: '⚙️',
        active: false,
        body: '',
        link: 'https://google.com',
      },
      {
        text: '🔔',
        active: false,
        body: '',
        link: 'https://google.com',
      },
      {
        text: '🙋',
        active: false,
        body: '',
        link: 'https://google.com',
      },
    ],
  }),
  getters: {
    activeMenu() {
      return this.menu.filter((x) => x.active);
    },
  },
  actions: {
    setActive(item) {
      item.active = true;
      console.log('set-active', item);
      this.activeItem = item;
    },
    clearActive(item) {
      item.active = false;
      console.log('clear', item);
      this.activeItem = '';
      console.log(this.activeItem);
    },
  },
});
3;
