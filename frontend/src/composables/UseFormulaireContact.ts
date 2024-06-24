import { FormData } from "@/models/FormData";
import { useFormulaireService } from "@/services/useFormulaireService";
export const UseFormulaireContact = () => {
  const { sendFormulaireToApi } = useFormulaireService();

  const sendFormulaireContact = async (formdata: FormData) => {
    await sendFormulaireToApi(formdata);
  };
  return { sendFormulaireContact };
};
