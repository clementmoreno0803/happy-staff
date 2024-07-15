<template>
  <div>
    <Form @submit="useUserLogin(loginVerification)">
      <legend for="Email">Adresse Mail :</legend>
      <Field
        type="text"
        v-model="loginVerification.email"
        name="email"
        id="Email"
        required
      />
      <legend for="Password">Mot de passe :</legend>
      <Field
        type="password"
        v-model="loginVerification.password"
        name="password"
        id="Password"
        required
      />
      <button type="submit">Se connecter</button>
    </Form>
    {{ loginVerification }}
  </div>
</template>

<script setup lang="ts">
import { useLogin } from "@/composables/UseLogin";
import { Form, Field, ErrorMessage } from "vee-validate";
import { ref } from "vue";

const { useUserLogin } = useLogin();
const loginVerification = ref({ email: "", password: "" });
</script>

<style scoped>
legend {
  text-align: left;
}
input {
  min-width: 100%;
  text-align: left;
}
</style>
