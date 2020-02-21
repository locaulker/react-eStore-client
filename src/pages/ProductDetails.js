import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/productsContext'
import { CartContext } from '../context/cartContext'
import { useHistory } from 'react-router-dom'
import Loading from '../components/Loading'

const ProductDetails = () => {
  const { id } = useParams()
  const history = useHistory()
  const { products } = React.useContext(ProductContext)
  const { addToCart } = React.useContext(CartContext)
  const product = products.find(item => item.id === parseInt(id))

  if (products.length === 0) {
    return <Loading />
  } else {
    const {
      image: { url },
      title,
      price,
      description
    } = product

    return (
      <section className="single-product">
        <img src={url} alt={title} className="single-product-image" />
        <article>
          <h1>{title}</h1>
          <h2>${price}</h2>
          <p>{description}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              // add to cart
              addToCart(product)

              // where you get directed after adding item to the cart
              history.push('/cart')
            }}
          >Add To Cart</button>
        </article>
      </section>
    )
  }
}

export default ProductDetails
