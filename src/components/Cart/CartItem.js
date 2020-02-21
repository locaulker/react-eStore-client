import React from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { CartContext } from '../../context/cartContext'

const CartItem = ({ id, image, title, price, amount: qty }) => {
  // cart Context
  const { removeItem } = React.useContext(CartContext)

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
            console.log('qty increased')
          }}
        ><FaAngleUp />
        </button>

        <p className="item-amount">{qty}</p>

        <button
          className="cart-btn amount-btn"
          onClick={() => {
            console.log('qty decreased')
          }}
        ><FaAngleDown />
        </button>
      </div>

    </article>
  )
}

export default CartItem
