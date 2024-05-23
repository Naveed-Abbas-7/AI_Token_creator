import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddToken from "./pages/AddToken"
import DeployMemeToken from "./pages/DeployMemeToken"
import Home from "./pages/Home"


function App() {

  return (
    <>
     <div className="">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AddToken" element={ <AddToken/>}/>
        <Route path="/DeployToken" element={<DeployMemeToken/>}/>
      </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}
export default App

