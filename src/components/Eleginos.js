import Image3 from "../assets/calidad.png";
import Image4 from "../assets/envios.png";
import Image5 from "../assets/compromiso.png";
import Image6 from "../assets/mercadopago.png";
import Image7 from "../assets/ahora12.png";

function Eleginos () {
    return (
        <div className="containerNosotros">
            <h2 className="titleNosotros" id="Eleginos" data-aos="fade-down" data-aos-duration="600">¿Por qué elegirnos?</h2>

           <div className="box-padre">
            <div className="text-eleginos" data-aos="fade-up" data-aos-duration="600">
                <p>Nuestra atención es mano a mano con el cliente, te acompañamos en el paso a paso desde el primer contacto hasta la post venta. No solo no te soltamos la mano, sino que además podemos ofrecerte <span>descuentos exclusivos</span>.</p>                
                <p>También te ofrecemos <span>facilidades de pago</span> como mercado pago, crédito, ahora 12 y más. Recordá que nuestros productos pueden enviarse a cualquier punto del país.</p>
                <p>Desde <span>Greco</span> nos actualizamos permanentemente para ofrecerte lo mejor en productos e innovamos para estar siempre a la vanguardia.</p>
            </div>
            </div> 
            <div className="iconos-valores">
        <div className="container-iconos">
          <div>
            <p className="texto-primeroT">
              <img className="imagenCalidad" src={Image3} alt="Calidad" />
            </p>
            <p className="text-icons">Servicio de calidad</p>
          </div>
          <div>
            <p className="texto-primeroT">
              <img className="imagenEnvios" src={Image4} alt="Envíos nacionales" />
            </p>
            <p className="text-icons">Envíos</p>
          </div>
          <div>
            <p className="texto-primeroT">
              <img className="imagenConfianza" src={Image5} alt="Confianza" />
            </p>
            <p className="text-icons">Confianza</p>
          </div>
          <div>
            <p className="texto-primeroT">
              <img className="imagenMercadoPago" src={Image6} alt="Mercado Pago" />
            </p>
            <p className="text-icons">Mercado Pago</p>
          </div>
          <div>
            <p className="texto-primeroT">
              <img className="imagenAhora12" src={Image7} alt="Ahora 12" />
            </p>
            <p className="text-icons">Ahora12</p>
          </div>
        </div>
      </div>  
            
            </div>
    )
}
export default Eleginos;