<template>
  <div>
    <basicPresentation :backgroundUrl="Restaurant">
      <template #content>
        <basicForm>
          <template #title>
            <h2>Bienvenue chez Happy Staff :</h2>
          </template>
          <template #form>
            <button
              v-for="(_, tab) in tabs"
              :key="tab"
              :class="{ active: currentFormulaire === tab }"
              @click="currentFormulaire = tab"
            >
              {{ tab }}
            </button>
            <component :is="tabs[currentFormulaire]"></component>
          </template>
        </basicForm>
      </template>
    </basicPresentation>
  </div>
</template>

<script setup lang="ts">
import personneMorale from "@/components/enregistrement/enregistrement-personne-morale.vue";
import personnePhysique from "@/components/enregistrement/enregistrement-personne-physique.vue";
import basicPresentation from "@/commun/basic-presentation.vue";
import Restaurant from "@/assets/background-image/restaurant.jpg";
import { ref } from "vue";
import basicForm from "@/commun/basic-form.vue";

const tabs = {
  personneMorale,
  personnePhysique,
};
const currentFormulaire = ref("personneMorale");
</script>

<style lang="scss" scoped>
button {
  background: none;
  border: none;
  cursor: pointer;
  color: $black;
  opacity: 0.6;
}
.active {
  font-size: $sm;
  font-weight: $bold;
  opacity: 1;
}
</style>
