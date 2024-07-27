import { Company } from "@/models/Company";
import { defineStore } from "pinia";
import { ref } from "vue";

export const CompanyStore = defineStore("companyStore", () => {
  const company = ref<Company>();

  const setCompany = (myCompany: Company) => {
    company.value = myCompany;
  };

  return { setCompany, company };
});
