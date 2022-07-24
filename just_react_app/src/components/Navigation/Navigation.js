
import React from 'react';
import './Navigation.css';

const Navigation =()=>{
    return (

        <header className='head'>
        <div className='logoName'>
            <h1>Turtle Pizza Admin</h1>
        </div>
        <nav className='navigation'>
            <button className='navButton'>Dishes</button>
            <button className='navButton'>Orders</button>
        </nav>
        </header>
        )
}

export default Navigation;
