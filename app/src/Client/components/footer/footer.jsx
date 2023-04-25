import "./footer.css";

import Logo from "../../../img/imagen-header.jpg"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <div class="grupo-1">
            <div class="box">
                <figure>
                    <a href="#">
                        <img src={Logo} />
                    </a>
                </figure>
            </div>
            <div class="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>En esta empresa estamos comprometidos con tu salud capilar, por ello te brindandamos los mejores productos naturales con seis sellos 
                    de certificacion  invima que nos avala como una empresa responsable con tu salud, recuerda que todos nuestros productos son 100% maquilados 
                    en Colombia, por ello si desea continuar con nosotros te invitamos a revisar nuestras redes sociales te estamos esperando
                </p>
                
            </div>
            <div class="box">
                <h2>UBICACION   </h2>
                <div class="red-social">
                    <a class="fa-sharp fa-solid fa-location-pin"></a>
                </div>
                <h2>REDES SOCIALES   </h2>
                <div>
                    <a href="https://www.facebook.com/profile.php?id=100088232324247&mibextid=ZbWKwL" target="_blank" rel="noopener" class="fab fa-facebook"></a>
                    " "
                    <a href="https://instagram.com/olesogamoso?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener" class="fab fa-instagram"></a>
                    " "
                    <a href="https://www.facebook.com/profile.php?id=100088232324247&mibextid=ZbWKwL" target="_blank" rel="noopener" class="fab fa-twitter"></a>
                
                </div>
                
            </div>
            
            <div class="box">
                
            </div>
        </div>
        <div class="grupo-2">
            <small>&copy; 2023 <b>OLÉ Productos Capilares</b> - Todos los Derechos Reservados.</small>
        </div>
    </>
  );
};

export default Footer;
