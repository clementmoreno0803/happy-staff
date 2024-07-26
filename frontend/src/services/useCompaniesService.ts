import axios from "axios";

export const useCompaniesService = () => {
  const getCompany = async () => {
    const companyId = sessionStorage.getItem("user");
    try {
      const response = await axios.get(
        `http://localhost:3000/company/${companyId}`
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };
  return { getCompany };
};
