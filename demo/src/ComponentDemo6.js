import React from 'react';

function ComponentDemo6(props) {
    console.log(props);
    return(
        <div>
            ComponentDemo6
            <button onClick={() => {props.change({name: "cdd", age: 24})}}>点击</button>
        </div>     
    );
}

export default ComponentDemo6;