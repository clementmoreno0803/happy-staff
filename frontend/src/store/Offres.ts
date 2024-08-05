import { JobOffer } from "@/models/JobOffer";
import { Offers } from "@/models/Offers";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const OffreStore = defineStore("offreStore", () => {
  const offres = ref<Offers[]>([]);

  const offresSize = computed(() => offres.value.length);

  const updateOffres = (newOffre: Offers) => {
    offres.value.push(newOffre);
  };

  return { offres, updateOffres, offresSize };
});
