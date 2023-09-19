import Navbar from "./Navbar"
import Pricing from "./pages/Pricing"
import Homee from "./pages/Homee"
import About from "./pages/About"
import Sort from "./pages/Sort"
import Proj from "./pages/Proj"

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homee />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/sort" element={<Sort />} />
          <Route path="/proj" element={<Proj />} />
        </Routes>
      </div>
    </>
  )
}

export default App