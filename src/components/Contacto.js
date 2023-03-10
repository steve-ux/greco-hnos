import FormularioContacto from "../components/FormularioContacto";
import Image1 from "../assets/map1.png";
import Image3 from "../assets/mail.png";
import Image4 from "../assets/whatsapp.png";

function Contacto() {
  return (
    <div className="container-contact">
      <h1 className="titleContacto" id="Contacto" data-aos="fade-down" data-aos-duration="600">Contactate, te estamos esperando</h1>
      <div className="text-contacto"></div>
      <FormularioContacto />
      <div className="containerContact">
      <h2 className="titleContacto2" data-aos="fade-down" data-aos-duration="600">Otras vías de contacto</h2>
      <div className="iconos-valores">
        <div className="container-iconos" data-aos="fade-up" data-aos-duration="600">
          <div>
            <p className="texto-primeroT">
            <a href="https://goo.gl/maps/Jbkdyg5svu2yqCB67" target="_blank" rel="noreferrer"><img className="imagenC" src={Image1} alt="Ubicación" /></a>
            <p className="text-icons"><a href="https://goo.gl/maps/Jbkdyg5svu2yqCB67" target="_blank" rel="noreferrer" className="text-icons">Brandsen 2770, Dorrego - Guaymallén - Mendoza</a></p>
            </p>
          </div>
          <div>
            <p className="texto-primeroT">
            <a href="mailto:grecohnostc@hotmail.com"><img className="imagenC" src={Image3} alt="Correo electrónico" /></a>
            <p className="text-icons"><a href="mailto:grecohnostc@hotmail.com"><p className="text-icons">grecohnostc@hotmail.com</p></a></p>
            </p>
          </div>
          <div>
            <p className="texto-primeroT">
            <a href="https://api.whatsapp.com/send?phone=5492616963854&text=Hola!%20Visité%20su%20web%20y%20quisiera%20conocer%20más%20sobre%20sus%20productos" target="_blank" rel="noreferrer"><img className="imagenE" src={Image4} alt="WhatsApp" /></a>
            <p className="text-icons"><a href="https://api.whatsapp.com/send?phone=5492616963854&text=Hola!%20Visité%20su%20web%20y%20quisiera%20conocer%20más%20sobre%20sus%20productos" target="_blank" rel="noreferrer"><p className="text-icons">261 696-3854</p></a></p>
            </p>
          </div>
        </div>
        </div>
      <div className="mapsContacto">
      <iframe title="Mapa de Greco" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.136272091734!2d-68.83942598496661!3d-32.92099768092878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0960ff464aaf%3A0x3db0d1e48eb2d4fe!2sGreco%20Hnos%20-%20Tapas%20de%20Cilindros!5e0!3m2!1ses-419!2sar!4v1654827571062!5m2!1ses-419!2sar" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>     
      </div>
      <div className="textMaps">
      </div>
      </div>
    </div>
  );
}

export default Contacto;