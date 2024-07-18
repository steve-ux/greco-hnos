import LogoLinkedIn from "../assets/LinkedIn-red.png";
import LogoInstagram from "../assets/insta-red.png";
import LogoMaps from "../assets/maps-red.png";

function Footer() {
    return (
      <div>
        <footer>
          <div className="footerContainer">
          <div className="containerFooter">
              <a href="https://www.facebook.com/GrecoHnos" target="_blank" rel="noreferrer"><img src={LogoLinkedIn} width="60" alt="Logo Facebook"/></a>
              <a href="https://www.instagram.com/grecohnos/" target="_blank" rel="noreferrer"><img src={LogoInstagram} width="60" alt="Logo Instagram"/></a>
              <a href="https://goo.gl/maps/Jbkdyg5svu2yqCB67" target="_blank" rel="noreferrer"><img src={LogoMaps} width="60" alt="Logo Maps"/></a>
          </div>
              <p className="text-footer">Greco Hermanos © <span id="get-current-year">{new Date().getFullYear()}</span> | Mendoza, AR</p>
              <p className="text-footer2">Web creada por <span><a href="https://ekoddex.com/" target="_blank" rel="noreferrer" className="firma">eKoddex</a></span></p>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;
