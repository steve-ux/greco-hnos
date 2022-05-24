import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Enviado from "./components/Enviado"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<Nosotros />} />
        <Route path="/Criptos" element={<Contacto />} />
        <Route path="/Enviado" element={<Enviado />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
