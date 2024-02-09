"use client"
import React, { useState } from 'react'
import { useProduct } from '@/services/queries'
import { axiosInstance } from '@/services/fetcher'
import { useCreateProduct } from '@/services/UseMutation'

const Products = () => {
  const { data, isValidating } = useProduct()
  const [inputValue, setInputValue] = useState("")
  const {isMutating, trigger}=useCreateProduct()

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleCreate = async () => {
    // await axiosInstance.post('/products', { title: inputValue })
    // mutate()
    setInputValue("") // Clear the input field after creating the product
    //if you want to display the recent added data it will be done by adding a object qith optimisticdata: data
    // suppose cache is updated but server is not then use rollbackonError
    trigger({ title: inputValue }, {
      optimisticData: data && [...data, { title: `${inputValue}(optimistic data)` }],
      rollbackOnError: true
    
    })
  }

  return (
    <div>
      <h3>Products</h3>
      <input placeholder='Create Product' value={inputValue} onChange={(e) => handleInput(e)} />
      <button style={{width:"25%"}} onClick={handleCreate} disabled={isValidating || isMutating}> {isValidating ? "Creating...": "Create"}</button>
      <h5>{data?.map((item, index) =>      
        <p key={index}>{item?.title}<br /></p>)}</h5>
    </div>
  )
}

export default Products
