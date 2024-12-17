import { defineStore } from 'pinia'
import { useUserStore } from './userStore';

export const useRootStore = defineStore('demo', {
  state: () => ({
    userStore: useUserStore(),
  }),
  actions: {
  },
  persist: {
    key: 'demo',
  },
});
