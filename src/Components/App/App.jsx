import Header from "../Header/Header"
import { CreateContext } from "../Context/CreateContext"
export default function App() {
  return(
  <CreateContext>
    <Header/>
  </CreateContext>
)
}
