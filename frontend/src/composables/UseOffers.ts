import { JobOffer } from "@/models/JobOffer";
import { Offers } from "@/models/Offers";
import { useOfferService } from "@/services/UseOffersService";
import { OffreStore } from "@/store/Offres";
import { storeToRefs } from "pinia";

export const useFormulaireCreationOffre = () => {
  const { createOffer, getAllOffers } = useOfferService();
  const offreStore = OffreStore();
  const { updateOffres } = offreStore;
  const { offres } = storeToRefs(offreStore);

  const offerCreation = async (jobOffer: JobOffer) => {
    const newOffer = await createOffer(jobOffer);
    updateOffres(newOffer);
  };
  const AllOffersArray = async () => {
    const AllOffers = await getAllOffers();
    updateOffres(AllOffers);
  };

  const getAllOffersArray = () => {
    return offres.value.flat();
  };

  return {
    offerCreation,
    AllOffersArray,
    getAllOffersArray,
  };
};
