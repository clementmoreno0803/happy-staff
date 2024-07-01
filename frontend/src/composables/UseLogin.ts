import { Login } from "@/models/Login";
import { useFormulaireService } from "@/services/useFormulairesService";

export const useLogin = () => {
  const { useLoginService } = useFormulaireService();
  const useUserLogin = async (loginVerification: Login) => {
    await useLoginService(loginVerification);
  };
  return { useUserLogin };
};
