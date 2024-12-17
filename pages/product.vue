<template>
  <v-container>
    <v-row>
      {{ userStore.user?.name }}
      <v-col cols="12" md="6">
        <v-card>
          <v-btn color="primary">View</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const user = JSON.parse(localStorage.getItem("user") || "{}");
const { handleApiResponse } = useApi();
const userStore = useUserStore();
const usertype = userStore.user?.type;
const userid = userStore.user?._id;
console.log(userid)
console.log(usertype)
const loginUser = async () => {
  if (usertype === "SELLER") {
    try {
      const response = await fetch(
        `http://localhost:3001/product/getProducts/${userid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const responseData = await handleApiResponse(response);
      console.log(responseData);
    } catch (err) {
      console.log(err);
    } finally {
    }
  } else {
  }
};

loginUser();
</script>
