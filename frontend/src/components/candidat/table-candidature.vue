<template>
  <div class="happy-candidat">
    <h2>Mes candidatures</h2>
    <table>
      <thead>
        <tr>
          <th v-for="(value, key) in userApplication[0]" :key="key">
            {{ key }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="application in userApplication" :key="application.id">
          <td v-for="(value, index) in Object.values(application)" :key="index">
            <p :class="{ profession: index === 1 }">{{ value }}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { useApplication } from "@/composables/UseApplication";
const { getUserApplication, getAllApplication } = useApplication();

const userApplication = computed(() => getUserApplication());

onMounted(() => {
  getAllApplication();
  getUserApplication();
});
</script>
<style lang="scss" scoped>
.happy-candidat {
  overflow: hidden;
  table {
    width: 80vw;
    margin: 0 auto;
    border-collapse: collapse;
    th {
      width: calc(100% / 6);
    }
    tbody {
      border-radius: $xs;
      position: relative;
      border: 1px solid $grey;
      background: $white;
      text-overflow: ellipsis;
      border-radius: $m;
      p {
        margin: 0;
      }
      .profession {
        width: fit-content;
        margin: 0 auto;
        border-radius: 5px;
        padding: 5px 20px;
        background-color: rgb(255, 248, 148);
      }
    }
  }
}
</style>
