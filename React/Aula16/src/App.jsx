import {HashRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Page1 from "./Pages/Page1.jsx"
import Page2 from "./Pages/Page2.jsx"
import Page3 from "./Pages/Page3.jsx"
import Layout from "./Layout.jsx"
import Page4 from "./Pages/Page4.jsx"

function App() {
  return(
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/> {/* Rota padrão */}
          <Route path='/page1' element={<Page1/>}/>
          <Route path='/page2' element={<Page2/>}/>
          <Route path='/page3' element={<Page3/>}/>
          <Route path='/page4' element={<Page4/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
