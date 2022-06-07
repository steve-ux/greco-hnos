import "../clientes.scss";
import Andesmar from "../assets/andesmar-logo.png";
import Rapido from "../assets/elrapido.jpg";
import Heras from "../assets/las-heras.jpg";
import Lizana from "../assets/lizana.png";
import Concremix from "../assets/concremix.png";
import Lopez from "../assets/gruas.png";
import Tomio from "../assets/tomio.png";
import Sargo from "../assets/sargo.jpg";

function Clientes () {
    return (
        <>
        <h2 className="titleNosotros">Confían en nosotros</h2>
        <div className="body-clientes">
        <div class="slider">
        <div class="slide-track">
            <div class="slide">
                <img src={Andesmar} height="100" width="250" alt="Logo Transportes Andesmar" />
            </div>
            <div class="slide">
                <img src={Rapido} height="100" width="250" alt="Logo El Rápido Internacional" />
            </div>
            <div class="slide">
                <img src={Heras} height="100" width="100" alt="Municipalidad de Las Heras" />
            </div>
            <div class="slide">
                <img src={Lizana} height="100" width="250" alt="Transportes Lizana logo" />
            </div>
            <div class="slide">
                <img src={Concremix} height="50" width="150" alt="Logo de concremix" />
            </div>
            <div class="slide">
                <img src={Lopez} height="50" width="100" alt="Grúas López" />
            </div>
            <div class="slide">
                <img src={Tomio} height="100" width="250" alt="Ingeniería Tomio" />
            </div>
            <div class="slide">
                <img src={Sargo} height="100" width="250" alt="Grupo Sargo" />
            </div>
            <div class="slide">
                <img src={Andesmar} height="100" width="250" alt="Logo Transportes Andesmar" />
            </div>
            <div class="slide">
                <img src={Rapido} height="100" width="250" alt="Logo El Rápido Internacional" />
            </div>
            <div class="slide">
                <img src={Heras} height="100" width="100" alt="Municipalidad de Las Heras" />
            </div>
            <div class="slide">
                <img src={Lizana} height="100" width="250" alt="Transportes Lizana logo" />
            </div>
            <div class="slide">
                <img src={Concremix} height="50" width="150" alt="Logo de concremix" />
            </div>
            <div class="slide">
                <img src={Lopez} height="50" width="100" alt="Grúas López" />
            </div>
            <div class="slide">
                <img src={Tomio} height="100" width="250" alt="Ingeniería Tomio" />
            </div>
            <div class="slide">
                <img src={Sargo} height="100" width="250" alt="Grupo Sargo" />
            </div>
        </div>
    </div>
    </div>
    </>   
    );
}

export default Clientes;