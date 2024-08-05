import { JobOffer } from "@/models/JobOffer";
import { Offers } from "@/models/Offers";

export const offresDtoToOffres = (offresDto: JobOffer): Offers => {
  return {
    id: offresDto.job_id,
    profession: offresDto.title,
    description: offresDto.description,
    horaires: offresDto.requirements,
    localisation: offresDto.localisation,
    salaire: `${offresDto.salary} €`,
  };
};
