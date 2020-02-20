import React from "react"
import ReactDOM from "react-dom"

import ProductProvider from './context/productsContext'

import "./index.css"
import App from "./App"

ReactDOM.render(

  <ProductProvider>
    <App />
  </ProductProvider>,

  document.getElementById("root")
)
