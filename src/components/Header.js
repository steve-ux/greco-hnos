//import Videoloop from "../assets/F1-Greco.mp4";
import Cursor from "../assets/arrow.png";
//import Carrusel from "./CarruselHome";

function Home() {
    return (
      
        <div className="inicio">
        <video className="video">
        </video>
        <div className="containerElements">
        <span className="spanHome">
        <h1 className="titleInicio"><p className="parrafoHome">
            VENTAS Y RECTIFICACIÓN DE TAPAS DE CILINDRO
          </p></h1>
        </span>        
        <img src={Cursor} alt="Flecha apuntando hacia abajo" width="60" className="cursor"/>
          <div class="center">        
        <a href="https://api.whatsapp.com/send?phone=5492616963854&text=Hola!%20Visité%20su%20web%20y%20quisiera%20conocer%20más%20sobre%20sus%20productos" target="_blank" rel="noreferrer"><button class="btn-hover color-2">CONSULTANOS</button></a>
       
    </div>    
   </div>          
  </div>
    );
  }
  
  export default Home;