 import { useReducer } from 'react';
 import './App.css';
 import reducer from "./reducer"

 function App() {
 const [{r,g,b},dispatch] = useReducer(reducer,{r:0,g:0,b:255});

 return (
 <div className='App' style={{background:`rgb(${r+200},${g }, ${b })`}}>
   <h1 style={{color:`rgb(${r},${g}, ${b})`}}>useImperativeHandle Hook</h1>
   <div>
     <span>
       R
     </span>
     <button onClick={() => dispatch({type:"Increment_R"})}>
       +</button>
     <button onClick={() => dispatch({type:"Decrement_R"})}>
       -
     </button>
   </div>
   <div>
     <span>
       G
     </span>
     <button onClick={() => dispatch({type:"Increment_G"})}>+</button>
     <button  onClick={() => dispatch({type:"Decrement_G"})} >-</button>
   </div>
   <div>
     <span>B</span>
     <button onClick={() => dispatch({type:"Increment_B"})}>+</button>
     <button  onClick={() => dispatch({type:"Decrement_B"})}>-</button>
   </div>
 </div>
 );
 }
 export default App;