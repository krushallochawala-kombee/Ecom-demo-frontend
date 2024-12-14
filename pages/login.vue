<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-row align="center" justify="center" class="pa-8">
      <v-col cols="12" md="6" lg="4">
        <h1 class="text-center justify-center text-h4 mb-8">NUXT NODE DEMO</h1>
        <v-card class="elevation-12">
          <v-card-title class="text-center justify-center text-h5">Login Page</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-form ref="form" lazy-validation>
              <v-text-field
                v-model="email"
                label="Email"
                prepend-inner-icon="mdi-email"
                type="email"
                variant="outlined"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                prepend-inner-icon="mdi-lock"
                type="password"
                variant="outlined"
                required
              ></v-text-field>
              <v-btn block color="primary" class="mt-4" @click="login">
                Sign In
              </v-btn>
              <v-btn block text color="secondary" class="mt-2" @click="signup">
                  Sign Up
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const login = () => {
  console.log('Login with', email.value, password.value);
};
const signup = () => {
  console.log('Forgot Password clicked');
};
</script>

<style scoped>
.v-card {
  border-radius: 16px;
}
</style>
