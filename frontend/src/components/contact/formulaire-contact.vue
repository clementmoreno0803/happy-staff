<template>
  <Form @submit="sendFormulaireContact(formData)">
    <div class="formulaire-contact">
      <!-- Profession -->
      <legend>
        <span class="formulaire-contact__topic-number">01.</span>Dans quel type
        de poste vous sentez-vous le plus à l’aise ?
      </legend>
      <div class="formulaire-contact__radio-button">
        <div
          class="formulaire-contact__radio-button__item"
          v-for="option in selectOption"
          :key="option.value"
          :class="{ checked: formData.poste === option.value }"
        >
          <Field
            type="radio"
            :id="option.value"
            :value="option.value"
            v-model="formData.poste"
            :class="{ checked: formData.poste === option.value }"
            :name="option.value"
          />
          <label :for="option.value">{{ option.value }}</label>
        </div>
        <ErrorMessage name="poste" />
      </div>
      <!-- Nom -->
      <legend>
        <span class="formulaire-contact__topic-number">02. </span>Quel est votre
        nom ?
      </legend>
      <Field
        type="text"
        name="name"
        id="name"
        rules="required"
        v-model="formData.name"
      />
      <ErrorMessage name="name" />

      <!-- Email -->
      <legend>
        <span class="formulaire-contact__topic-number">03. </span>Quel est votre
        email ?
      </legend>
      <Field
        type="text"
        name="email"
        id="email"
        v-model="formData.email"
        rules="required|email"
      />
      <ErrorMessage name="email" />
      <!-- numero de telephone -->
      <legend>
        <span class="formulaire-contact__topic-number">04. </span>Quel est votre
        numéro de téléphone ?
      </legend>
      <Field
        type="text"
        id="tel"
        name="tel"
        v-model="formData.tel"
        rules="required|tel"
      />
      <ErrorMessage name="tel" />

      <!-- numero de telephone -->
      <legend>
        <span class="formulaire-contact__topic-number">04. </span>Quel sont vos
        disponibilités pour une première discussion ?
      </legend>
      <Field
        type="datetime-local"
        name="meeting"
        id="meeting"
        class="formulaire-contact__datetime-local"
        v-model="formData.meeting"
        rules="required"
      />
      <ErrorMessage name="meeting" />

      <!-- préférence de communication -->
      <legend>
        <span class="formulaire-contact__topic-number">04. </span>Vous êtes
        plutôt email ou téléphone ?
      </legend>
      <label
        for="preference"
        class="switch-label"
        :class="{ notChecked: formData.preference === false }"
      >
        <span class="switch-switch">Téléphone</span>
      </label>
      <Field
        type="checkbox"
        name="preference"
        id="preference"
        v-model="formData.preference"
      />
      <label
        for="preference"
        class="switch-label"
        :class="{ isChecked: formData.preference }"
      >
        <span class="switch-switch">Email</span>
      </label>
      {{ formData }}
      <button type="submit">Envoyer</button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import { FormData } from "@/models/FormData";
import { defineRule } from "vee-validate";
import { UseFormulaireContact } from "@/composables/UseFormulaireContact";
import { SelectOption } from "@/models/selectOption";

const { sendFormulaireContact } = UseFormulaireContact();

defineRule("required", (value: string) => {
  if (!value || !value.length) {
    return "This field is required";
  }
  return true;
});
defineRule("email", (value: string) => {
  console.log(value, "email");

  // Field is empty, should pass
  if (!value || !value.length) {
    return true;
  }
  // Check if email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "This field must be a valid email";
  }
  return true;
});
defineRule("tel", (value: string) => {
  if (!value || !value.length) {
    return true;
  }
  if (!/^(0[67]\d{8}|(\+33)[67]\d{8})$/.test(value)) {
    return "Votre numéro de téléphone doit commencer par 06, 07 ou +33";
  }
  return true;
});

const formData = ref<FormData>({
  poste: "",
  email: "",
  name: "",
  tel: "",
  meeting: "",
  preference: true,
});

const selectOption = ref<SelectOption[]>([
  { value: "serveur.se", optionName: "serveur.se" },
  { value: "runner", optionName: "runner" },
  { value: "mixologue", optionName: "mixologue" },
  { value: "chef.fe de salle", optionName: "chef.fe de salle" },
  { value: "commit de cuisine", optionName: "commit de cuisine" },
]);
</script>

<style lang="scss" scoped>
.formulaire-contact {
  // display: flex;
  // justify-content: center;
  // gap: $sm;
  input[type="text"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-bottom: 1px solid #ccc;
    border-top: none;
    border-left: none;
    border-right: none;
    padding: 10px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s, box-shadow 0.3s;
    &:focus,
    &:hover {
      border-color: #007bff;
    }
  }
  &__topic-number {
    font-size: $l;
    font-weight: $bold;
    font-family: $poppins;
  }
  &__radio-button {
    display: flex;
    width: 50vw;
    margin: 0 auto;
    justify-content: space-between;
    &__item {
      display: flex;
      margin-top: $sm;
      position: relative;
      width: fit-content;
      border-radius: $m;
      padding: 0.5 * $xs $sm;
      border: 1px solid;
      transition: background-color 0.3s ease;
      &:hover {
        width: fit-content;
        transition: background-color 0.3s ease;
        background-color: $black;
        color: $white;
        border-radius: $m;
        padding: 0.5 * $xs $sm;
        border: 1px solid;
      }
      & label {
        cursor: pointer;
      }
      &.checked {
        transition: background-color 0.3s ease;
        background: $black;
        color: $white;
      }
      input[type="radio"] {
        display: none;
      }
    }
  }
  .notChecked {
    color: green;
  }
  .isChecked {
    color: red;
  }
  // &::-webkit-calendar-picker-indicator {
  //   background: url('data:image/svg+xml;charset=US-ASCII,<svg%20xmlns%3D"http%3A//www.w3.org/2000/svg"%20viewBox%3D"0%200%2044%2044"%3E<path%20fill%3D"%23007bff"%20d%3D"M22%2044c12.15%200%2022-9.85%2022-22S34.15%200%2022%200%200%209.85%200%2022s9.85%2022%2022%2022zm0-40C32.05%204%2040%2011.95%2040%2022S32.05%2040%2022%2040%204%2032.05%204%2022%2011.95%204%2022%204zm2%2010h-4v8H12v4h8v8h4v-8h8v-4h-8z"/%3E</svg>')
  //     no-repeat right center;
  //   opacity: 0.5;
  //   pointer-events: none;
  // }
}
</style>
