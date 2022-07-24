
import React from 'react';
import './Navigation.css';
import {useNavigate} from 'react-router-dom';


const Navigation =()=>{
    const navigate=useNavigate()
    const goToDishHandler =()=>{
        navigate('/');
    }
    const goToOrderHandler=()=>{
        console.log('go to orders')
    }
    return (

        <header className='head'>
        <div className='logoName'>
            <h1>Turtle Pizza Admin</h1>
        </div>
        <nav className='navigation'>
            <button className='navButton' onClick={goToDishHandler}>Dishes</button>
            <button className='navButton' onClick={goToOrderHandler}>Orders</button>
        </nav>
        </header>
        )
}

export default Navigation;
