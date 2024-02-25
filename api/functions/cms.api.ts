import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";

export const fetchAboutUs = async () => {
  try {
    const res = await ApiRequest.get(endpoints.cms.about);
    return res;
  } catch (error) {
    return error;
  }
};

// Faq
export const faqQuery =  () => {
  try {
  const res =  ApiRequest.get(endpoints.cms.faq);

  return res;
} catch (error) {
  return error;
}
};




