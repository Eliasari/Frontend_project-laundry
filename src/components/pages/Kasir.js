import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Kasir = () => {
    const [tgl_awal, setTglAwal] = useState('')
    const [tgl_akhir, setTglAkhir] = useState('')

    return (
<>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="" className="navbar-brand p-2" >Laundry</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/member" className="nav-link" >
                Member
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/transaksi" className="nav-link" >
                Transaksi
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/logout" className="nav-link" >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="modal" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Input Tanggal</h5>
                    </div>
                    <input 
                        type="date" 
                        name="tgl_awal" 
                        className="form-control" 
                        onChange={(e) => setTglAwal(e.target.value)}
                    />
                    <input 
                        type="date" 
                        name="tgl_akhir" 
                        className="form-control"
                        onChange={(e) => setTglAkhir(e.target.value)}
                    />
                    <div className="mb-5"></div>
                    <Link to={`/laporan/${tgl_awal}/${tgl_akhir}`} className="btn btn-primary">General Laporan</Link>
                </div>
            </div>
        </div>
    </>
  )
    }
export default Kasir;