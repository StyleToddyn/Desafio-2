import { createContext } from "react"
const Context = createContext();
export const CreateContext = ({children}) =>{

    function counterReducer(state,action){

        /* O que o redutor vai fazer?
            Resposta: Simplificar o gerenciamento do State
           @state:Estado do redutor
           @action:Hook para o dispatch({type})
          */
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
    

    return(
        <Context.provider value={counterReducer}>
            {children}
        </Context.provider>
    )
}