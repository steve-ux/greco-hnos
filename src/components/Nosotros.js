import About from "../assets/nosotros.png"

function Nosotros () {
    return (
        <div className="containerNosotros">
            <h2 className="titleNosotros" id="Nosotros" data-aos="fade-down" data-aos-duration="600">Nuestra historia</h2>

           <div className="box-padre">
            <div className="box-nosotros">
            <div data-aos="fade-right" data-aos-duration="600" className="div-img">  
            <img src={About} alt="El equipo de Greco" width="95%" className="img-nosotros"/>
            
            <p className="epigrafe">Frente de local Greco</p>
            </div>
            </div>
            <div className="text-nosotros" data-aos="fade-up" data-aos-duration="600">
                <p>Somos una empresa con más de <span>30 años de experiencia</span> en la rectificación y venta de tapas de cilindro.</p>                
                <p>En <span>Greco</span> sabemos de motores, nos importa el cliente y que su vehículo esté óptimo, por ello nuestros productos son de alta calidad y nuestra atención personalizada, adaptada a cada usuario que nos elige hoy o desde siempre.</p>
                <p>Ubicados en el Gran Mendoza, realizamos envíos de nuestros productos a todo el país y aceptamos todos los medios de pago.</p>
            </div>
            </div>   
            
            </div>
    )
}
export default Nosotros;
