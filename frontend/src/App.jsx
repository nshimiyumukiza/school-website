
import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Wellcome from "./pages/Welcome"
import Footer from "./components/Footer"
const App = () => {
  return (
    <>
    <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/"element={<Wellcome />}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App