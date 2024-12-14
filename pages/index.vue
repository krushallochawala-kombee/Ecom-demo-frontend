<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" v-for="product in products" :key="product.id">
          <v-card>
            <v-img :src="product.image" class="white--text" height="200px"></v-img>
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-text>{{ product.description }}</v-card-text>
            <v-card-actions>
              <v-btn text color="primary" @click="viewProduct(product.id)">View</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const products = ref([
    { id: 1, name: 'Product 1', description: 'Description for product 1', image: '/product1.jpg' },
    { id: 2, name: 'Product 2', description: 'Description for product 2', image: '/product2.jpg' },
  ]);
  
  const viewProduct = (id) => {
    console.log('Viewing product', id);
  };
  </script>
  