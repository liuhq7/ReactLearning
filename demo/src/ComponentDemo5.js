import React from 'react';
import ComponentDemo6 from './ComponentDemo6';

function ComponentDemo5(props) {
    console.log(props);
    return(
        <div>
            ComponentDemo5
            <ComponentDemo6 {...props}/>
        </div>     
    );
}

export default ComponentDemo5;