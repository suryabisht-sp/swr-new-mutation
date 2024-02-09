"use client"

import { useCart, useUser } from '@/services/queries'
import React from 'react'

const Cart = () => {
  const {data, isLoading} = useUser()
  const cartQuery = useCart()
  console.log("data", data)
  return (
    <div>
      <h1>Cart</h1>
      <h4>Username: {isLoading? "loading..." : data? data?.userName: "" }</h4>
      {cartQuery?.data? cartQuery?.data?.totalCost: cartQuery?.isLoading ? "Loading...": " User Not Logged in"}</div>
  )
}

export default Cart