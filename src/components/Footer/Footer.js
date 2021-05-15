import React from "react";
import './footer.css'
import {Link} from 'react-router-dom'
  
const Footer = () => {
  return (
      <div className="footer-area">
        <div className="footer-logo">
          <img alt="logo" src="https://res.cloudinary.com/gpope/image/upload/v1619107421/logoNewCloset_tttxaa.png"></img>
        </div>
        <div>
          <h3>Recorré</h3>
          <Link to="/"><p>Home</p></Link>
          <p>Productos</p>
          <p>Ofertas</p>
          <p>Carrito</p>
        </div>
        <div>
          <h3>Legal</h3>
          <p>Terminos y condiciones</p>
          <p>Política de privacidad</p>
          <p>Política de reembolso</p>
          <p>Soporte</p>
        </div>
        <div>
          <h3>Contacto</h3>
          <p>fiksgaspar@gmail.com</p>
          <p>+54 2235220542</p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <p><a href="https://twitter.com/?lang=es" target="blank_">Twitter</a></p>
          <p><a href="https://www.instagram.com/?hl=es-la"  target="blank_">Instagram</a></p>
          <p><a href="https://www.youtube.com/" target="blank_">YouTube</a></p>
          <p><a href="https://www.linkedin.com/" target="blank_">Linkedin</a></p>
        </div>
      </div>
  );
};
export default Footer;