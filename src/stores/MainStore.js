import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    notifications: [
      {
        heading: 'Notification 1',
        body: 'I am a notification about something...',
        link: 'http://google.com',
      },
      {
        heading: 'Notification Number 2',
        body: 'Another notification about something...',
        link: 'http://yahoo.com',
      },
    ],
  }),
});
