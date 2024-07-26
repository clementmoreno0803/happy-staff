<template>
  <div class="about">
    <h2>{{ getMyCompany() }}</h2>
  </div>
</template>

<script lang="ts" setup>
import { useCompany } from "@/composables/UseCompany";
import { CompanyStore } from "@/store/Company";
import axios from "axios";
import { storeToRefs } from "pinia";
import { computed, onMounted, ref } from "vue";
const { SetMyCompany, getMyCompany } = useCompany();

onMounted(() => SetMyCompany());
</script>
