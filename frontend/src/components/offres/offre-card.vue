<template>
  <div>
    <basicInfoCard v-for="offre in offres" :key="offre.job_id">
      <template #title>{{ offre.title }}</template>
      <template #content>
        <h2>{{ offre.description }}</h2>
        <h2>{{ offre.localisation }}</h2>
        <h2>{{ offre.requirements }}</h2>
        <h2>{{ offre.salary }}</h2>
      </template>
      <template #action-btn>
        <button v-if="isParticulier === UserStatutEnum.PARTICULIER">
          Je postule
        </button>
      </template>
    </basicInfoCard>
  </div>
</template>

<script setup lang="ts">
import basicInfoCard from "@/commun/basic-info-card.vue";
import { useFormulaireCreationOffre } from "@/composables/UseOffers";
import { JobOffer } from "@/models/JobOffer";
import { UserStatutEnum } from "@/models/enums/UserStatutEnum";
import { computed, onMounted, ref } from "vue";
const { getAllOffersArray } = useFormulaireCreationOffre();
const isParticulier = sessionStorage.getItem("statut");

const offres = computed(() => getAllOffersArray());

onMounted(() => {
  getAllOffersArray();
});
</script>

<style scoped></style>
