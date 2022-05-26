import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        Error Not Found
        <Link to="/" className="btn btn-primary">Silakan ke Home</Link>
    </div>
  )
}

export default Error