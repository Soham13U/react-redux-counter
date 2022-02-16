import React from 'react'
import "./App.css"
import { useSelector, useDispatch } from 'react-redux'
import { incNumber,decNumber } from './Actions'

const App = () => {
  const myState = useSelector((state)=> state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className='container'>
    <h1>Counter</h1>
    <h2>Increment/Decrement</h2>

    <div className='quantity'>
      <a className='quantity_minus' title='Decrement'  onClick={() => dispatch(decNumber())}><span>-</span></a>
      <input name='quantity' type="text" className='quantity_input' value={myState}/>
      <a className='quantity_plus' title='Increment' onClick={() => dispatch(incNumber())}><span>+</span></a>
    </div>

  
    </div>
  )
}

export default App