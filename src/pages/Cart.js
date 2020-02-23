import React from 'react'
import { CartContext } from '../context/cartContext'
import { UserContext } from '../context/userContext'
import EmptyCart from '../components/Cart/EmptyCart'
import CartItem from '../components/Cart/CartItem'
import { Link } from 'react-router-dom'

// import { UserContext } from '../context/userContext'

const Cart = () => {

  const { cart, total } = React.useContext(CartContext)
  const { user } = React.useContext(UserContext)

  if (cart.length === 0) {
    return (
      <EmptyCart />
    )
  }

  return (
    <section className="cart-items section">

      {/* Cart Title */}
      <h2>Your Cart</h2>

      {/* loop through Cart Items */}
      {cart.map(item => {
        return (
          <CartItem key={item.id} {...item} />
        )
      })}

      {/* Cart Totals */}
      <h2>Total: {total}</h2>

      {/* Ternary Operator */}
      {user.token
        ? <Link to="/checkout" className="btn brn-primary btn-block">Checkout</Link>
        : <Link to="/login" className="btn brn-primary btn-block">Please Login</Link>
      }

    </section>
  )
}

export default Cart
