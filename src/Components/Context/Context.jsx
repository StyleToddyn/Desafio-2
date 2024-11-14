import { createContext,useReducer } from "react";

export const Context = createContext()

export function ContextProvider({children}){
 
    /* O que o redutor vai fazer?
        Resposta: Simplificar o gerenciamento do State
       @state:Estado do redutor
       @action:Hook para o dispatch({type})
      */
     const counterReducer = (state,action)=>{
    if(action.type === "INCREMENTO"){
      return{
        count: state.count + 1
      }
    }else if(action.type === "DECREMENTO"){
      return{
        count: state.count - 1
      }
    }else{
      return{
        count:0
      }
    }
  }

  const [state, dispatch] = useReducer(counterReducer,{count:0})

  return(
    <Context.Provider value={{state,dispatch}}>
        {children}
    </Context.Provider>
  )
}