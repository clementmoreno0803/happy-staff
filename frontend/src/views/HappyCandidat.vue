<template>
  <div class="about">
    <div v-for="user in users" :key="user">
      {{ user }}
    </div>
    <h3>Prout</h3>
  </div>
</template>

<script lang="ts" setup>
import { User } from "@/models/User";
import axios from "axios";
import { onMounted, ref } from "vue";
const users = ref([]);

const getUsers = async () => {
  try {
    console.log("running");
    const response = await axios.get("http://localhost:3000/user");
    console.log(response);
    users.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getUsers();
});
</script>
