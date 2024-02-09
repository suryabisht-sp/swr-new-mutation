import { axiosInstance } from "@/services/fetcher"

export const createProduct =async (url, {arg})=>{
  await axiosInstance.post(url, { title: arg.title})
}