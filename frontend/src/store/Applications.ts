import { Application } from "@/models/Application";
import { defineStore } from "pinia";
import { ref } from "vue";

export const ApplicationStore = defineStore("applicationStore", () => {
  const applications = ref<Application[]>([]);

  return { applications };
});
