import React from 'react';
import Watch from '../watch/Watch';


const DeviceDetails = (props) => {
    console.log(props)
    return (
        <div>
            <p>Information about your Device: {props.price}</p>
          
        </div>
    );
};

export default DeviceDetails;