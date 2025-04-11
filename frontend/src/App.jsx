
import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Wellcome from "./pages/Welcome"
const App = () => {
  return (
    <>
    <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/"element={<Wellcome />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App