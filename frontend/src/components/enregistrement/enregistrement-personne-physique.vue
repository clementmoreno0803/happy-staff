<template>
  <Form @submit="useEnregistrementPersonnePhysique(user)">
    <legend for="username">Nom complet</legend>
    <Field
      type="text"
      v-model="user.username"
      id="username"
      name="username"
    ></Field>
    <legend for="profession">Profession</legend>
    <Field
      type="text"
      v-model="user.profession"
      id="profession"
      name="profession"
    ></Field>
    <legend for="experience">experience</legend>
    <Field
      type="text"
      v-model="user.experience"
      id="experience"
      name="experience"
    ></Field>
    <legend for="adresse">Adresse</legend>
    <Field
      type="text"
      v-model="user.adresse"
      id="adresse"
      name="adresse"
    ></Field>
    <legend for="codePostal">Code postal</legend>
    <Field
      type="string"
      v-model="user.codePostal"
      id="codePostal"
      name="codePostal"
    ></Field>
    <legend for="ville">Ville</legend>
    <Field type="string" v-model="user.ville" id="ville" name="ville"></Field>
    <legend for="numeroTel">Téléphone</legend>
    <Field
      type="text"
      v-model="user.numeroTel"
      id="numeroTel"
      name="numeroTel"
    ></Field>
    <span class="enregistrement__separateur"></span>
    <legend for="company-name">Raison Sociale</legend>
    <Field
      type="text"
      v-model="user.company_name"
      id="company-name"
      name="company-name"
    ></Field>
    <legend for="numero-siret">Numero de Siret</legend>
    <Field
      type="text"
      v-model="user.numero_siret"
      id="numero-siret"
      name="numero-siret"
    ></Field>
    <legend for="email">Email</legend>
    <Field type="text" v-model="user.email" id="email" name="email"></Field>
    <legend for="">Mot de Passe</legend>
    <Field
      type="password"
      v-model="user.password"
      id="password"
      name="password"
    ></Field>
    <button type="submit">M'enregisrer</button>
    {{ user }}
  </Form>
</template>

<script setup lang="ts">
import { User } from "@/models/User";
import { Form, Field, ErrorMessage } from "vee-validate";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useFormulaireEnregistrement } from "@/composables/UseFormulaireEnregistrement";

const { useEnregistrementPersonnePhysique } = useFormulaireEnregistrement();

const user = ref<User>({
  user_id: uuidv4(),
  username: "",
  company_name: "",
  numero_siret: "",
  numeroTel: "",
  adresse: "",
  codePostal: "",
  ville: "",
  profession: "",
  experience: "",
  email: "",
  password: "",
});
</script>

<style lang="scss" scoped>
Form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  legend {
    text-align: left;
  }
}
</style>
