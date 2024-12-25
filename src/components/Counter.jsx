import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { decrement, increment } from '../redux/actions';

const Counter = () => {
    const count = useSelector((state)=> state.count);
    const dispatch = useDispatch();
  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
        <h1>Counter: {count}</h1>

        <button
        onClick={()=>dispatch(increment())} style={{marginRight:"10px", padding:"10px 20px"}}>
            Increment
        </button>

        <button onClick={()=>dispatch(decrement())}
        style={{padding: "10px 20px"}}>
            Decrement
        </button>

    </div>
  )
}

export default Counter