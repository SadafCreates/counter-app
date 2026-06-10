import { useState } from 'react';
import './counter.css';
import Button from './components/Button';

 function Counter(){
const [count , setCount] = useState(0);

function incrementHandler(){
    setCount(count + 1);
};


return(
    <>
    <div className="content">
    <h1>Counter App</h1>
    <h2>{count}</h2>
    <Button label ='increment' onClick={incrementHandler} />
    </div>
    </>
)
}

export default Counter;