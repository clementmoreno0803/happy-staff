import { offresDtoToOffres } from "@/mappers/OffresDtoToOffre";
import { JobOffer } from "@/models/JobOffer";
import axios from "axios";

export const useOfferService = () => {
  const createOffer = async (jobOffer: JobOffer) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/jobOffer",
        jobOffer
      );
      return response.data
        ? response.data.map((resp: JobOffer) => offresDtoToOffres(resp))
        : [];
    } catch (error) {
      console.log(error);
    }
  };
  const getAllOffers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/jobOffer");
      return response.data
        ? response.data.map((resp: JobOffer) => offresDtoToOffres(resp))
        : [];
    } catch (error) {
      console.log(error);
    }
  };

  return { createOffer, getAllOffers };
};
