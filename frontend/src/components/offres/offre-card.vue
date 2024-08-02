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
        <button
          v-if="isParticulier === UserStatutEnum.PARTICULIER"
          @click="
            createApplication({ ...newApplication, job_id: offre.job_id })
          "
        >
          Je postule
        </button>
      </template>
    </basicInfoCard>
  </div>
</template>

<script setup lang="ts">
import basicInfoCard from "@/commun/basic-info-card.vue";
import { useApplication } from "@/composables/UseApplication";
import { useFormulaireCreationOffre } from "@/composables/UseOffers";
import { Application } from "@/models/Application";
import { JobOffer } from "@/models/JobOffer";
import { UserStatutEnum } from "@/models/enums/UserStatutEnum";
import { computed, onMounted, ref } from "vue";
const { getAllOffersArray } = useFormulaireCreationOffre();
const { createApplication } = useApplication();
import { v4 as uuidv4 } from "uuid";

const isParticulier = sessionStorage.getItem("statut");
const offres = computed(() => getAllOffersArray());
const userID: string = sessionStorage.getItem("user");

const newApplication = ref<Application>({
  application_id: uuidv4(),
  user_id: userID,
  job_id: "",
  status: "",
});

onMounted(() => {
  getAllOffersArray();
});
</script>

<style scoped></style>
