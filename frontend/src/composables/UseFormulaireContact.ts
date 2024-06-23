import { FormData } from "@/models/FormData";
export const UseFormulaireContact = () => {
  const sendFormulaireContact = async (formdata: FormData) => {
    console.log(formdata);
    // await useFormulaireService(formdata);
  };
  return { sendFormulaireContact };
};
