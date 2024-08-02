import { JobOffer } from "@/models/JobOffer";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const OffreStore = defineStore("offreStore", () => {
  const offres = ref<JobOffer[]>([]);

  const offresSize = computed(() => offres.value.length);

  const updateOffres = (newOffre: JobOffer) => {
    offres.value.push(newOffre);
  };

  return { offres, updateOffres, offresSize };
});
