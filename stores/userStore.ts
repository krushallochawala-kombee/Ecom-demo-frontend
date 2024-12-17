import { defineStore } from 'pinia';

interface User {
  _id: string;
  name: string;
  email: string;
  type?: string;
}

export const useUserStore = defineStore('userStore', () => {
  const user = ref<User | null>(null);
  const setUser = (userData: User) => {
    user.value = userData;
  };

  const clearUser = () => {
    user.value = null;
  };
  return { user, setUser, clearUser };
  
});
