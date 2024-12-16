<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-row align="center" justify="center" class="pa-8">
      <v-col cols="12" md="6" lg="4">
        <h1 class="text-center justify-center text-h4 mb-8">NUXT NODE DEMO</h1>
        <v-card class="elevation-12">
          <v-card-title class="text-center justify-center text-h5"
            >Login Page</v-card-title
          >
          <v-divider></v-divider>
          <v-alert v-if="error" type="error" class="mt-4">
            {{ error }}
          </v-alert>
          <v-alert v-if="successMessage" type="success" class="mt-4">
            {{ successMessage }}
          </v-alert>
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
              <v-btn
                block
                color="primary"
                class="mt-4"
                :loading="loading"
                :disabled="loading"
                @click="loginUser"
              >
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
import { ref } from "vue";

const email = ref("");
const password = ref("");
const loading = ref(false);
const error = ref(null);
const successMessage = ref(null);
const { handleApiResponse } = useApi();

const loginUser = async () => {
  loading.value = true; // Start loading
  error.value = null;
  successMessage.value = null;

  try {
    const response = await fetch("http://localhost:3001/user/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const responseData = await handleApiResponse(response);
    successMessage.value = responseData.message;
    navigateTo({path: '/'})
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

</script>

<style scoped>
.v-card {
  border-radius: 16px;
}
</style>
