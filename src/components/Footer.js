import LogoLinkedIn from "../assets/LinkedIn-red.png";

function Footer() {
    return (
      <div>
        <footer>
          <div className="footerContainer">
          <div className="containerFooter">
              <a href="https://www.facebook.com/GrecoHnos" target="_blank" rel="noreferrer"><img src={LogoLinkedIn} width="60" alt="Logo Facebook"/></a>
          </div>
              <p className="text-footer">Greco Hermanos © <span id="get-current-year">{new Date().getFullYear()}</span> | Mendoza, AR</p>
              <p className="text-footer2">Web creada por <span><a href="https://linktr.ee/steve.ok" target="_blank" rel="noreferrer" className="firma">EDev</a></span></p>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;