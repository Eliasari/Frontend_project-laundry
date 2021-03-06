import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import AddPaket from "./components/AddPaket";
import EditPaket from './components/EditPaket';
import OutletList from './components/OutletList';
import PaketList from "./components/PaketList";
import AddOutlet from './components/AddOutlet';
import EditOutlet from './components/EditOutlet';
import MemberList from './components/MemberList';
import AddMember from './components/AddMember';
import EditMember from './components/EditMember';
import TransaksiList from './components/TransaksiList';
import TransaksiCariMember from './components/TransaksiCariMember';
import AddTransaksi from './components/AddTransaksi';
import TransaksiKonfirmasi from './components/TransaksiKonfirmasi';
import TransaksiBayar from './components/TransaksiBayar';
import BayarSuccess from './components/BayarSuccess';
import TransaksiUbah from './components/TransaksiUbah';
import Invoice from './components/Invoice';
import Error from './components/Error';
import { useEffect } from 'react';
import Navbar from './components/pages/Navbar';
import Admin from './components/pages/Admin';
import Kasir from './components/pages/Kasir';
import Laporan from './components/Laporan';
import Logout from './components/Logout';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import UserList from './components/UserList';
import Dashboard from './components/Dashboard';
import Owner from './components/pages/Owner';

function Menu() {
    const history = useNavigate();
    useEffect(() => {
        // console.log(localStorage.getItem('isAuth'))
        if (localStorage.getItem('isAuth') !== 'true') {
          history('/login')
        }
    });
    const selectedRole = localStorage.getItem('role')
    const displayData = () => {
      if (selectedRole === 'admin') {
        return <Admin />
      } else if (selectedRole === 'kasir') {
        return <Kasir />
      }
    }
  return (
    <div id="wrapper">
      {/* <Sidebar /> */}
      {selectedRole === "admin" && <Admin/>} 
      {/* ini buat ngatur hak akses ntar featurnya di hidden */}
      {selectedRole === "kasir" && <Kasir/>}
      {selectedRole === "owner" && <Owner/>}
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="container-fluid">
            <Routes>
              <Route path='*' element={<Error />}></Route>
              <Route exact path='/' element={<Dashboard />} />
              <Route path="/logout" element={<Logout />} />
              <Route path='/member' element={<MemberList />}></Route>
              <Route path="/member/add" element={<AddMember />} />
              <Route path="/member/edit/:id_member" element={<EditMember />} />
              <Route path="/paket" element={<PaketList />} />
              <Route path="/paket/add" element={<AddPaket />} />
              <Route path="/paket/edit/:id_paket" element={<EditPaket />} />
              <Route path="/outlet" element={<OutletList />} />
              <Route path="/outlet/add" element={<AddOutlet />} />
              <Route path="/outlet/edit/:id_outlet" element={<EditOutlet />} />
              <Route path="/transaksi" element={<TransaksiList />} />
              <Route path="/transaksi/cari" element={<TransaksiCariMember />} />
              <Route path="/transaksi/add/:member_id" element={<AddTransaksi />} />
              <Route path="/transaksi/konfirmasi" element={<TransaksiKonfirmasi />} />
              <Route path="/transaksi/bayar/:id_transaksi" element={<TransaksiBayar />} />
              <Route path="/transaksi/invoice/page/:id_transaksi" element={<BayarSuccess />} />
              <Route path="/transaksi/ubah/:id_transaksi" element={<TransaksiUbah />} />
              {/* <Route path="/transaksi/detail/:id_transaksi" element={<TransaksiDetail />} /> */}
              <Route path="/laporan" element={<Laporan />} />
              <Route path="/invoice/:id_transaksi" element={<Invoice />} />
              <Route path="/user/add" element={<AddUser />} />
              <Route path="/user/edit/:id_user" element={<EditUser />} />
              <Route path="/user" element={<UserList />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;