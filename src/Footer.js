import React from 'react';
import './Footer.css';
import logoV from './Vet_2_Care.png';
function Footer() {
    return (
        <footer>
        <div className="footer-container">
            <div className="footer-block">
                <h2>Acerca de</h2>
                <ul>
                    <li><a href="#">Descuentos</a></li>
                    <li><a href="#">Vacantes</a></li>
                    <li><a href="#">Horarios</a></li>
                </ul>
            </div>
            <div className="footer-block">
                <h2>Ayuda</h2>
                <ul>
                    <li><a href="#">Preguntas frecuentes</a></li>
                    <li><a href="#">Atención al cliente</a></li>
                    <li><a href="#">Contáctanos</a></li>
                </ul>
            </div>
            <div className="footer-block center">
                <img src={logoV} alt="Vet 2 Care Logo" style={{ width: '80px', height: 'auto' }} />
                <div className="social-icons">
                    <ion-icon name="logo-youtube"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>
            </div>
            <div className="footer-block">
                <h2>Asuntos legales</h2>
                <ul>
                    <li><a href="#">Términos de servicio</a></li>
                    <li><a href="#">Protección de datos</a></li>
                    <li><a href="#">Cookies</a></li>
                </ul>
            </div>
            <div className="footer-block">
                <h2>Contacto</h2>
                <ul>
                    <li><a href="mailto:vet@care.com">vet@care.com</a></li>
                    <li><a href="tel:614-369-3696">614-369-3696</a></li>
                    <li><a href="tel:614-303-3033">614-303-3033</a></li>
                </ul>
            </div>
        </div>
        </footer>
    );
}

export default Footer;