import React from 'react'
import { useParams } from 'react-router-dom'


const ProductDetails = () => {
  const { id } = useParams()
  return (
    <div>
      Hello from Product Details Page = {id}
    </div>
  )
}

export default ProductDetails
