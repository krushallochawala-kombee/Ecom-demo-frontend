<template>
    <v-app>
      <v-app-bar app v-if="$route.path !== '/login'">
        <v-toolbar-title>My E-Commerce</v-toolbar-title>
        <v-spacer />
        <v-btn text href="/">Login</v-btn>
      </v-app-bar>
  
      <v-main>
        <NuxtPage />
      </v-main>
  
      <v-footer app>
        <v-col class="text-center">© 2024 My E-Commerce</v-col>
      </v-footer>
    </v-app>
  </template>
  
  <script setup>
  </script>
  