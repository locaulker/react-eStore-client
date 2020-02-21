import React from 'react'
import { ProductContext } from '../context/productsContext'
import Loading from '../components/Loading'
import ProductList from '../components/Products/ProductList'

const Products = () => {
  const { loading, products } = React.useContext(ProductContext)


  if (loading) {
    return <Loading />
  }

  return (
    <ProductList title="our products" products={products}>

    </ProductList>
  )
}

export default Products
