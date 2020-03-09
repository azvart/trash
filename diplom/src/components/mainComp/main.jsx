import React from 'react';
import Card from './Card/card';

const Main =(props) => {
    let maincard = props.info.map(m=> <Card title={m.title} body={m.body} />)
    return(
        
            <div className='row my-3'>
                <div className='col-sm-6'>
                {maincard}
                </div>
                   
            </div>
        
    )
}

export default Main;