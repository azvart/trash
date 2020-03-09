import React from 'react';
import Navigation from './Navigation/navigation';
import Logo from './Logo/logo';
import Contacts from './Contacts/contacts';

const Header = (props) => {
    return(
         <div className='row'>
            <div className='col-sm-4'>
                <Logo />
            </div>
            <div className='col-sm-4'>
                <Navigation />
            </div>
            <div className='col-sm-4'>
                <Contacts phone={props.phone} />
            </div>
         </div>
    )
}


export default Header;