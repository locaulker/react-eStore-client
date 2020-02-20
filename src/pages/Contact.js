import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className="section">
      <h1 className="section-title">Contact Us</h1>
      <div className="error-container">
        <Link to="/" className="btn btn-primary">
          back home
      </Link>
      </div>
    </section>
  )
}

export default Contact
