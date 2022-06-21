// function Formulario() {
//     return (
//       <>
//       <div className="formularioContainer2">
//         <div className="content">
//         <form action="https://formsubmit.co/grecohnostc@hotmail.com" method="POST">
//         <label for="full_name">Nombre completo:</label>
//          <input required id="full_name" name="Nombre Completo" 
//          type="text"/> 
         
//          <label for="email">Email:</label>
//          <input required id="email" name="Email" 
//          type="email"/>
  
        
//          <label for="message">Mensaje:</label>
//          <textarea required id="message" name="Mensaje" 
//          type="textarea" minLength="10" title="Mensaje mínimo de 10 caracteres." className="inputMsj"/>
  
//         {/* <input type="hidden" name="_next" value="https://.com/Enviado"/> Poner URL del dominio */}
//         <input type="hidden" name="_subject" value="Nueva consulta desde la web!"/>
//         <input type="hidden" name="_captcha" value="false"/>
         
  
//         <button className="btnSend" type="submit" value="Send">ENVIAR</button>
//         </form>
//         </div>
//         </div>
//         </>
      
//     );
//   }
  
//   export default Formulario;
import "../form.scss";
import CilindroFalcon from "../assets/tapa.jpeg";


  function Formulario() {
    return (
      <>
    <div class="container">
      <div class="left">
       <div class="header">
      <h2 class="animation a1">Te respondemos a la brevedad</h2>
      <h4 class="animation a2">* Campos obligatorios.</h4>
       </div>
    <form class="form" action="https://formsubmit.co/exe.universal@gmail.com" method="POST">
      <input required id="full_name" type="text" class="form-field animation a4" placeholder="* Nombre"/>
      <input required id="email" type="email" class="form-field animation a3" placeholder="* Correo"/>
      <textarea required id="message" name="Mensaje" type="textarea" minLength="10" title="Mensaje mínimo de 10 caracteres." className="inputMsj" class="form-field animation a3" placeholder="* Tu consulta"/>
         <input type="hidden" name="_next" value="https://grecohnos.com/Enviado"/>
         <input type="hidden" name="_subject" value="Nueva consulta desde la web!"/>
         <input type="hidden" name="_captcha" value="false"/>
      <button class="animation a6" type="submit" value="Send">ENVIAR</button>
    </form>
    </div>
    <div class="wrapper">

<div class="item">
  <div class="polaroid"><img src={CilindroFalcon} alt="Tapa de cilindro Falcon"/>
    <div class="caption">Tapa de cilindro Falcon</div>
  </div>
</div>

</div>
      </div>
    </>
      
    );
  }
  
  export default Formulario;


 