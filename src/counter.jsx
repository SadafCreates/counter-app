import { useState } from 'react';
import './counter.css';

 function Counter(){
const [count , setCount] = useState(0);

function increment(){
    setCount(count + 1);
};
return(
    <>
    <div className="content">
    <h1>Counter App</h1>
    <h2>{count}</h2>
    <button onClick={increment}>Increment</button>
    </div>
    </>
)
}

export default Counter;