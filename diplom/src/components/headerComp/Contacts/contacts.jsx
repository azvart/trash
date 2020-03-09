import React from 'react';
import { Tween } from 'react-gsap';

const Contacts = (props) => {
    
    return(


            <Tween from={{opacity:0,x:30}}>
            <p>+375(29) 613-83-02</p>
            
            </Tween>
        
    )
}

export default Contacts;