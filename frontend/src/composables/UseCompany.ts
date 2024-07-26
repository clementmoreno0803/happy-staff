import { useCompaniesService } from "@/services/useCompaniesService";
import { CompanyStore } from "@/store/Company";
import { storeToRefs } from "pinia";

export const useCompany = () => {
  const { getCompany } = useCompaniesService();
  const { setCompany } = CompanyStore();
  const companyStore = CompanyStore();
  const { company } = storeToRefs(companyStore);

  const SetMyCompany = async () => {
    const companiesArray = await getCompany();
    setCompany(companiesArray);
  };
  const getMyCompany = () => company.value;
  return { SetMyCompany, getMyCompany };
};
