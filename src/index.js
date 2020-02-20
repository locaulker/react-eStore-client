import React from "react"
import ReactDOM from "react-dom"

import ProductProvider from './context/productsContext'
import { CartProvider } from './context/cartContext'

import "./index.css"
import App from "./App"
import Cart from './pages/Cart'

ReactDOM.render(

  <ProductProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductProvider>,

  document.getElementById("root")
)
