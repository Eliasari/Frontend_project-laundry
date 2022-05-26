import React from 'react'
import Admin from './Admin';
import Kasir from './Kasir'

function Role() {
    const selectedRole = localStorage.getItem('role');
    if(selectedRole !== 'kasir' || selectedRole !== 'owner') {
        <Admin />
    } else if(selectedRole !== 'admin' || selectedRole !== 'owner') {
        <Kasir />
    } else {
        <Owner />
    }
}

export default Role