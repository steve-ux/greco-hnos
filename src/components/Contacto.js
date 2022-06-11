import FormularioContacto from "../components/FormularioContacto";
import Footer from "../components/Footer";

function Contacto() {
  return (
    <div>
      <h1 className="titleContacto" id="Contacto" data-aos="zoom-in" data-aos-duration="600">Contactate, te estamos esperando</h1>
      <div className="text-contacto">
                <p>Comunicate con nosotros por las distintas vías de comunicación con las que contamos. Podés realizar todas las consultas que creas necesarias y ajustarnos a tus necesidades.</p>
                <p></p>
                </div>
      <FormularioContacto />
      <h2 className="titleContacto2">Otras vías de contacto</h2>
      <div className="mapsContacto">
      <iframe title="Mapa de Greco" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.136272091734!2d-68.83942598496661!3d-32.92099768092878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0960ff464aaf%3A0x3db0d1e48eb2d4fe!2sGreco%20Hnos%20-%20Tapas%20de%20Cilindros!5e0!3m2!1ses-419!2sar!4v1654827571062!5m2!1ses-419!2sar" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>     
      </div>
      <div className="textMaps">
      <p className="direccion">Brandsen al 2770, Dorrego-Guaymallén</p>
      <a href="tel:2615069690"><p>261 431-4024</p></a>
      <a href="mailto:grecohnostc@hotmail.com"><p>grecohnostc@hotmail.com</p></a>
      </div> 
      <Footer />
    </div>
  );
}

export default Contacto;