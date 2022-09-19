import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', {
  // other options...
  state: () => ({
    activeItem: '',

    menu: [
      { text: '', body: '', link: 'https://google.com' },
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
      },
      {
        text: 'How to use',
        active: false,
        body: '',
        link: 'https://google.com',
      },
      {
        text: '❓',
        active: false,
        body: '',
        link: 'https://google.com',
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
  getters: {},
  actions: {
    setActive(item) {
      this.activeItem = item;
    },
    clearActive() {
      this.activeItem = '';
    },
  },
});
