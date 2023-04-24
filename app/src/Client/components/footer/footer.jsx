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
                <p>Somos un negocio muy reconocido en el departamento de Boyaca el cual ofrecemos 
                    diferentes productos capilares, Ven y Pide el Tuyo!
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
