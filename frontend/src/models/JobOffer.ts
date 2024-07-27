export interface JobOffer {
  job_id: number;
  title: string;
  description: string;
  requirements: string;
  localisation: string;
  salary: string;
  company_id: string | null;
}
