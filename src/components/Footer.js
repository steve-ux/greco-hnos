import LogoLinkedIn from "../assets/LinkedIn-red.png";

function Footer() {
    return (
      <div>
        <footer>
          <div className="footerContainer">
          <div className="containerFooter">
              <a href="https://www.facebook.com/GrecoHnos" target="_blank" rel="noreferrer"><img src={LogoLinkedIn} width="60" alt="Logo Facebook"/></a>
          </div>
              <p className="text-footer">Greco Hermanos © <span id="get-current-year">{new Date().getFullYear()}</span></p>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;