<template>
  <div class="about">
    {{ user }}
    <h3>Prout</h3>
  </div>
</template>

<script lang="ts" setup>
import { User } from "@/models/User";
import router from "@/router";
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const user = ref({});

const route = useRoute();
const userId = ref(route.params.id);
const getUsers = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `http://localhost:3000/user/${userId.value}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    user.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getUsers();
});
</script>
