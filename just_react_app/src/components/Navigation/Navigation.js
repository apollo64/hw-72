
import React from 'react';
import './Navigation.css';

const Navigation =()=>{
    return (

        <header className='head'>
        <div className='logoName'>
            <h1>Contacts</h1>
        </div>
        <nav className='navigation'>
            <button className='AddContact'>Add New Contact</button>
        </nav>
        </header>
        )
}

export default Navigation;
