import Navigator from "../components/Navigator/Navbar";
import Header from "../components/Header";
import Nosotros from "../components/Nosotros";
// import Clientes from "../components/Clientes";
// import Contacto from "../components/Contacto";
// import Footer from "../components/Footer";


function Home() {
  return (
    
      <div>
        <Navigator/>
        <Header/>
        <Nosotros/>
        {/*
        <Clientes/>
        <Contacto/>
        <Footer/> */}
      </div>
  );
}

export default Home;