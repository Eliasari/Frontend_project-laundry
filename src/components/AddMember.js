import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddMember = () => {

    const [nama, setNama] = useState();
    const [alamat, setAlamat] = useState('');
    const [jenis_kelamin, setJenis_kelamin] = useState('');
    const selectedRole = localStorage.getItem('role')
    const role = () => {
        if (selectedRole === 'admin' || selectedRole === 'kasir') {
            
        } else {
            history('/norole')
        }
    }

    const history = useNavigate();
    useEffect(() => {
        role();
    })

    // console.log(jenis);
    const saveMember = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/member', {
            nama: nama,
            alamat: alamat,
            jenis_kelamin: jenis_kelamin
        });
        history('/member');
    }
  return (
    <div>
        <form onSubmit={ saveMember }>
        <div className="mb-2">
                <label>Nama Member</label>
                <input 
                    type="text" 
                    name="nama" 
                    placeholder="Nama Member" 
                    className="form-control"
                    value={nama} 
                    onChange={ (e) => setNama(e.target.value) }
                />
            </div>
            <div className="mb-2">
                <label>Alamat</label>
                <input 
                    type="text" 
                    name="alamat" 
                    placeholder="Alamat Member" 
                    className="form-control"
                    value={alamat} 
                    onChange={ (e) => setAlamat(e.target.value) }
                />
            </div>
            <form onSubmit={ saveMember }>
            <div className="mb-2">
                <label>Jenis Kelamin</label>
                <select 
                name="jenis_kelamin" 
                value={jenis_kelamin} 
                onChange={ (e) => setJenis_kelamin(e.target.value) }
                className="form-control"
                >
                   <option value="Laki">Laki-Laki</option>
                   <option value="Perempuan">Perempuan</option>
                </select>
            </div>
        </form>
            <div className="mb-2">
                <button className='btn btn-primary'>Submit</button>
            </div>
        </form>
        {/* {jenis} */}
    </div>
  )
}

export default AddMember