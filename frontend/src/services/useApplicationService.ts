import { Application } from "@/models/Application";
import axios from "axios";

export const useApplicationService = () => {
  const getApplicationArray = async () => {
    try {
      const response = await axios.get("http://localhost:3000/applications");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const createNewApplication = async (applicationData: Application) => {
    try {
      await axios.post("http://localhost:3000/applications", applicationData);
    } catch (e) {
      console.log(e);
    }
  };
  return { getApplicationArray, createNewApplication };
};
