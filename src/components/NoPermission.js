import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const NoPermission = () => {
  return (
    <div>
        Maaf anda tidak mempunyai hak akses ke halaman ini  
        <div>
        <Link to="/" className="btn btn-primary">Kembali ke home</Link>
        </div>
    </div>
  )
}

export default NoPermission