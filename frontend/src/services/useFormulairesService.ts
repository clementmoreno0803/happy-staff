import axios from "axios";
import { FormData } from "@/models/FormData";
import { User } from "@/models/User";
import { Employeur } from "@/models/Employeur";
import { Login } from "@/models/Login";

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
    console.log("PM");

    try {
      await axios.post("http://localhost:3000/register/morale", pmData);
      console.log(`message bien envoyé avec ${pmData}`);
    } catch (error) {
      console.log(error);
    }
  };

  const useFormulairePP = async (ppData: User) => {
    console.log("PP");

    try {
      await axios.post("http://localhost:3000/register/physique", ppData);
      console.log(`message bien envoyé avec ${ppData}`);
    } catch (error) {
      console.log(error);
    }
  };

  const useLoginService = async (login: Login) => {
    try {
      const response = await axios.post("http://localhost:3000/login", login);
      const { token, userId, statut } = response.data;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", userId);
      sessionStorage.setItem("statut", statut);
      if (statut === "particulier") {
        window.location.href = `happy-candidat/${userId}`;
      } else {
        window.location.href = `espace-employeur/${userId}`;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const useLogOut = async () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("statut");
    sessionStorage.removeItem("user");
  };

  return {
    sendFormulaireToApi,
    useFormulairePP,
    useFormulairePM,
    useLoginService,
    useLogOut,
  };
};
