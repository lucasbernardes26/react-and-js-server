import { Routes, Route } from "react-router-dom"
import Cadastro from "./pages/Cadastro/Cadastro"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"

 
 
export default function App() {
 
  return (
    <>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/cadastro" element={<Cadastro />} />
  </Routes>
    </>
  )
}
 