import useSWR from "swr"
import useSWRInfinite from "swr/infinite";

export const useUser = () => {
  return useSWR('/user')
}

export const useCart = () => {
  const {data} = useUser()
  return   useSWR(data ? '/cart': null)   
}


export const useProduct= () => {
 return  useSWR('/products')   
}


export const usePost = (pageIndex) => {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `/posts?_page=${pageIndex + 1}&_limit=3`;
  };
  //  return  useSWR('/posts')
return useSWRInfinite(getKey)  
}
