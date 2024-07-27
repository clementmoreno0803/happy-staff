import { Application } from "@/models/Application";
import { useApplicationService } from "@/services/useApplicationService";
import { ApplicationStore } from "@/store/Applications";
import { storeToRefs } from "pinia";

export const useApplication = () => {
  const { getApplicationArray, createNewApplication } = useApplicationService();
  const { applications } = storeToRefs(ApplicationStore());

  const getAllApplication = async () => {
    const applicationArray = await getApplicationArray();
    applications.value = [...applicationArray];
  };

  const createApplication = async (applicationData: Application) => {
    await createNewApplication(applicationData);
  };
  return { getAllApplication, createApplication };
};
