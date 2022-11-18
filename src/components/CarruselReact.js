import Image1 from "../assets/GrecoA.png";
import Image2 from '../assets/GrecoB.png';
import Image3 from '../assets/GrecoC.png';
import Image4 from '../assets/GrecoD.png';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Image1} class="d-block w-100 imgCarrusel" alt="Distribuidor directo"/>
      <Carousel.Caption class="carousel-caption d-none d-md-block">
      <p className="textCaption">Distribuidor directo</p>
      </Carousel.Caption>
    </div>
    <div class="carousel-item">
      <img src={Image2} class="d-block w-100 imgCarrusel" alt="Envíos a todo el país"/>
      <Carousel.Caption class="carousel-caption d-none d-md-block">
      <p className="textCaption">Envíos a todo el país</p>
      </Carousel.Caption>
    </div>
    <div class="carousel-item">
      <img src={Image3} class="d-block w-100 imgCarrusel" alt="Mejor precio garantizado"/>
      <Carousel.Caption class="carousel-caption d-none d-md-block">
      <p className="textCaption">Mejor precio garantizado</p>
      </Carousel.Caption>
    </div>
    <div class="carousel-item">
      <img src={Image4} class="d-block w-100 imgCarrusel" alt="40 años de experiencia"/>
      <Carousel.Caption class="carousel-caption d-none d-md-block">
      <p className="textCaption">40 años de experiencia</p>
      </Carousel.Caption>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default UncontrolledExample;