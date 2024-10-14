import { Route,Routes } from "react-router-dom"
import Home from "./Components/Home"

import About from "./Components/About"
import MyNavbar from "./Components/MyNavbar"
import Signup from "./Components/Signup"
import SelfAssessment from "./Components/SelfAssesment"
function App() {
  return (
    <div>
      <MyNavbar/>
<Routes>
  <Route path = "/" element={<Home/>}/>
  <Route path="/About" element={<About/>}/>
  
  <Route path="SignUP" element={<Signup/>}/>
  <Route path="/Selfassesment" element={<SelfAssessment/>}/>
</Routes>
    </div>
  )
}

export default App
