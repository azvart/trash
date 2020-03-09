import React from 'react';

const Card =(props) => {
    return(
        <div className='card text-center mx-3 my-3'>
            <div className='card-body'>
                <h5 className='card-title'>
                    {props.title}
                </h5>
                <p className='card-text'>
                    {props.body}    
                </p>  
            </div>
        </div>
    )
}


export default Card;