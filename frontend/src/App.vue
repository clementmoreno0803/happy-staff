<template>
  <div>
    <Header />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "../src/layout/PageHeader.vue";
import Footer from "@/layout/PageFooter.vue";

import { useFormulaireCreationOffre } from "@/composables/UseOffers";
import { onMounted } from "vue";

const { AllOffersArray } = useFormulaireCreationOffre();

onMounted(() => {
  AllOffersArray();
});
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,700;1,100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap");

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  overflow-x: hidden;
}

.logo {
  height: 50px;
  width: auto;
}
</style>
