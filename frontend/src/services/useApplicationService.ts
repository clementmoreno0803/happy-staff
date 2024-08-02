import { Application } from "@/models/Application";
import axios from "axios";

export const useApplicationService = () => {
  const getApplicationArray = async () => {
    try {
      const response = await axios.get("http://localhost:3000/applications");
      console.log(response.data, "RESPONSE");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const createNewApplication = async (applicationData: Application) => {
    try {
      const newApplication = await axios.post(
        "http://localhost:3000/applications",
        applicationData
      );
      return newApplication.data;
    } catch (e) {
      console.log(e);
    }
  };
  return { getApplicationArray, createNewApplication };
};
