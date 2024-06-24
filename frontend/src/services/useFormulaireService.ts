import axios from "axios";
import { FormData } from "@/models/FormData";
export const useFormulaireService = () => {
  const sendFormulaireToApi = async (formdata: FormData) => {
    try {
      console.log(formdata, "formdata");
      await axios.post("http://localhost:3000/send-email", formdata);
      console.log("message bien envoyé");
    } catch (error) {
      console.log(error);
    }
  };
  return { sendFormulaireToApi };
};
