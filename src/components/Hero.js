import React from 'react'

const Hero = ({ children }) => {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Vintage Store</h1>
        <p>Embrace your choices - we do</p>
        {children}
      </div>
    </div>
  )
}

export default Hero
