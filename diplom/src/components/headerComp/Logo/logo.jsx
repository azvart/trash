import React from 'react';
import Log from './log.png';
import { Tween } from 'react-gsap';
const Logo = () => {

    return(
        
   
            <Tween from={{opacity:0,x:-100}}>
            <img src={Log} className='img-thumbnail' alt='LOGO' />
            </Tween>
        
        
    )

}


export default Logo;