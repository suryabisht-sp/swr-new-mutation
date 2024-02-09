"use client"
import Posts from "@/component/Post"

export default function Home() {
  return (
    <div>
      Home page
      <br/>
      <hr/>
      <div>
      fetch data without SWR
      <br />
     <button> <a href="/oldway">old</a></button>     
      </div>
      <hr />
      <div>
      fetch and post data with SWR
      <br />
     <button> <a href="/products">SWR</a></button>     
      </div>
      <hr/>
      <Posts/>
   </div>
  )
}
