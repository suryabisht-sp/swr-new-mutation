import { createProduct } from "@/app/api/createProduct"
import { useProduct } from "./queries"
import useSWRMutation from "swr/mutation"
  
export const useCreateProduct = () => {
  const { mutate } = useProduct()
  return useSWRMutation("/products", createProduct, {
    onError(){
      console.log("error")
    },
    onSuccess() {
      mutate()
    }
  })
}

// export const useCreateProduct = () => {
//   const { mutation } = useProduct()
 
//   return useSWRMutation("/products",(url, arg)=> createProduct(url, arg))
  
// }