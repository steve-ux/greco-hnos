import Tapa from "../assets/tapa-de-cilindro.jpg";
import About from "../assets/nosotros.jpg"

function Nosotros () {
    return (
        <div className="containerNosotros">
            <h2 className="titleNosotros" id="Nosotros" data-aos="fade-down" data-aos-duration="600">Nuestra historia</h2>
            <div className="box-nosotros">            
            <div className="video-container">
            <div data-aos="fade-right" data-aos-duration="600" className="div-img">  
            <img src={About} alt="El equipo de Greco" width="100%" className="img-nosotros"/>
            </div>
            <p className="epigrafe">El equipo de Greco</p>
            </div>  
            <div className="text-nosotros" data-aos="fade-left" data-aos-duration="600">
                <p>Somos una empresa con más de <span>30 años de experiencia</span> en la rectificación de tapas de cilindros y desde hace 10 años también nos dedicamos a la rectificación de motores pesados.</p>
                <p>
                Nuestro personal está compuesto por un jefe de taller, un ingeniero industrial en el departamento de ventas y 2 operarios, además de la gerencia, a cargo de <span>Omar Greco</span> y <span>Daniel Greco</span>.  
                </p>
                <p>Ubicados en el Gran Mendoza, realizamos envíos de nuestros productos a todo el país.</p>
            </div>
            </div>
            <div className="box-nosotros">            
              
            <div className="text-nosotros" data-aos="fade-right" data-aos-duration="600">
                <p>
                Las tapas de cilindro ayudan a mantener el <span>motor fresco</span>.
                </p>
                <p>
                    Su funcionamiento, en conjunto con el refrigerante, evita que el motor se sobrecaliente. 
                </p>
                <p>En <span>Greco</span> sabemos de motores, nos importa el cliente y que su vehículo esté óptimo, por ello nuestros productos son de alta calidad y nuestra atención personalizada, adaptada a cada usuario que nos elige hoy o desde siempre.</p>
            </div>
            <div>
            <div data-aos="fade-left" data-aos-duration="600" className="div-img">  
            <img src={Tapa} alt="Tapa de cilindro Peugeot" width="80%" className="img-nosotros"/>
            </div>
            <p className="epigrafe">Tapa de cilindro</p>
            </div>
            </div>

        </div>
    )
}
export default Nosotros;
