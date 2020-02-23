import React from "react"
import ReactDOM from "react-dom"

import ProductProvider from './context/productsContext'
import { CartProvider } from './context/cartContext'
import { UserProvider } from './context/userContext'

import "./index.css"
import App from "./App"

// import Cart from './pages/Cart'

ReactDOM.render(
  <UserProvider>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </UserProvider>,

  document.getElementById("root")
)
