import React from 'react'
import { CartContext } from '../context/cartContext'
import { UserContext } from '../context/userContext'
import { useHistory } from 'react-router-dom'
import EmptyCart from '../components/Cart/EmptyCart'

// react-stripe-elements
import submitOrder from '../strapi/submitOrder'

const Checkout = (props) => {

  const { cart, total, clearCart } = React.useContext(CartContext)
  const { user, showAlert, hideAlert, alert } = React.useContext(UserContext)
  const history = useHistory()

  // state values
  const [name, setName] = React.useState('')
  const [error, setError] = React.useState('')
  const isEmpty = !name || alert.show

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  if (cart.length < 1) return <EmptyCart />

  return (
    <section className="section form">
      <h2 className="section-title">Checkout</h2>
      <form className="checkout-form">
        <h3>Order Total: <span>${total}</span></h3>

        {/* Name Input */}
        <div className="form-control">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => {
              setName(e.target.value)
            }}
          />
        </div>

        {/* Card Input */}
        <div className="stripe-input">
          <label htmlFor="card-element">Credit/Debit Card</label>
          <p className="stripe-info">
            Test using this cc number: <span>4242 4242 4242 4242</span>
            <br />
            Enter your 5-digit zip code
            <br />
            Enter your 3-digit CVC code
          </p>
        </div>

        {/* Stripe Element */}

        {/* Stripe Errors */}
        {error && <p className="form-empty">{error}</p>}

        {/* Empty value */}
        {isEmpty
          ? <p className="form-empty">Please fill out form field</p>
          : <button
            type="text"
            onClick={handleSubmit}
            className="btn btn-primary btn-block"
          >Submit</button>
        }
      </form>
    </section>
  )
}

export default Checkout
