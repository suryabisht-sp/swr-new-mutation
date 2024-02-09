"use client"

import { useEffect, useState } from "react"

const OldWay = () => {
  const [data, setData] = useState()
  
  useEffect(() => {
    fetch('http://localhost:8080/posts').then((res) => res.json()).then((data) => setData(data));
  },[])
  if (!data) {
  return <div>Loading......</div>
}

  console.log("data", data)
  return (
    <div>
      <h1>OldWay</h1>
      {data && data?.map((item, index) => {
        return <div key={index}><h2>{item?.id } {item.title}</h2>
        
        </div>
      })}

    </div>
  )
}

export default OldWay