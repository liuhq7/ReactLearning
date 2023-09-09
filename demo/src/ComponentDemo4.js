import React from 'react';
import ComponentDemo5 from './ComponentDemo5';

function ComponentDemo4(props) {
    console.log(props);
    return(
        <div>
            ComponentDemo4
            <ComponentDemo5 {...props}/>
        </div>     
    );
}

export default ComponentDemo4;