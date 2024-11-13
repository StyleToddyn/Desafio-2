import { useReducer } from "react";

export default function Header() {
  /*Redutor*/
  const [state, dispatch] = useReducer(counterReducer,{count:0})
  return (
        <div id="app">
            <h1>Contagem (Final)?</h1>
                <p id="actions">    
                    <button onClick={()=>{dispatch({type:"INCREMENTO"})}}>Incremento</button>
                <button onClick={()=>{dispatch({type:"DECREMENTO"})}}>Decremento</button>
                <button onClick={()=>{dispatch({type:"RESET"})}}>Reset</button>
                </p>
                <p id="counter">{state.count}</p>
        </div>
  );
}
