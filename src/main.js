
import './styles/style.css';
import WallpaperImage from './assets/wallpaper_itariff.png';
import AdministracionIcon from './assets/administracion.png';
import AuditoriaIcon from './assets/auditoria.png';
import AuditoriasIcon from './assets/auditorias.png';
import CapacitacionIcono from './assets/capacitacion.png';
import CoachingIcono from './assets/coaching.png';
import AsesoriaIcono from './assets/asesoria.png';
import PropuestaValorImage from './assets/propuestavalor.png';
import BackgroundServiceImage from './assets/background.jpg';
import LogoBlue from './assets/logoBlue.png';
import Anexo24Icon from './assets/anexo24.png';
import Anexo30Icon from './assets/anexo30.png';
import CumplimientoIcon from './assets/cumplimientoIcon.png';
import LogoWhite from './assets/logo.png';

import HeroVideo from './assets/HeroVideo.mp4';

const heroTexts = [
    {
        title: 'COACHING',
        description: 'Se obtiene el conocimiento para la gestión de su departamento de comercio exterior.'
    },
    {
        title: 'PROPUESTA DE VALOR',
        description: 'En I TARIFF estamos comprometidos a llevar las mejores prácticas del cumplimiento aduanero mexicano a tu empresa. Contáctanos y nuestro equipo de expertos te apoyará en el proceso.'
    },
    {
        title: 'ADMINISTRACIÓN DE ANEXO 24.',
        description: 'Se administra, audita y controla la obligación de demostrar los retornos de las mercancías importadas.'
    },
    {
        title: 'ADMINISTRACIÓN DE ANEXO 30.',
        description: 'Se administra y supervisa la obligación de demostrar el pago del IVA de las importaciones temporales a través de sus retornos.'
    },
];

const HomeSection = `
  <section id="inicio" class="relative h-screen flex flex-col items-center justify-center overflow-hidden">
    
    <div class="absolute inset-0 z-0">
        <video 
            autoplay 
            loop 
            muted 
            playsinline 
            poster="${WallpaperImage}" 
            class="w-full h-full object-cover transform-gpu"
        >
            <source src="${HeroVideo}" type="video/mp4">
            Tu navegador no soporta el video de fondo.
        </video>
        
        <div class="absolute inset-0 bg-black opacity-30"></div> 
    </div>
    
    <div id="hero-content" class="relative z-10 text-center text-white p-4">
        
        <img src="${LogoWhite}" alt="ITARIFF Logo" class="w-64 h-auto mx-auto mb-6 drop-shadow-lg"/> 
        
        <div class="h-10 mb-2 flex items-center justify-center">
            <h1 id="rotating-text" class="text-2xl md:text-3xl font-semibold drop-shadow-md opacity-0 transition-opacity duration-700 ease-out">
                </h1>
        </div>
        
        <div class="h-14 mb-8 flex items-center justify-center max-w-lg mx-auto">
            <p id="rotating-description" class="text-base md:text-lg font-light drop-shadow-md opacity-0 transition-opacity duration-700 ease-out">
                </p>
        </div>
        
        <a href="#servicios" class="nav-link bg-white text-sky-900 font-bold py-3 px-8 rounded-lg shadow-xl transition duration-300 inline-block">
            Ver Nuestros Servicios
        </a>

    </div>
    
    <a href="#empresa" class="nav-link absolute bottom-10 z-20 animate-bounce transition-all duration-300">
      <svg class="w-12 h-12 text-white drop-shadow-xl" 
           fill="none" 
           stroke="currentColor" 
           viewBox="0 0 24 24" 
           xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </a>
  </section>
`;

const ClientesSection = `
  <section id="clientes" class="py-20 bg-white">
    <div class="container mx-auto px-4 text-center scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-4">
        NUESTROS CLIENTES
      </h2>
      <p class="text-gray-600 mb-12">
        
      </p>

      <div class="relative w-full overflow-hidden">
        <div id="horizontal-carousel-wrapper" class="relative">
            <div id="horizontal-carousel" class="flex transition-transform duration-500 ease-in-out">
                
                ${createClientItem('BoltIcon', 'INDUSTRIA ELÉCTRICA')}
                ${createClientItem('TruckIcon', 'INDUSTRIA DE AUTO PARTES AUTOMOTRICES')}
                ${createClientItem('CogIcon', 'INDUSTRIA DEL ACERO')}
                ${createClientItem('HomeIcon', 'COMERCIALIZACIÓN PARA INDUSTRIA Y VIVIENDA')}
                ${createClientItem('ScissorsIcon', 'INDUSTRIA TEXTIL')}
                ${createClientItem('ToolIcon', 'COMERCIALIZACIÓN DE MAQUINARIA Y HERRAMENTAL')}
                
            </div>
        </div>
        
        <button id="prev-btn" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-sky-900 text-white p-3 rounded-full shadow-lg hover:bg-sky-900 z-30 ml-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button id="next-btn" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-sky-900 text-white p-3 rounded-full shadow-lg hover:bg-sky-900 z-30 mr-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
  </section>
`;

const EmpresaSection = `
  <section id="empresa" class="min-h-screen bg-white py-20 border-b border-gray-200">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-5xl font-bold text-gray-800 mb-4">
        QUIENES SOMOS
      </h2>
      <p class="text-gray-600 mb-12">
        
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
        
        <div class="p-6 shadow-xl rounded-lg  hover:shadow-2xl scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out border border-gray-200">
          <div class="inline-flex p-3 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14 text-sky-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.25 15l-1.05 1.05a2.25 2.25 0 01-3.18 0l-1.05-1.05m5.28 5.76a.75.75 0 001.06 0l1.05-1.05a2.25 2.25 0 000-3.18L10.5 5.25a2.25 2.25 0 00-3.18 0l-1.05 1.05m5.28 5.76m2.25 2.25a.75.75 0 00-1.06 0L10.5 17.25a2.25 2.25 0 01-3.18 0l-1.05-1.05m5.28 5.76" />
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-sky-900 mb-3">MISIÓN</h3>
          <p class="text-gray-600 text-base">Apoyar el crecimiento de nuestros clientes mediante asesoramiento de negocios prestado a través de nuestros servicios.</p>
        </div>
        
        <div class="p-6 shadow-xl rounded-lg  hover:shadow-2xl scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out border border-gray-200">
          <div class="inline-flex p-3 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14 text-sky-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-sky-900 mb-3">VISIÓN</h3>
          <p class="text-gray-600 text-base">Ser una empresa mexicana que construya confianza en la sociedad a través de nuestros colaboradores, logrando así un crecimiento constante a la par de nuestros clientes.</p>
        </div>
        
        <div class="p-6 shadow-xl rounded-lg  hover:shadow-2xl scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out border border-gray-200">
          <div class="inline-flex p-3 mb-4">
            <svg class="size-14 text-sky-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6h4.5M12 21a9 9 0 100-18 9 9 0 000 18Z" />
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-sky-900 mb-3">HISTORIA</h3>
          <p class="text-gray-600 text-base">I TARIFF se origina a partir de la necesidad de la industria para realizar cabalmente el cumplimiento aduanero... y su fortaleza radica en la calidad y confianza en nuestros colaboradores expertos en la materia.</p>
        </div>
      </div>
    </div>
    
    ${ClientesSection}
  </section>
`;


const PropuestaValorSection = `
  <div class="flex justify-center items-start lg:h-full lg:py-12">
    <div class="scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out bg-white p-8 rounded-xl shadow-2xl max-w-md w-full border border-gray-200"> 
      
      <div class="flex justify-center mb-4">
        <img src="${PropuestaValorImage}" alt="Propuesta de Valor Imagen" class="w-24 h-24 object-cover rounded-full"/>
      </div>
      
      <h3 class="text-3xl font-bold text-sky-900 mb-6 text-center pb-2">
        PROPUESTAS DE VALOR
      </h3>

      <p class="text-gray-700 mb-6 leading-relaxed text-base text-center">
        En I TARIFF estamos comprometidos a llevar las mejores prácticas del cumplimiento aduanero mexicano a tu empresa. Contáctanos y nuestro equipo de expertos te apoyará en el proceso.
      </p>

      <ul class="space-y-3 text-gray-700 text-base">
        <li class="flex items-start">
            <span class="font-bold text-sky-900 mr-2 flex-shrink-0">1.</span>
            <p>Orientación hacia el <span class="font-bold text-sky-900">CLIENTE</span>, donde nuestros expertos sean preferidos y tengan la confianza de nuestros clientes.</p>
        </li>
        <li class="flex items-start">
            <span class="font-bold text-sky-900 mr-2 flex-shrink-0">2.</span>
            <p><span class="font-bold text-sky-900">ADAPTACIÓN</span> a los requerimientos del gobierno mexicano.</p>
        </li>
        <li class="flex items-start">
            <span class="font-bold text-sky-900 mr-2 flex-shrink-0">3.</span>
            <p>Desarrollo de <span class="font-bold text-sky-900">MEJORAS</span> en el cumplimiento aduanero.</p>
        </li>
        <li class="flex items-start">
            <span class="font-bold text-sky-900 mr-2 flex-shrink-0">4.</span>
            <p><span class="font-bold text-sky-900">SINERGIAS</span> con asociaciones para obtener el mejor acercamiento ante las autoridades.</p>
        </li>
        <li class="flex items-start">
            <span class="font-bold text-sky-900 mr-2 flex-shrink-0">5.</span>
            <p>Generamos su <span class="font-bold text-sky-900">TRANQUILIDAD</span>, al administrar y controlar sus obligaciones aduaneras.</p>
        </li>
      </ul>
    </div>
  </div>
`;

const ServiciosGrid = `
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 h-full py-12 w-full mx-auto">
    
    <div class="scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out service-card cursor-pointer p-6 shadow-xl rounded-lg bg-white hover:shadow-2xl border border-gray-200 text-center flex flex-col justify-between items-center" data-service-id="anexo24">
        <div>
            <img src="${Anexo24Icon}" alt="Anexo 24" class="w-16 h-16 object-cover mx-auto mb-4"/>
            <h3 class="text-xl font-bold text-sky-900 mb-2">ANEXO 24</h3>
            <p class="text-gray-600 text-base mb-4">Control de inventarios y registro de mercancías importadas temporalmente.</p>
        </div>
        <div class="mt-auto text-base font-semibold text-sky-700 flex items-center hover:text-sky-900">
            Ver Detalles
        </div>
    </div>

    <div class="scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out service-card cursor-pointer p-6 shadow-xl rounded-lg bg-white hover:shadow-2xl border border-gray-200 text-center flex flex-col justify-between items-center" data-service-id="anexo30">
        <div>
            <img src="${Anexo30Icon}" alt="Anexo 30" class="w-16 h-16 object-cover mx-auto mb-4"/>
            <h3 class="text-xl font-bold text-sky-900 mb-2">ANEXO 30</h3>
            <p class="text-gray-600 text-base mb-4">Administración y control de obligaciones para empresas certificadas IVA & IEPS.</p> 
        </div>
        <div class="mt-auto text-base font-semibold text-sky-700 flex items-center hover:text-sky-900">
            Ver Detalles
        </div>
    </div>
    
    <div class="md:col-span-2 flex justify-center mt-4"> 
        <div class="scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out service-card cursor-pointer p-6 shadow-xl rounded-lg bg-white hover:shadow-2xl border border-gray-200 text-center flex flex-col justify-between items-center" data-service-id="cumplimiento"> 
            <div>
                <img src="${CumplimientoIcon}" alt="Gestión Integral" class="w-16 h-16 object-cover rounded-full mx-auto mb-4"/>
                <h3 class="text-xl font-bold text-sky-900 mb-2">CUMPLIMIENTO</h3>
                <p class="text-gray-600 text-base mb-4">Auditorías, capacitación, coaching y trámites ante la autoridad aduanera.</p>
            </div>
            <div class="mt-auto text-base font-semibold text-sky-700 flex items-center hover:text-sky-900">
                Ver Detalles
            </div>
        </div>
    </div>

  </div>
`;

const ServiciosSection = `
  <section id="servicios" class="min-h-screen relative py-12 border-b border-gray-200 flex items-center overflow-hidden">
    
    <div class="absolute inset-0 z-0 bg-cover bg-center" 
         style="background-image: url(${BackgroundServiceImage});">
      <div class="absolute inset-0 bg-sky-900 opacity-80"></div> 
    </div>

    <div class="container mx-auto px-4 relative z-10"> <h2 class="text-4xl font-extrabold text-center text-white mb-8">NUESTROS SERVICIOS</h2> 
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <div class="flex justify-center">
          ${PropuestaValorSection}
        </div>
        
        <div class="lg:pl-4 flex items-center">
            ${ServiciosGrid}
        </div>
        
      </div>
    </div>
  </section>
`;

const ModalTemplate = `
    <div 
        id="service-modal" 
        class="fixed inset-0 flex items-center justify-center z-[100] hidden" 
        style="background-color: rgba(0, 0, 0, 0.7);"
    >
        <div class="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full m-4 relative transform transition-all duration-300 scale-90 opacity-0 max-h-[90vh] flex flex-col" id="modal-content-wrapper">
            <button class="absolute top-3 right-3 text-gray-500 hover:text-gray-900 text-3xl font-light z-20" id="close-modal-btn">×</button>
            
            <div id="modal-body" class="overflow-y-auto pr-2"> 
                <h3 class="text-3xl font-bold text-sky-900 mb-4" id="modal-title"></h3>
                <img id="modal-image" class="w-20 h-20 object-cover mb-4 mx-auto" alt="Icono de Servicio">
                <p class="text-gray-700" id="modal-description"></p>
                <div class="mt-6 text-base text-gray-500" id="modal-details"></div>
            </div>
        </div>
    </div>
`;


// ---> CAMBIAR 'value="d9d4f178-431c-4d1b-8fc4-8be6cbc585f0"' POR CLAVE I TARIFF DE ACCESO DE WEB3FORMS <--- //
const ContactoSection = `
  <section id="contacto" class="min-h-screen py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-5xl font-bold text-center text-gray-800 mb-12">CONTACTO</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div>
          <h3 class="text-3xl font-bold text-sky-900 mb-4">¡DÉJANOS UN MENSAJE!</h3>
          <form 
            id="contacto-form" 
            action="https://api.web3forms.com/submit" 
            method="POST" 
            class="space-y-4 shadow-lg p-6 rounded-lg border border-gray-100 scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out"


            <input type="hidden" name="access_key" value="d9d4f178-431c-4d1b-8fc4-8be6cbc585f0"> 
            
            <input type="text" name="Nombre" placeholder="Nombre (requerido)" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500">
            <input type="email" name="Correo" placeholder="Correo (requerido)" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500">
            <input type="text" name="Asunto" placeholder="Asunto" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500">
            <textarea name="Mensaje" placeholder="Mensaje" rows="5" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"></textarea>
            
            <button type="submit" id="submit-btn" class="bg-sky-900 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
              ENVIAR
            </button>
            <p id="form-status" class="text-center font-semibold mt-4 hidden"></p>
          </form>
        </div>
        
        <div>
          <h3 class="text-3xl font-bold text-sky-900 mb-4">INFORMACIÓN Y UBICACIÓN</h3>
          
          <div class=" p-6 rounded-lg mb-6 shadow-md scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out>
            <p class="text-gray-800 mb-2 font-semibold">
              <span class="text-sky-900">Teléfono:</span> (81) 8000-0332
            </p>
            <p class="text-gray-800 font-semibold">
              <span class="text-sky-900">Dirección:</span> Av. Revolución No. exterior 2703-2, Interior piso 1 y 2. Col. Ladrillera, CP 64830 Monterrey Nuevo León
            </p>
          </div>

          <div class="h-80 rounded-lg shadow-xl overflow-hidden border-4 border-white scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1796.7906801905386!2d-100.27419842887618!3d25.64508499252445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86735a26a3c6130b%3A0xc3c54c33f7d2f447!2sAv.%20Revoluci%C3%B3n%202703%2C%20Ladrillera%2C%2064830%20Monterrey%2C%20N.L.!5e0!3m2!1sen!2smx!4v1669865679808!5m2!1sen!2smx" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const Navbar = () => `
  <header class="sticky top-0 z-50 bg-white shadow-lg">
    <nav class="container mx-auto p-7 flex justify-between items-center relative">
      
      <a href="#inicio" class="nav-link flex items-center py-1 hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2">
        <img src="${LogoBlue}" alt="ITARIFF Logo" class="h-19 w-auto">
      </a>
      
      <div class="flex space-x-6 w-full justify-center md:w-auto md:ml-auto md:mr-4 md:relative">
        <a href="#inicio" class="nav-link text-gray-700 hover:text-sky-900 font-medium transition duration-150">INICIO</a>
        <a href="#empresa" class="nav-link text-gray-700 hover:text-sky-900 font-medium transition duration-150">EMPRESA</a>
        <a href="#servicios" class="nav-link text-gray-700 hover:text-sky-900 font-medium transition duration-150">SERVICIOS</a>
        <a href="#contacto" class="nav-link text-gray-700 hover:text-sky-900 font-medium transition duration-150">CONTACTO</a>
      </div>
    </nav>
  </header>
`;

const Footer = () => `
  <footer class="bg-gray-900 text-white p-6 text-center">
    <p>© Copyright 2020  I Tarif</p>
  </footer>
`;

function createClientItem(icon, text) {
  let svgPath = '';
  switch (icon) {
    case 'BoltIcon': svgPath = '<path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />'; break;
    case 'TruckIcon': svgPath = '<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />'; break;
    case 'CogIcon': svgPath = '<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />'; break;
    case 'HomeIcon': svgPath = '<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />'; break;
    case 'ScissorsIcon': svgPath = '<path stroke-linecap="round" stroke-linejoin="round" d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664" />'; break;
    case 'ToolIcon': svgPath = '<path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />'; break;
  }

  return `
        <div class="carousel-item flex-none w-full md:w-1/3 p-4 transition-transform duration-500 ease-in-out">
            <div class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center h-full border border-stone-100">
                <svg class="w-16 h-16 text-sky-900 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${svgPath}</svg>
                <p class="text-base font-semibold text-gray-800 uppercase text-center">${text}</p>
            </div>
        </div>
    `;
}

function initContactForm() {
    const form = document.getElementById('contacto-form');
    const status = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const data = new FormData(form);
        
        status.classList.remove('hidden');
        status.textContent = 'Enviando...';
        status.classList.remove('text-green-600', 'text-red-600');
        status.classList.add('text-sky-900');
        submitBtn.disabled = true;

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: data,
            });
            
            const result = await response.json();

            if (response.ok && result.success) {
                status.textContent = '¡Mensaje enviado con éxito! Recibirás una respuesta pronto.';
                status.classList.remove('text-sky-900', 'text-red-600');
                status.classList.add('text-green-600');
                form.reset(); // Limpiar formulario
            } else {
                status.textContent = result.message || 'Error al enviar el mensaje.';
                status.classList.remove('text-sky-900', 'text-green-600');
                status.classList.add('text-red-600');
            }

        } catch (error) {
            console.error('Error de conexión:', error);
            status.textContent = 'Error de conexión. Inténtalo más tarde.';
            status.classList.remove('text-sky-900', 'text-green-600');
            status.classList.add('text-red-600');
        } finally {
            submitBtn.disabled = false;
        }
    });
}

function initHorizontalCarousel() {
  const carousel = document.getElementById('horizontal-carousel');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if (!carousel) return;

  const realItems = Array.from(carousel.querySelectorAll('.carousel-item'));
  const totalRealItems = realItems.length;

  const cloneCount = 3;

  // ... (Clonación de ítems - Esto se mantiene igual) ...
  for (let i = 0; i < cloneCount; i++) {
    const itemToClone = realItems[totalRealItems - cloneCount + i];
    carousel.prepend(itemToClone.cloneNode(true));
  }

  for (let i = 0; i < cloneCount; i++) {
    carousel.appendChild(realItems[i].cloneNode(true));
  }

  let currentIndex = cloneCount;

  // FUNCIÓN CLAVE: Determina el ancho real de una sola tarjeta.
  function getItemWidth() {
      // Tomamos el primer ítem clonado, que ya debe tener el ancho responsivo aplicado (w-full o w-1/3)
      const firstItem = carousel.querySelector('.carousel-item');
      if (firstItem) {
          // Devolvemos el ancho calculado por el navegador/Tailwind
          return firstItem.clientWidth; 
      }
      return carousel.clientWidth / 3; // Fallback seguro
  }

  // Posicionamiento Inicial (Sin transición)
  const initialWidth = getItemWidth();
  carousel.style.transform = `translateX(${-currentIndex * initialWidth}px)`;


  function updateCarousel() {
    const itemWidth = getItemWidth(); // Recalculamos el ancho en cada movimiento

    carousel.style.transition = 'transform 0.5s ease-in-out';
    const offset = -currentIndex * itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;

    carousel.addEventListener('transitionend', function handler(e) {

      if (e.propertyName !== 'transform') return;

      const currentWidth = getItemWidth(); // Recalculamos antes del salto

      if (currentIndex >= totalRealItems + cloneCount) {
        currentIndex = cloneCount;
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(${-currentIndex * currentWidth}px)`;
      }
      else if (currentIndex < cloneCount) {
        currentIndex = totalRealItems + cloneCount - 1;
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(${-currentIndex * currentWidth}px)`;
      }

      carousel.removeEventListener('transitionend', handler);
    }, { once: true });
  }

  function nextSlide() {
    currentIndex++;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex--;
    updateCarousel();
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  setInterval(nextSlide, 4000);

  // Listener para el evento resize: Necesario para ajustar el carrusel si el usuario
  // rota el móvil o cambia el tamaño de la ventana.
  window.addEventListener('resize', () => {
    const itemWidth = getItemWidth();
    carousel.style.transition = 'none';
    carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
  });

}

function initScrollReveal() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-12'); 

            } else {
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
    });

    document.querySelectorAll('.scroll-reveal').forEach(element => {
        observer.observe(element);
    });
}

function initServiceModals() {
  const modal = document.getElementById('service-modal');
  const modalWrapper = document.getElementById('modal-content-wrapper');
  const closeModalBtn = document.getElementById('close-modal-btn');

  if (!modal || !closeModalBtn) return;

  const closeModal = () => {
    modal.classList.add('hidden');
    modalWrapper.classList.remove('scale-100', 'opacity-100');
    modalWrapper.classList.add('scale-90', 'opacity-0');
    document.body.style.overflow = ''; 
  };

  closeModalBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
  });

  
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      const serviceId = card.getAttribute('data-service-id');
      const data = getServiceData(serviceId);

      if (!data) return;

      let subServicesHtml = '';
      if (data.subServices && data.subServices.length > 0) {
        subServicesHtml = data.subServices.map(service => `
          <div class="flex items-start mb-6 p-4 border border-sky-100 bg-sky-50 shadow-sm">
            <img src="${service.icon}" alt="Icono de ${service.name}" class="w-12 h-12 object-cover mr-4 mt-1 flex-shrink-0"/>
            <div>
              <h4 class="text-lg font-bold text-sky-900 mb-1">${service.name}</h4>
              <p class="text-gray-700 text-base">${service.description}</p> 
            </div>
          </div>
        `).join('');
      }

      document.getElementById('modal-title').textContent = data.title;
      document.getElementById('modal-image').src = data.image;
      document.getElementById('modal-description').innerHTML = `<p class="text-gray-700 text-md">${data.description}</p>`;
      document.getElementById('modal-details').innerHTML = subServicesHtml;


      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; 

      setTimeout(() => {
        modalWrapper.classList.remove('scale-90', 'opacity-0');
        modalWrapper.classList.add('scale-100', 'opacity-100');
      }, 10); 
    });
  });
}

function getServiceData(id) {
  const serviceDataMap = {
    'anexo24': {
      title: 'ANEXO 24',
      image: Anexo24Icon,
      description: 'El Anexo 24 es crucial para el cumplimiento de obligaciones de comercio exterior. Aseguramos el adecuado registro y control de saldos.',
      subServices: [
        {
          icon: AdministracionIcon,
          name: 'ADMINISTRACIÓN DE ANEXO 24',
          description: 'Se administra, audita y controla la obligación de demostrar los retornos de las mercancías importadas temporalmente a través de herramientas que cumplen con los requisitos ante la autoridad para fines de comercio exterior.'
        },
        {
          icon: AuditoriaIcon,
          name: 'AUDITORÍA ESPECIFICA AL ANEXO 24',
          description: 'Se verifica que cumpla con las disposiciones legales y técnicas adecuadas para la correcta captura de la información de los catálogos base, la información productiva, la información aduanera y su descarga.'
        },
      ],
    },
    'anexo30': {
      title: 'ANEXO 30',
      image: Anexo30Icon,
      description: 'El Anexo 30 aplica a empresas certificadas IVA & IEPS. Gestionamos la supervisión y demostración del pago de IVA de importaciones temporales.',
      subServices: [
        {
          icon: AuditoriasIcon,
          name: 'ADMINISTRACIÓN DEL ANEXO 30 PARA EMPRESAS CERTIFICADAS IVA & IEPS',
          description: 'Se administra y supervisa la obligación de demostrar el pago del IVA de las importaciones temporales a través de sus retornos.'
        },
        {
          icon: AsesoriaIcono, 
          name: 'AUDITORÍA ESPECIFICA AL ANEXO 30 PARA EMPRESAS CERTIFICADAS IVA & IEPS',
          description: 'Se verifica que cumpla con las disposiciones legales y entrega de la información ante la autoridad para el cabal cumplimiento de la Certificación de IVA & IEPS, y así, evitar su cancelación o suspensión.'
        },
      ],
      details: null
    },
    'cumplimiento': {
      title: 'CUMPLIMIENTO',
      image: CumplimientoIcon,
      description: 'Ofrecemos un paquete completo de servicios para asegurar la operación aduanera. Incluye auditorías y capacitación.',
      subServices: [
        {
          icon: AuditoriasIcon,
          name: 'AUDITORÍAS PREVENTIVAS DE COMERCIO EXTERIOR',
          description: 'Análisis profundo de sus operaciones, clasificación arancelaria y expedientes de comercio exterior para mitigar riesgos.'
        },
        {
          icon: CapacitacionIcono, 
          name: 'CAPACITACIÓN ESPECIALIZADA',
          description: 'Cursos y talleres a la medida para formar a su equipo en temas críticos de la legislación aduanera mexicana.'
        },
        {
          icon: CoachingIcono,
          name: 'COACHING Y GESTIÓN DE TRÁMITES',
          description: 'Soporte directo para la resolución de requerimientos y la gestión de trámites (padrones, certificaciones, etc.) ante el SAT/AGA.'
        },
      ],
      details: null
    },
  };
  return serviceDataMap[id];
}


function initParallax() {
    const parallaxElement = document.getElementById('parallax-bg');
    
    if (!parallaxElement) return;

    const speed = parseFloat(parallaxElement.getAttribute('data-parallax')) || 0.3;

    function applyParallax() {
        const scrollPosition = window.scrollY; 
        
        const offsetY = scrollPosition * speed; 
        
        parallaxElement.style.transform = `translate3d(0, ${offsetY}px, 0)`;
    }

    window.addEventListener('scroll', applyParallax);
    applyParallax();
}

function initTextRotator() {
    const titleElement = document.getElementById('rotating-text');
    const descElement = document.getElementById('rotating-description');
    
    if (!titleElement || !descElement) return;

    let currentIndex = 0;
    const intervalTime = 4000; // 4 segundos

    function rotateText() {
        const currentData = heroTexts[currentIndex];

        // 1. Fase de Salida (Ocultar ambos)
        titleElement.classList.add('opacity-0');
        descElement.classList.add('opacity-0');
        
        setTimeout(() => {
            // 2. Cambiar Contenido
            titleElement.textContent = currentData.title;
            descElement.textContent = currentData.description;
            
            currentIndex = (currentIndex + 1) % heroTexts.length; // Ciclo infinito
            
            // 3. Fase de Entrada (Mostrar ambos)
            titleElement.classList.remove('opacity-0');
            descElement.classList.remove('opacity-0');
        }, 700); // Esperar la duración de la transición CSS (0.7s)
    }

    // Iniciar y mantener la rotación
    rotateText();
    setInterval(rotateText, intervalTime);
}

function closeAllAccordions(allHeaders) {
  allHeaders.forEach(h => {
    const targetId = h.dataset.target;
    const targetContent = document.getElementById(targetId);
    const targetIcon = h.querySelector('svg');

    if (h.getAttribute('aria-expanded') === 'true') {
      targetContent.classList.add('hidden');
      h.setAttribute('aria-expanded', 'false');
      targetIcon.classList.remove('rotate-180');
    }
  });
}

function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarHeight = 64; 

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight + 1,
                    behavior: 'smooth'
                });
            }
        });
    });

    function highlightNavLink() {
        const currentScrollY = window.scrollY;

        let activeSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (currentScrollY >= sectionTop && currentScrollY < sectionBottom) {
                activeSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            if (link.querySelector('img')) {
                return; 
            }

            link.classList.remove('text-sky-900', 'font-bold', 'border-b-2', 'border-sky-900');
            link.classList.add('text-gray-700', 'hover:text-sky-900');

            if (link.getAttribute('href') === `#${activeSectionId}`) {
                link.classList.add('text-sky-900', 'font-bold', 'border-b-2', 'border-sky-900');
                link.classList.remove('text-gray-700');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); 
}

const navbarHeight = 64;

function renderSPV() {
  const appContainer = document.querySelector('#app');
  if (!appContainer) return;

  appContainer.innerHTML = `
    ${Navbar()}
    <main>
      ${HomeSection}
      ${EmpresaSection}
      ${ServiciosSection}
      ${ContactoSection}
    </main>
    ${Footer()}
    ${ModalTemplate}  `;
  
  initHorizontalCarousel();
  initServiceModals();
  initScrollSpy();
  initParallax();
  initScrollReveal();
  initTextRotator();
  initContactForm();

  const initialTarget = document.getElementById('inicio');
  if (initialTarget) {
      window.scrollTo({
          top: initialTarget.offsetTop - navbarHeight + 1, 
          behavior: 'smooth'
      });
  }
}



document.addEventListener('DOMContentLoaded', renderSPV);