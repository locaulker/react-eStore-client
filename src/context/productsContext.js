import React from 'react'
import axios from 'axios'
import url from '../utils/URL'

export const ProductContext = React.createContext()
// React.createContext gives us access to two new components
// Provider, and Consumer, and now useContext instead of Consumer

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false)
  const [products, setProducts] = React.useState([])
  const [featured, setFeatured] = React.useState([])

  React.useEffect(() => {
    setLoading(true)
    axios
      .get(`${url}/products`)
      .then(response => {
        setProducts(response.data)
        setLoading(false)
      })

    return () => { }
  }, [])

  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider