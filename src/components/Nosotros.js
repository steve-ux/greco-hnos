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
                <p>Somos una empresa con más de <span>30 años de experiencia</span> en la rectificación de tapas de cilindros y desde hace 10 años también nos dedicamos a la rectificación de motores pesados.</p>
                <p>
                Nuestro personal está compuesto por un jefe de taller, un ingeniero industrial en el departamento de ventas y 2 operarios, además de la gerencia, a cargo de <span>Omar Greco</span> y <span>Daniel Greco</span>.  
                </p>                
                <p>En <span>Greco</span> sabemos de motores, nos importa el cliente y que su vehículo esté óptimo, por ello nuestros productos son de alta calidad y nuestra atención personalizada, adaptada a cada usuario que nos elige hoy o desde siempre.</p>
                <p>Ubicados en el Gran Mendoza, realizamos envíos de nuestros productos a todo el país y aceptamos todos los medios de pago.</p>
            </div>
            </div>   
            
            </div>
    )
}
export default Nosotros;
