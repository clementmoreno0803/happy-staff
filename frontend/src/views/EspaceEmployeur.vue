<template>
  <div class="about">
    <div v-for="company in companies" :key="company.id">
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
    console.log("running");
    const response = await axios.get("http://localhost:3000/company");
    console.log(response);
    companies.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getCompany();
});
</script>
