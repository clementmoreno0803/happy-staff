<template>
  <div class="offre-header__container">
    <BasicInfoCard>
      <template #title>
        <h2>Toute les offres</h2>
      </template>
      <template #content>{{ offresSize }}</template>
    </BasicInfoCard>
    <BasicInfoCard>
      <template #title>
        <h2>Ajoutez une offre d’emploi</h2>
      </template>
      <template #content
        ><p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam.
        </p></template
      >
      <template #action-btn
        ><button @click="addOffre()" class="offre-header__action-btn">
          +
        </button></template
      >
    </BasicInfoCard>
    <Teleport to="body">
      <offreModal v-if="!user && openModal" @close-modal="closeModal" />
    </Teleport>
    <Teleport to="body">
      <offreCreation v-if="user && openModal" @close-modal="closeModal" />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import BasicInfoCard from "@/commun/basic-info-card.vue";
import { OffreStore } from "@/store/Offres";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import offreModal from "./offre-modal.vue";
import offreCreation from "./offre-creation.vue";

const offreStore = OffreStore();
const { offresSize } = storeToRefs(offreStore);
const openModal = ref(false);

const user = sessionStorage.getItem("user");
const addOffre = () => {
  openModal.value = true;
};
const closeModal = () => {
  openModal.value = false;
};

import { onMounted } from "vue";
import { useFormulaireCreationOffre } from "@/composables/UseOffers";

const { AllOffersArray } = useFormulaireCreationOffre();

onMounted(() => AllOffersArray);
</script>
<style lang="scss" scoped>
h2 {
  font-family: $poppins;
  font-size: $sm;
  color: $grey;
  text-align: left;
}
.offre-header {
  &__container {
    display: flex;
    justify-content: space-evenly;
  }
  &__action-btn {
    position: absolute;
    background: $black;
    color: $white;
    font-weight: $bold;
    border: none;
    border-radius: 4px;
    font-size: $sm;
    padding: 0.5rem 0.75rem;
    bottom: 15px;
    right: 15px;
    cursor: pointer;
  }
}
</style>
