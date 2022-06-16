import Videoloop from "../assets/F1.mp4";
import Logotipo from "../assets/logo-completo-white.png";

function Home() {
    return (
      
        <div className="inicio">
        <video className="video" autoPlay loop muted>
        <source src={Videoloop} type="video/mp4" />
        </video>
        <div className="containerElements">
        <span className="spanHome">
        <h1 className="titleInicio"><img src={Logotipo} className="logo-header" width="500" alt="Logotipo de Greco"/></h1>
        </span>
        <p className="parrafoHome">
            EL MEJOR RECTIFICADOR DE TAPAS DE CILINDRO.
          </p>
          <div class="center">
        <a href="https://api.whatsapp.com/send?phone=5492616963854&text=Hola!%20Visité%20su%20web%20y%20quisiera%20conocer%20más%20sobre%20sus%20productos" target="_blank" rel="noreferrer"><span data-attr="WHATS">WHATS</span><span data-attr="APPS">APPS</span></a>
    </div>
          </div>
          
      </div>
    );
  }
  
  export default Home;