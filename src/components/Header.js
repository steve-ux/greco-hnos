import Videoloop from "../assets/cars.mp4";

function Home() {
    return (
      
        <div className="inicio">
        <video className="video" autoPlay loop muted>
        <source src={Videoloop} type="video/mp4" />
        </video>
        <div className="containerElements">
        <span className="spanHome">
        <h1 className="titleInicio">GRECO HERMANOS</h1>
        </span>
        <p className="parrafoHome">
            EL MEJOR RECTIFICADOR DE TAPAS DE CILINDRO.
          </p>
          <div class="center">
        <a href="https://www.facebook.com/GrecoHnos"><span data-attr="SOMOS">SOMOS</span><span data-attr="GRECO">GRECO</span></a>
    </div>
          </div>
          
      </div>
    );
  }
  
  export default Home;