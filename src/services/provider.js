"use client"

import {SWRConfig} from "swr"
import fetcher from "./fetcher"

const Providers = ({ children }) => {
  return (
    <SWRConfig value={{fetcher, revalidateIfStale: true, revalidateOnFocus: true,}}>
      {children}
    </SWRConfig>
  )
}

export default Providers