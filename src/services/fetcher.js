// fetcher.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://render-backend-swr.onrender.com"
});

const fetcher = (url) => {
  return axiosInstance.get(url).then((res) => res.data);
};

export default fetcher;
