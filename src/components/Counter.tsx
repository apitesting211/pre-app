import { useState } from "react";

const Counter = (()=>{
    //let counterValue = 10;

const [counterValue,setCounterValue] = useState(0);

const IncrementValue = ()=> {
    //counterValue++;
    setCounterValue(counterValue + 1);
};
const DecrementValue = () => {
    setCounterValue(counterValue - 1);
}
const ResetValue = () => {
    setCounterValue(0);
}

    return <section className="m-5 p-5">
        <h1>Counter Component</h1>        
        <p className="text-4xl m-2 p-2">{counterValue}</p>
        <div className="flex gap-5 justify-center">        
        <button onClick={DecrementValue} className='bg-orange-500'>- Decrement</button>
        <button onClick={IncrementValue} className='bg-green-500'>+ Increment</button>
        </div>
        <br/>
        <div className="flex gap-5 justify-center text-white">
        <button onClick={ResetValue} className='bg-gray-500'>Reset</button>
        </div>
        
        
    </section>
})

export default Counter;