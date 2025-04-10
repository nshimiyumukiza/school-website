
import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <>
    <Navbar />
      <BrowserRouter>
      <Routes>
        <Route />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App