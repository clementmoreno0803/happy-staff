<template>
  <Form @submit="useEnregistrementPersonneMorale(companyData)">
    <legend for="company-name">Raison Sociale</legend>
    <Field
      type="text"
      v-model="companyData.company_name"
      id="company-name"
      name="company-name"
    ></Field>
    <legend for="numero-siret">Numero de Siret</legend>
    <Field
      type="text"
      v-model="companyData.numero_siret"
      id="numero-siret"
      name="numero-siret"
    ></Field>
    <legend for="website">Site web</legend>
    <Field
      type="text"
      v-model="companyData.website"
      id="website"
      name="website"
    ></Field>
    <legend for="description">Description</legend>
    <Field
      type="text"
      v-model="companyData.description"
      id="description"
      name="description"
    ></Field>
    <legend for="adresse">Adresse</legend>
    <Field
      type="text"
      v-model="companyData.adresse"
      id="adresse"
      name="adresse"
    ></Field>
    <legend for="codePostal">Code postal</legend>
    <Field
      type="text"
      v-model="companyData.codePostal"
      id="codePostal"
      name="codePostal"
    ></Field>
    <legend for="ville">Ville</legend>
    <Field
      type="text"
      v-model="companyData.ville"
      id="ville"
      name="ville"
    ></Field>
    <legend for="email">Email</legend>
    <Field
      type="text"
      v-model="companyData.email"
      id="email"
      name="email"
    ></Field>
    <legend for="password">Mot de passe</legend>
    <Field
      type="text"
      v-model="companyData.password"
      id="password"
      name="password"
    ></Field>
    <button type="submit">M'enregisrer</button>
  </Form>
</template>

<script setup lang="ts">
import { Employeur } from "@/models/Employeur";
import { Form, Field, ErrorMessage } from "vee-validate";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useFormulaireEnregistrement } from "@/composables/UseFormulaireEnregistrement";

const { useEnregistrementPersonneMorale } = useFormulaireEnregistrement();

const companyData = ref<Employeur>({
  id: uuidv4(),
  company_name: "",
  numero_siret: "",
  description: "",
  adresse: "",
  website: "",
  code_postal: "",
  ville: "",
  email: "",
  password: "",
});
</script>

<style lang="scss" scoped>
Form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>
