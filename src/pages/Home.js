import Navigator from "../components/Navigator/Navbar";
import Header from "../components/Header";
import Nosotros from "../components/Nosotros";
import Clientes from "../components/Clientes";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import Image5 from "../assets/whatsapp_green.png";
import Carrusel from "../components/CarruselReact";
import Eleginos from "../components/Eleginos";


function Home() {
  return (
    <>
        <div>
        <Navigator/>
        <Carrusel/>
        <a href="https://api.whatsapp.com/send?phone=5492616963854&text=Hola!%20Visité%20su%20web%20y%20quisiera%20conocer%20más%20sobre%20sus%20productos" target="_blank" rel="noreferrer" className="btn-wsp"><img className="btn-wsp" src={Image5} alt="WhatsApp" /></a>
        <Header/>
        <Nosotros/>
        <Clientes/>
        <Eleginos/>
        <Contacto/>        
        <Footer/>
      </div>
      </>
  );
}

export default Home;