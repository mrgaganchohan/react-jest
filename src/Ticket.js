import React, { useState } from 'react';



export default function Ticket(props) {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count => count + 1);
    };

    return (
        <div>
            <h2 className ="title">{props.name}</h2>      
            <button onClick = {increment} style={{ margin: '50px', fontSize: '22px'}}>add</button>
            <h2 className = "total testing-scene">{count}</h2>  
        </div>
    )
}
