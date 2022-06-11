import "../clientes.scss";
import Andesmar from "../assets/andesmar-logo.png";
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
                <img src={Andesmar} height="70" width="150" alt="Logo Transportes Andesmar" />
            </div>
            <div class="slide">
                <img src={Heras} height="120" width="140" alt="Municipalidad de Las Heras" style={{"margin-top": "-1rem", "margin-left": "2rem"}} />
            </div>
            <div class="slide">
                <img src={Lizana} height="80" width="200" alt="Transportes Lizana logo" />
            </div>
            <div class="slide">
                <img src={Concremix} height="50" width="250" alt="Logo de concremix" style={{"margin-top": "1rem"}} />
            </div>
            <div class="slide">
                <img src={Lopez} height="50" width="150" alt="Grúas López" style={{"margin-top": "1rem"}} />
            </div>
            <div class="slide">
                <img src={Tomio} height="80" width="150" alt="Ingeniería Tomio" />
            </div>
            <div class="slide">
                <img src={Sargo} height="100" width="250" alt="Grupo Sargo" />
            </div>
            <div class="slide">
                <img src={Andesmar} height="100" width="250" alt="Logo Transportes Andesmar" />
            </div>
            <div class="slide">
                <img src={Heras} height="120" width="140" alt="Municipalidad de Las Heras" style={{"margin-top": "-1rem", "margin-left": "2rem"}}/>
            </div>
            <div class="slide">
                <img src={Lizana} height="80" width="200" alt="Transportes Lizana logo" />
            </div>
            <div class="slide">
                <img src={Concremix} height="50" width="250" alt="Logo de concremix" style={{"margin-top": "1rem"}} />
            </div>
            <div class="slide">
                <img src={Lopez} height="50" width="150" alt="Grúas López" style={{"margin-top": "1rem"}} />
            </div>
            <div class="slide">
                <img src={Tomio} height="80" width="150" alt="Ingeniería Tomio" />
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