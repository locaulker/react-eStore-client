// cart context
import React from 'react'
import localCart from '../utils/localCart'
import { formatter } from '../utils/currencyFormatter'


const CartContext = React.createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState(localCart)
  const [total, setTotal] = React.useState(0)
  const [cartItems, setCartItems] = React.useState(0)

  React.useEffect(() => {
    // local storage

    // Total Cart Items
    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount)
    }, 0)
    setCartItems(newCartItems)

    // Total Cart Purchase
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price)
    }, 0)

    // newTotal = parseFloat(newTotal.toFixed(2))
    newTotal = formatter.format(newTotal)
    setTotal(newTotal)

  }, [cart])

  // remove item
  const removeItem = (id) => {
    let newCart = ([...cart].filter(item => item.id !== id))
    setCart(newCart)

    // Alternatively -- you could write the above line as such:
    // setCart([...cart].filter((item) => item.id !== id))
  }

  // increase amount
  const increaseAmount = (id) => { }

  // decrease amount
  const decreaseAmount = (id) => { }

  // add to cart
  const addToCart = (product) => { }

  // clear cart
  const clearCart = () => { }


  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart
      }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }