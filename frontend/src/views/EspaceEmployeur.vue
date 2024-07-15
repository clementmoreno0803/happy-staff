<template>
  <div class="about">
    <div v-for="company in companies" :key="company">
      {{ company }}
    </div>
    <h3>Prout</h3>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { onMounted, ref } from "vue";
const companies = ref([]);

const getCompany = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/company/`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    companies.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getCompany();
});
</script>
