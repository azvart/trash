import React from 'react';
import { Tween } from 'react-gsap';


const Navigation = () => {
    return(
        
            <Tween from={{opacity:0,y:-50}}>
            <ul className='nav'>
                <li className='nav-item'>
                    <a className='nav-link' href='home'>Home</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Products</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>FAQ</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#'>Contacts</a>
                </li>
            </ul>
            </Tween>
        
    )
}

export default Navigation;