import "../clientes.scss";
import Andesmar from "../assets/andesmar-logo.png";
import Heras from "../assets/las-heras.jpg";
import Lizana from "../assets/lizana.png";
import Concremix from "../assets/concremix.png";
import Lopez from "../assets/gruas.png";
import Tomio from "../assets/tomio.png";
import Sargo from "../assets/sargo.jpg";
import Boart from "../assets/boart.png";

function Clientes () {
    return (
        <>
        <h2 className="titleNosotros" data-aos="fade-down" data-aos-duration="600">Confían en nosotros</h2>
        <div className="body-clientes">
        <div class="slider">
        <div class="slide-track">
            <div class="slide">
                <a href="https://www.andesmar.com/" target="_blank" rel="noreferrer"><img src={Andesmar} height="70" width="150" alt="Logo Transportes Andesmar" /></a>
            </div>
            <div class="slide">
            <a href="https://lasheras.gob.ar/" target="_blank" rel="noreferrer"><img src={Heras} height="120" width="140" alt="Municipalidad de Las Heras" style={{"margin-top": "-1rem", "margin-left": "2rem"}} /></a>
            </div>
            <div class="slide">
            <a href="https://www.transporteslizanacargas.com/" target="_blank" rel="noreferrer"><img src={Lizana} height="80" width="200" alt="Transportes Lizana logo" /></a>
            </div>
            <div class="slide">
            <a href="http://www.concremix.com.ar/" target="_blank" rel="noreferrer"><img src={Concremix} height="50" width="250" alt="Logo de concremix" style={{"margin-top": "1rem"}} /></a>
            </div>
            <div class="slide">
            <a href="https://lopezargentina.com/" target="_blank" rel="noreferrer"><img src={Lopez} height="50" width="150" alt="Grúas López" style={{"margin-top": "1rem"}} /></a>
            </div>
            <div class="slide">
            <a href="http://tomioingenieria.com.ar/" target="_blank" rel="noreferrer"><img src={Tomio} height="80" width="150" alt="Ingeniería Tomio" /></a>
            </div>
            <div class="slide">
            <a href="https://sargo.com.ar/" target="_blank" rel="noreferrer"><img src={Sargo} height="100" width="250" alt="Grupo Sargo" /></a>
            </div>
            <div class="slide">
                <a href="https://www.boartlongyear.com/es/" target="_blank" rel="noreferrer"><img src={Boart} height="70" width="270" alt="Logo Boart LongYear" /></a>
            </div>
            <div class="slide">
            <a href="https://www.andesmar.com/" target="_blank" rel="noreferrer"><img src={Andesmar} height="70" width="150" alt="Logo Transportes Andesmar" /></a>
            </div>
            <div class="slide">
            <a href="https://lasheras.gob.ar/" target="_blank" rel="noreferrer"><img src={Heras} height="120" width="140" alt="Municipalidad de Las Heras" style={{"margin-top": "-1rem", "margin-left": "2rem"}}/></a>
            </div>
            <div class="slide">
            <a href="https://www.transporteslizanacargas.com/" target="_blank" rel="noreferrer"><img src={Lizana} height="80" width="200" alt="Transportes Lizana logo" /></a>
            </div>
            <div class="slide">
            <a href="http://www.concremix.com.ar/" target="_blank" rel="noreferrer"><img src={Concremix} height="50" width="250" alt="Logo de concremix" style={{"margin-top": "1rem"}} /></a>
            </div>
            <div class="slide">
            <a href="https://lopezargentina.com/" target="_blank" rel="noreferrer"><img src={Lopez} height="50" width="150" alt="Grúas López" style={{"margin-top": "1rem"}} /></a>
            </div>
            <div class="slide">
            <a href="http://tomioingenieria.com.ar/" target="_blank" rel="noreferrer"><img src={Tomio} height="80" width="150" alt="Ingeniería Tomio" /></a>
            </div>
            <div class="slide">
            <a href="https://sargo.com.ar/" target="_blank" rel="noreferrer"><img src={Sargo} height="100" width="250" alt="Grupo Sargo" /></a>
            </div>
            <div class="slide">
                <a href="https://www.boartlongyear.com/es/" target="_blank" rel="noreferrer"><img src={Boart} height="70" width="270" alt="Logo Boart LongYear" /></a>
            </div>
        </div>
    </div>
    </div>
    </>   
    );
}

export default Clientes;