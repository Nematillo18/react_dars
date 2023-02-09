import React from 'react';
import {connect} from 'react-redux'
import actions from './redux/funcsions';
function App(props) {
  return (
    <div>
      <h1>{props.count}</h1>
      <button style={{bacroundColor:"black"}} onClick={props.plus}>+</button>
      <button  onClick={props.minus}>-</button>
    </div>
  );
}

export default connect((state)=>({...state}),actions)(App)