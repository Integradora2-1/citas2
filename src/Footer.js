import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
        <div className="footer-container">
            <div className="footer-block">
                <h2>Acerca de</h2>
                <ul>
                    <li><a href="Descuentos">Descuentos</a></li>
                    <li><a href="Vacantes">Vacantes</a></li>
                    <li><a href="Horario">Horarios</a></li>
                </ul>
            </div>
            <div className="footer-block">
                <h2>Ayuda</h2>
                <ul>
                    <li><a href="Preguntas">Preguntas frecuentes</a></li>
                    <li><a href="Atencion al cliente">Atención al cliente</a></li>
                    <li><a href="Contactanos">Contáctanos</a></li>
                </ul>
            </div>
            <div className="footer-block center">
                
                <div className="social-icons">
                    <ion-icon name="logo-youtube"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>
            </div>
            <div className="footer-block">
                <h2>Asuntos legales</h2>
                <ul>
                    <li><a href="Terminos de servicio">Términos de servicio</a></li>
                    <li><a href="Proteccion de datos">Protección de datos</a></li>
                    <li><a href="Cookies">Cookies</a></li>
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
