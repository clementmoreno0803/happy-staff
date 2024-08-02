import { Application } from "@/models/Application";
import { useApplicationService } from "@/services/useApplicationService";
import { ApplicationStore } from "@/store/Applications";
import { OffreStore } from "@/store/Offres";
import { storeToRefs } from "pinia";

export const useApplication = () => {
  const { getApplicationArray, createNewApplication } = useApplicationService();
  const { applications } = storeToRefs(ApplicationStore());
  const { offres } = OffreStore();

  const getAllApplication = async () => {
    const applicationArray = await getApplicationArray();
    applications.value = [...applicationArray];
  };

  const createApplication = async (applicationData: Application) => {
    await createNewApplication(applicationData);
  };

  const getUserApplication = () => {
    const userId = sessionStorage.getItem("user");
    const userApplications = applications.value.filter(
      (app) => app.user_id === userId
    );
    const userJobIds = userApplications.map((app) => app.job_id);
    const userRelatedJobs = offres.filter((job) =>
      userJobIds.includes(job.job_id)
    );
    return userRelatedJobs;
  };
  return { getAllApplication, createApplication, getUserApplication };
};
