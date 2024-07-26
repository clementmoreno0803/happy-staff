<template>
  <div>
    <basicModal @close-modal="$emit('close-modal')">
      <template #title><h2>Veuillez créer une offre</h2></template>
      <template #content>
        <basicForm>
          <template #form>
            <Form @submit.prevent="offerCreation(jobOffer)">
              <legend for="title">Titre du poste</legend>
              <Field
                type="text"
                v-model="jobOffer.title"
                id="title"
                name="title"
              ></Field>
              <legend for="description">Description du poste</legend>
              <Field
                type="text"
                v-model="jobOffer.description"
                id="description"
                name="description"
              ></Field>
              <legend for="horaires">Les horaires</legend>
              <Field
                type="text"
                v-model="jobOffer.requirements"
                id="horaires"
                name="horaires"
              ></Field>
              <legend for="localisation">Où se situe le poste</legend>
              <Field
                type="text"
                v-model="jobOffer.localisation"
                id="localisation"
                name="localisation"
              ></Field>
              <legend for="salary">Quel Salaire ?</legend>
              <Field
                type="text"
                v-model="jobOffer.salary"
                id="salary"
                name="salary"
              ></Field>
            </Form>
          </template>
        </basicForm>
      </template>
      <template #action-btn>
        <button
          type="submit"
          @click="offerCreation(jobOffer)"
          class="basic-modal__home-btn"
        >
          Créer mon offre
        </button></template
      >
    </basicModal>
  </div>
</template>

<script setup lang="ts">
import basicModal from "@/commun/basic-modal.vue";
import basicForm from "@/commun/basic-form.vue";
import { defineEmits, ref } from "vue";
import { Form, Field } from "vee-validate";
import { v4 as uuidv4 } from "uuid";
import { useFormulaireCreationOffre } from "@/composables/UseOffers";
import { JobOffer } from "@/models/JobOffer";

defineEmits(["close-modal"]);
const { offerCreation } = useFormulaireCreationOffre();
const jobOffer = ref<JobOffer>({
  id: uuidv4(),
  title: "",
  description: "",
  requirements: "",
  localisation: "",
  salary: "",
  company_id: sessionStorage.getItem("user"),
});
</script>

<style lang="scss" scoped></style>
