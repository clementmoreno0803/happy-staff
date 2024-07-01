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

  const useFormulairePP = async (ppData: User) => {
    try {
      console.log(ppData);
      await axios.post("http://localhost:3000/user", ppData);
      console.log(`message bien envoyé avec ${ppData}`);
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

  const useLoginService = async (login: Login) => {
    try {
      console.log(login);
      await axios.post("http://localhost:3000/user/login", login);
      console.log(`message bien envoyé avec ${login}`, "useLogin");
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
