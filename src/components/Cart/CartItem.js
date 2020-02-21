import React from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { CartContext } from '../../context/cartContext'

const CartItem = ({ id, image, title, price, amount: qty }) => {
  // cart Context
  const { removeItem, increaseAmount, decreaseAmount } = React.useContext(CartContext)

  return (
    <article className="cart-item">
      <img src={image} alt={title} />

      <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button
          type="button"
          className="cart-btn remove-btn"
          onClick={() => {
            removeItem(id)
          }}
        >
          remove
        </button>
      </div>

      <div>
        <button
          className="cart-btn amount-btn"
          onClick={() => {
            increaseAmount(id)
          }}
        ><FaAngleUp />
        </button>

        <p className="item-amount">{qty}</p>

        <button
          className="cart-btn amount-btn"
          onClick={() => {
            decreaseAmount(id, qty)
          }}
        ><FaAngleDown />
        </button>
      </div>

    </article>
  )
}

export default CartItem
