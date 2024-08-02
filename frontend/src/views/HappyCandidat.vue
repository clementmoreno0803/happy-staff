<template>
  <div class="about">
    <h2>Mes candidatures</h2>
    <h3>{{ userApplication }}</h3>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useApplication } from "@/composables/UseApplication";
import { useFormulaireCreationOffre } from "@/composables/UseOffers";

const { getUserApplication, getAllApplication } = useApplication();
const { AllOffersArray } = useFormulaireCreationOffre();

const userApplication = computed(() => getUserApplication());

onMounted(() => {
  AllOffersArray();
  getUserApplication();
  getAllApplication();
});
</script>
