import { FormData } from "@/models/FormData";
import { useFormulaireService } from "@/services/useFormulairesService";
export const useFormulaireContact = () => {
  const { sendFormulaireToApi } = useFormulaireService();

  const sendFormulaireContact = async (formdata: FormData) => {
    await sendFormulaireToApi(formdata);
  };
  return { sendFormulaireContact };
};
