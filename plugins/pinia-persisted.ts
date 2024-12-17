import { defineNuxtPlugin } from '#app';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import type { Pinia } from 'pinia'; // Adjust the import based on your setup

export default defineNuxtPlugin((nuxtApp) => {
  // Register the Pinia persisted state plugin
  const pinia = nuxtApp.$pinia as Pinia; 
  pinia.use(createPersistedState());
});