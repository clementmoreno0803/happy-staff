<template>
  <div class="partner-banner__container">
    <h2>Plus de 50 partenaires restaurateurs à nos côtés</h2>
    <div class="partner-banner__partner-list">
      <span id="firstList">{{ listOfPartners }}</span>
      <span id="secondList">{{ listOfPartners }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const parteners = ref([
  "BOUILLON BARATTE",
  "KFC",
  "BISTROT BONNEL",
  "LA VACHE ROUGE",
  "ARCADIUS",
  "BISTROT ORCIA",
  "GRAND CAFE DE LA PREFECTURE",
  "LES FINES GUEULES",
  "MAISON GR",
  "MAISON ROUSSEAU",
  "RESTAURANT BAIES",
  "LE VAL D'ISERE",
  "BRASSERIE FOLLIET",
  "TRAITEUR AU BONHEUR DU JOUR",
]);

const listOfPartners = parteners.value.join(" - ");
</script>
<style lang="scss" scoped>
.partner-banner {
  &__container {
    margin: $xxl 0 0;
    position: relative;
    span {
      font-size: (2 * $m);
      font-weight: $bold;
    }
  }
  &__partner-list {
    #firstList {
      position: relative;
      display: flex;
      width: 500vw;
      animation: 30s linear 0s infinite alternate rightToLeft;
    }
    #secondList {
      position: relative;
      display: flex;
      width: 500vw;
      transform: translateX(-80%);
      animation: 30s linear 0s infinite alternate leftToRight;
    }
  }
}
@keyframes rightToLeft {
  from {
    left: 0;
  }
  to {
    left: -350vw;
  }
}
@keyframes leftToRight {
  from {
    right: 0;
  }
  to {
    right: -350vw;
  }
}
</style>
