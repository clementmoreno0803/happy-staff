import axios from "axios";
import { FormData } from "@/models/FormData";
import { User } from "@/models/User";
import { Employeur } from "@/models/Employeur";
import { Login } from "@/models/Login";
import { RouterLink } from "vue-router";

export const useFormulaireService = () => {
  const sendFormulaireToApi = async (formdata: FormData) => {
    try {
      await axios.post("http://localhost:3000/send-email", formdata);
      console.log("message bien envoyé");
    } catch (error) {
      console.log(error);
    }
  };

  const useFormulairePM = async (pmData: Employeur) => {
    try {
      await axios.post("http://localhost:3000/company", pmData);
      console.log(`message bien envoyé avec ${pmData}`);
    } catch (error) {
      console.log(error);
    }
  };

  const useFormulairePP = async (ppData: User) => {
    try {
      await axios.post("http://localhost:3000/user", ppData);
      console.log(`message bien envoyé avec ${ppData}`);
    } catch (error) {
      console.log(error);
    }
  };

  const useLoginService = async (login: Login) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/login",
        login
      );
      const { token, userId } = response.data;
      localStorage.setItem("token", token);
      window.location.href = `happy-candidat/${userId}`;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    sendFormulaireToApi,
    useFormulairePP,
    useFormulairePM,
    useLoginService,
  };
};
