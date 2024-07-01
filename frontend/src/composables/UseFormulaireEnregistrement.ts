import { Employeur } from "@/models/Employeur";
import { User } from "@/models/User";
import { useFormulaireService } from "@/services/useFormulairesService";

export const useFormulaireEnregistrement = () => {
  const { useFormulairePP, useFormulairePM } = useFormulaireService();
  const useEnregistrementPersonnePhysique = async (ppData: User) => {
    await useFormulairePP(ppData);
  };
  const useEnregistrementPersonneMorale = async (pmData: Employeur) => {
    await useFormulairePM(pmData);
  };
  return { useEnregistrementPersonnePhysique, useEnregistrementPersonneMorale };
};
