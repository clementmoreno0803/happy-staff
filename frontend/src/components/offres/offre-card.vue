<template>
  <div>
    <basicInfoCard v-for="offre in getAllOffersArray()" :key="offre.id">
      <template #title>{{ offre.title }}</template>
      <template #content>
        <h2>{{ offre.description }}</h2>
        <h2>{{ offre.localisation }}</h2>
        <h2>{{ offre.requirements }}</h2>
        <h2>{{ offre.salary }}</h2>
      </template>
    </basicInfoCard>
  </div>
</template>

<script setup lang="ts">
import basicInfoCard from "@/commun/basic-info-card.vue";
import { useFormulaireCreationOffre } from "@/composables/UseOffers";
import { onMounted } from "vue";
const { getAllOffersArray } = useFormulaireCreationOffre();

onMounted(() => {
  getAllOffersArray();
});
</script>

<style scoped></style>
