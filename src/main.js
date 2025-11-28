
import './styles/style.css';
import AdministracionIcon from './assets/administracion.png';
import AuditoriaIcon from './assets/auditoria.png';
import AuditoriasIcon from './assets/auditorias.png';
import CapacitacionIcono from './assets/capacitacion.png';
import CoachingIcono from './assets/coaching.png';
import AsesoriaIcon from './assets/asesoria.png';
import PropuestaValorImage from './assets/propuestavalor.png';
import BackgroundServiceImage from './assets/background.jpg';
import LogoBlue from './assets/logoBlue.png';
import Anexo24Icon from './assets/anexo24.png';
import Anexo30Icon from './assets/anexo30.png';
import CumplimientoIcon from './assets/cumplimientoIcon.png';
import LogoWhite from './assets/logo.png';
import BackgroundContactImage from './assets/background2.jpg';

import AutorizacionesIcon from './assets/AutorizacionesIcon.png';
import ImpuestosAduanerosIcon from './assets/ImpuestosAduanerosIcon.png';
import ExpedientesPedimentosIcon from './assets/ExpedientesPedimentosIcon.png';
import ValidacionSaldosIcon from './assets/ValidacionSaldosIcon.png';
import ControlInventariosAnexo24Icon from './assets/ControlInventariosAnexo24Icon.png';
import ProcessAnexo30Icon from './assets/ProcessAnexo30Icon.png';
import LegalActivosFijosIcon from './assets/LegalActivosFijosIcon.png';

import HeroVideo from './assets/HeroVideo.mp4';

import esContent from './lang/es.json';
import enContent from './lang/en.json';

let currentLang = 'es'; 
const allContent = {
    es: esContent,
    en: enContent
};

const t = (keyPath) => {
    const content = allContent[currentLang] || allContent['es'];
    const keys = keyPath.split('.');
    let value = content;

    for (const key of keys) {
        if (value && value[key]) {
            value = value[key];
        } else {
            return `[MISSING KEY: ${keyPath}]`;
        }
    }
    return value;
};

function getHeroTexts() {
  return [
    {
      title: t('hero_rotator.0.title'),
      description: t('hero_rotator.0.description')
    },
    {
      title: t('hero_rotator.1.title'),
      description: t('hero_rotator.1.description')
    },
    {
      title: t('hero_rotator.2.title'),
      description: t('hero_rotator.2.description')
    },
    {
      title: t('hero_rotator.3.title'),
      description: t('hero_rotator.3.description')
    },
  ];
}

function getProcessSteps() {
  return [
    { 
      title: t('cumplimiento.paso_1_title'),
      iconPath: AutorizacionesIcon,
      description: t('cumplimiento.paso_1_desc'),
    },
    { 
      title: t('cumplimiento.paso_2_title'),
      iconPath: ImpuestosAduanerosIcon,
      description: t('cumplimiento.paso_2_desc'),
    },
    { 
      title: t('cumplimiento.paso_3_title'),
      iconPath: ExpedientesPedimentosIcon,
      description: t('cumplimiento.paso_3_desc'),
    },
    { 
      title: t('cumplimiento.paso_4_title'),
      iconPath: ValidacionSaldosIcon,
      description: t('cumplimiento.paso_4_desc'),
    },
    { 
      title: t('cumplimiento.paso_5_title'),
      iconPath: ControlInventariosAnexo24Icon,
      description: t('cumplimiento.paso_5_desc'),
    },
    { 
      title: t('cumplimiento.paso_6_title'),
      iconPath: ProcessAnexo30Icon,
      description: t('cumplimiento.paso_6_desc'),
    },
    { 
      title: t('cumplimiento.paso_7_title'),
      iconPath: LegalActivosFijosIcon,
      description: t('cumplimiento.paso_7_desc'),
    },
  ];
}

const HomeSection = () => `
  <section id="inicio" class="relative h-screen flex flex-col items-center justify-center overflow-hidden">
    
    <div class="absolute inset-0 z-0 bg-sky-900">
        <video 
            autoplay 
            loop 
            muted 
            playsinline 
            class="w-full h-full object-cover transform-gpu">
            <source src="${HeroVideo}" type="video/mp4">
        </video>
        
        <div class="absolute inset-0 bg-black opacity-30"></div> 
    </div>
    
    <div id="hero-content" class="relative z-10 text-center text-white p-4">
        
        <img src="${LogoWhite}" alt="ITARIFF Logo" class="w-64 h-auto mx-auto mb-6 drop-shadow-lg"/> 
        
        <div class="h-12 mb-2 flex items-center justify-center">
            <h1 id="rotating-text" class="text-2xl md:text-3xl font-semibold drop-shadow-md opacity-0 transition-opacity duration-700 ease-out">
                </h1>
        </div>
        
        <div class="h-20 mb-8 flex items-center justify-center max-w-lg mx-auto">
            <p id="rotating-description" class="text-base md:text-lg font-light drop-shadow-md opacity-0 transition-opacity duration-700 ease-out">
                </p>
        </div>
        
        <a href="#servicios" class="nav-link bg-white text-sky-900 font-bold py-3 px-8 rounded-lg shadow-xl transition duration-300 inline-block">
            ${t('hero.cta')}
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

const ClientesSection = () => `
  <section id="clientes" class="py-20 bg-white">
    <div class="container mx-auto px-4 text-center scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-4">
        ${t('empresa.clientes_title')}
      </h2>
      <p class="text-gray-600 mb-12">
        
      </p>

      <div class="relative w-full overflow-hidden">
        <div id="horizontal-carousel-wrapper" class="relative">
            <div id="horizontal-carousel" class="flex transition-transform duration-500 ease-in-out">
                
                ${createClientItem('BoltIcon', t('empresa.clientes_card_1') )}
                ${createClientItem('TruckIcon', t('empresa.clientes_card_2') )}
                ${createClientItem('CogIcon', t('empresa.clientes_card_3') )}
                ${createClientItem('HomeIcon', t('empresa.clientes_card_4' ))}
                ${createClientItem('ScissorsIcon', t('empresa.clientes_card_5'))}
                ${createClientItem('ToolIcon', t('empresa.clientes_card_6'))}
                
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

const EmpresaSection = () => `
  <section id="empresa" class="min-h-screen bg-white py-20 border-b border-gray-200">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-5xl font-bold text-gray-800 mb-4">
        ${t('empresa.title')}
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
          <h3 class="text-2xl font-semibold text-sky-900 mb-3">${t('empresa.mision_title')}</h3>
          <p class="text-gray-600 text-base">${t('empresa.p_mision')}</p>
        </div>
        
        <div class="p-6 shadow-xl rounded-lg  hover:shadow-2xl scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out border border-gray-200">
          <div class="inline-flex p-3 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14 text-sky-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-sky-900 mb-3">${t('empresa.vision_title')}</h3>
          <p class="text-gray-600 text-base">${t('empresa.p_vision')}</p>
        </div>
        
        <div class="p-6 shadow-xl rounded-lg  hover:shadow-2xl scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out border border-gray-200">
          <div class="inline-flex p-3 mb-4">
            <svg class="size-14 text-sky-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6h4.5M12 21a9 9 0 100-18 9 9 0 000 18Z" />
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-sky-900 mb-3">${t('empresa.historia_title')}</h3>
          <p class="text-gray-600 text-base">${t('empresa.p_historia')}</p>
        </div>
      </div>
    </div>
    
    ${ClientesSection()}
  </section>
`;


const PropuestaValorSection = () => `
  <div class="flex justify-center items-start lg:h-full lg:py-12">
    <div class="scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out bg-white p-8 rounded-xl shadow-2xl max-w-md w-full border border-gray-200"> 
      
      <div class="flex justify-center mb-4">
        <img src="${PropuestaValorImage}" alt="Propuesta de Valor Imagen" class="w-24 h-24 object-cover rounded-full"/>
      </div>
      
      <h3 class="text-3xl font-bold text-sky-900 mb-6 text-center pb-2">
        ${t('servicios.propuesta_valor_title')}
      </h3>

      <p class="text-gray-700 mb-6 leading-relaxed text-base text-center">
        ${t('servicios.propuesta_valor_text')}
      </p>

      <ul class="space-y-3 text-gray-700 text-base">
        <li class="flex items-start">
            <span class="font-bold text-sky-900 mr-2 flex-shrink-0">1.</span>
            <p>${t('servicios.valor_cliente')}</p>
        </li>
        <li class="flex items-start">
            <span class="font-bold text-sky-900 mr-2 flex-shrink-0">2.</span>
            <p>${t('servicios.valor_adaptacion')}</p>
        </li>
        <li class="flex items-start">
            <span class="font-bold text-sky-900 mr-2 flex-shrink-0">3.</span>
            <p>${t('servicios.valor_mejoras')}</p>
        </li>
        <li class="flex items-start">
            <span class="font-bold text-sky-900 mr-2 flex-shrink-0">4.</span>
            <p>${t('servicios.valor_sinergias')}</p>
        </li>
        <li class="flex items-start">
            <span class="font-bold text-sky-900 mr-2 flex-shrink-0">5.</span>
            <p>${t('servicios.valor_tranquilidad')}</p>
        </li>
      </ul>
    </div>
  </div>
`;

const ServiciosGrid = () => `
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 h-full py-12 w-full mx-auto">
    
    <div class="scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out service-card cursor-pointer p-6 shadow-xl rounded-lg bg-white hover:shadow-2xl border border-gray-200 text-center flex flex-col justify-between items-center" data-service-id="anexo24">
        <div>
            <img src="${Anexo24Icon}" alt="Anexo 24" class="w-16 h-16 object-cover mx-auto mb-4"/>
            <h3 class="text-xl font-bold text-sky-900 mb-2">${t('servicios.anexo24_title')}</h3>
            <p class="text-gray-600 text-base mb-4">${t('servicios.anexo24_desc')}</p>
        </div>
        <div class="mt-auto text-base font-semibold text-sky-700 flex items-center hover:text-sky-900">
            ${t('servicios.details_cta')}
        </div>
    </div>

    <div class="scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out service-card cursor-pointer p-6 shadow-xl rounded-lg bg-white hover:shadow-2xl border border-gray-200 text-center flex flex-col justify-between items-center" data-service-id="anexo30">
        <div>
            <img src="${Anexo30Icon}" alt="Anexo 30" class="w-16 h-16 object-cover mx-auto mb-4"/>
            <h3 class="text-xl font-bold text-sky-900 mb-2">${t('servicios.anexo30_title')}</h3>
            <p class="text-gray-600 text-base mb-4">${t('servicios.anexo30_desc')}</p> 
        </div>
        <div class="mt-auto text-base font-semibold text-sky-700 flex items-center hover:text-sky-900">
            ${t('servicios.details_cta')}
        </div>
    </div>
    
    <div class="md:col-span-2 flex justify-center mt-4"> 
        <div class="scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out service-card cursor-pointer p-6 shadow-xl rounded-lg bg-white hover:shadow-2xl border border-gray-200 text-center flex flex-col justify-between items-center" data-service-id="cumplimiento"> 
            <div>
                <img src="${CumplimientoIcon}" alt="Gestión Integral" class="w-16 h-16 object-cover rounded-full mx-auto mb-4"/>
                <h3 class="text-xl font-bold text-sky-900 mb-2">${t('servicios.cumplimiento_title')}</h3>
                <p class="text-gray-600 text-base mb-4">${t('servicios.cumplimiento_desc')}</p>
            </div>
            <div class="mt-auto text-base font-semibold text-sky-700 flex items-center hover:text-sky-900">
                ${t('servicios.details_cta')}
            </div>
        </div>
    </div>

  </div>
`;

const ServiciosSection = () => `
  <section id="servicios" class="min-h-screen relative py-12 border-b border-gray-200 flex items-center overflow-hidden">
    
    <div class="absolute inset-0 z-0 bg-cover bg-center" 
         style="background-image: url(${BackgroundServiceImage});">
      <div class="absolute inset-0 bg-sky-900 opacity-80"></div> 
    </div>

    <div class="container mx-auto px-4 relative z-10"> <h2 class="text-4xl font-extrabold text-center text-white mb-8">${t('servicios.title')}</h2> 
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <div class="flex justify-center">
          ${PropuestaValorSection()}
        </div>
        
        <div class="lg:pl-4 flex items-center">
            ${ServiciosGrid()}
        </div>
        
      </div>
    </div>
  </section>
`;

const ModalTemplate = () => `
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

/*
// ---> CAMBIAR 'value="d9d4f178-431c-4d1b-8fc4-8be6cbc585f0"' POR CLAVE ITARIFF DE ACCESO DE WEB3FORMS <--- //
const ContactoSection = () => `
  <!-- Hacemos la sección relativa para poder posicionar el fondo absoluto -->
  <section id="contacto" class="min-h-screen py-20 relative overflow-hidden">
    
    <!-- Fondo de Imagen con Overlay -->
    <div class="absolute inset-0 z-0 bg-cover bg-center" 
         style="background-image: url(${BackgroundContactImage});">
      <div class="absolute inset-0 bg-sky-900 opacity-80"></div> 
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-5xl font-bold text-center text-white mb-12">${t('contacto.title')}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div>
          <h3 class="text-3xl font-bold text-white mb-4">${t('contacto.form_title')}</h3> 
          <form 
            id="contacto-form" 
            action="https://api.web3forms.com/submit" 
            method="POST" 
            class="space-y-4 shadow-2xl p-6 rounded-lg bg-white/95 border border-gray-100 scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out"
          >
            <input type="hidden" name="access_key" value="d9d4f178-431c-4d1b-8fc4-8be6cbc585f0"> 
            
            <!-- Campos se mantienen igual, solo aseguramos que el fondo del formulario sea claro (bg-white/95) -->
            <input type="text" name="Nombre" placeholder="${t('contacto.name_placeholder')}" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500">
            <input type="email" name="Correo" placeholder="${t('contacto.email_placeholder')}" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500">
            <input type="text" name="Asunto" placeholder="${t('contacto.subject_placeholder')}" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500">
            <textarea name="Mensaje" placeholder="${t('contacto.message_placeholder')}" rows="5" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"></textarea>
            
            <button type="submit" id="submit-btn" class="bg-sky-900 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
              ${t('contacto.send_button')}
            </button>
            <p id="form-status" class="text-center font-semibold mt-4 hidden"></p>
          </form>
        </div>
        
        <div>
          <h3 class="text-3xl font-bold text-white mb-4">${t('contacto.info_title')}</h3>
          
          <div class="bg-white/95 p-6 rounded-lg mb-6 shadow-md scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <!-- CAMBIO: Texto y spans en tonos oscuros para el fondo claro -->
            <p class="text-gray-800 mb-2 font-semibold">
              <span class="text-sky-900">${t('contacto.phone')}</span> (81) 8000-0332
            </p>
            <p class="text-gray-800 font-semibold">
              <span class="text-sky-900">${t('contacto.address')}</span> Av. Revolución No. exterior 2703-2, Interior piso 1 y 2. Col. Ladrillera, CP 64830 Monterrey Nuevo León
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
`; */

const ContactoSection = () => `
  <section id="contacto" class="min-h-screen py-20 relative overflow-hidden">
    <div class="absolute inset-0 z-0 bg-cover bg-center" 
         style="background-image: url(${BackgroundContactImage});">
      <div class="absolute inset-0 bg-sky-900 opacity-80"></div> 
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-5xl font-bold text-center text-white mb-12">${t('contacto.title')}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <!-- LEFT: HubSpot form -->
        <div>
          <h3 class="text-3xl font-bold text-white mb-4">${t('contacto.form_title')}</h3> 
          
          <div id="hubspot-form-wrapper"
               class="space-y-4 shadow-2xl p-6 rounded-lg bg-white/95 border border-gray-100 scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <!-- HubSpot will inject the form into this div -->
            <div
              class="hs-form-frame"
              data-region="na1"
              data-form-id="16f81165-00bd-4aea-a4b0-a6a33133581e"
              data-portal-id="50747875">
            </div>
          </div>
        </div>
        
        <!-- RIGHT: info box & map (unchanged) -->
        <div>
          <h3 class="text-3xl font-bold text-white mb-4">${t('contacto.info_title')}</h3>
          
          <div class="bg-white/95 p-6 rounded-lg mb-6 shadow-md scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <p class="text-gray-800 mb-2 font-semibold">
              <span class="text-sky-900">${t('contacto.phone')}</span> (81) 8000-0332
            </p>
            <p class="text-gray-800 font-semibold">
              <span class="text-sky-900">${t('contacto.address')}</span> Av. Revolución No. exterior 2703-2, Interior piso 1 y 2. Col. Ladrillera, CP 64830 Monterrey Nuevo León
            </p>
          </div>
          
          <div class="h-80 rounded-lg shadow-xl overflow-hidden border-4 border-white scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <!-- your iframe map -->
            ...
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const CumplimientoMovilSection = () => {
    return `
        <div id="cumplimiento-cards" class="grid grid-cols-1 gap-6 md:hidden"> 
                  ${getProcessSteps().map((step, index) => `
                <div class="scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <div class="flex items-start space-x-4 mb-3">
                        <span class="w-10 h-10 flex items-center justify-center rounded-full bg-sky-900 text-white font-bold text-lg flex-shrink-0">${index + 1}</span>
                        <div>
                            <h3 class="text-xl font-bold text-sky-900">${step.title}</h3>
                            <p class="text-gray-600 text-sm">${step.description}</p>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
};

const CumplimientoAduaneroSection = () => `
  <section id="cumplimiento" class="min-h-screen py-12 bg-white flex items-start justify-center">
    <div class="container mx-auto px-4 scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
      
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-2">${t('cumplimiento.main_title')}</h2>
      <p class="text-xl text-gray-600 text-center mb-16">${t('cumplimiento.subtitle')}</p>

      <div class="hidden md:flex justify-center items-center w-full">

        <div id="process-wheel" class="relative w-[380px] h-[380px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] mt-8"> 
            
            <!-- CLAVE: p-4 se cambia a p-8, y se elimina max-h-24 y overflow-y-auto -->
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] flex flex-col items-center justify-center text-center bg-sky-50 p-8 rounded-full shadow-xl z-10 border-4 border-sky-200 transition-all duration-300 ease-out">
                

                <div class="mb-2">
                  <img id="process-step-icon" class="w-16 h-16 mx-auto object-cover" alt="Icono de Proceso">
                </div>
                
                <span id="process-step-title" class="text-base md:text-lg font-bold text-sky-900 mb-1">
                    Diagnóstico Inicial
                </span>
                
                <p id="process-step-description" class="text-xs md:text-sm text-gray-600"> 
                    Evaluamos su operación actual y sus sistemas de control para identificar áreas de incumplimiento potencial o riesgo de auditoría.
                </p>
            </div>

            ${getProcessSteps().map((step, index) => `
                <button 
                    class="process-indicator absolute w-20 h-20 rounded-full bg-sky-900 shadow-lg text-white font-bold text-xl flex items-center justify-center hover:bg-sky-700 transition-colors duration-300"
                    data-step="${index}" 
                    style="${getIndicatorPosition(index)}" 
                    aria-label="${step.title}"
                >
                    ${index + 1}
                </button>
            `).join('')}
        </div>

      </div>
      ${CumplimientoMovilSection()}
    </div>
  </section>
`;

const Navbar = () => {
    const navContent = allContent[currentLang].nav;
    return `
      <header class="sticky top-0 z-50 bg-white shadow-lg">
        <nav class="container mx-auto p-4 flex justify-between items-center relative">
          
          <!-- Logo Escritorio -->
          <a href="#inicio" class="nav-link flex items-center py-1 hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2">
            <img src="${LogoBlue}" alt="ITARIFF Logo" class="h-12 w-auto">
          </a>
          
          <!-- Logo Móvil -->
          <a href="#inicio" class="nav-link mobile-logo-link block md:hidden flex items-center">
            <img src="${LogoBlue}" alt="ITARIFF Logo Móvil" class="h-8 w-auto"> 
          </a>
          
          <!-- Botón de Hamburguesa -->
          <button id="menu-toggle" class="md:hidden p-2 text-sky-900 focus:outline-none ml-auto">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>

          <!-- Menú Desktop -->
          <div id="nav-links-desktop" class="hidden md:flex md:space-x-6 md:w-auto md:ml-auto md:mr-4 items-center">
            <a href="#inicio" class="nav-link text-gray-700 hover:text-sky-900 font-medium transition duration-150">${navContent.inicio}</a>
            <a href="#empresa" class="nav-link text-gray-700 hover:text-sky-900 font-medium transition duration-150">${navContent.empresa}</a>
            <a href="#servicios" class="nav-link text-gray-700 hover:text-sky-900 font-medium transition duration-150">${navContent.servicios}</a>
            <a href="#cumplimiento" class="nav-link text-gray-700 hover:text-sky-900 font-medium transition duration-150">${navContent.cumplimiento}</a>
            <a href="#contacto" class="nav-link text-gray-700 hover:text-sky-900 font-medium transition duration-150">${navContent.contacto}</a>

            <!-- Botón de Idioma (ESCRITORIO) - AGREGAMOS ID -->
            <button id="lang-toggle" class="ml-4 p-2 rounded-full bg-gray-100 hover:bg-sky-100 text-sky-900 font-bold text-sm">
                ${allContent[currentLang].lang_switch}
            </button>
          </div>
        </nav>

        <!-- Dropdown del Menú Móvil -->
        <div id="mobile-menu" class="md:hidden hidden absolute w-full bg-white shadow-lg border-t border-gray-100 z-40">
            <a href="#inicio" class="nav-link block p-3 text-center text-sky-900 font-semibold border-b border-gray-100">${navContent.inicio}</a>
            <a href="#empresa" class="nav-link block p-3 text-center text-sky-900 font-semibold border-b border-gray-100">${navContent.empresa}</a>
            <a href="#servicios" class="nav-link block p-3 text-center text-sky-900 font-semibold border-b border-gray-100">${navContent.servicios}</a>
            <a href="#cumplimiento" class="nav-link block p-3 text-center text-sky-900 font-semibold border-b border-gray-100">${navContent.cumplimiento}</a>
            <a href="#contacto" class="nav-link block p-3 text-center text-sky-900 font-semibold">CONTACTO</a>
            
            <!-- Botón de Idioma (MÓVIL) - AGREGAMOS ID -->
            <button id="lang-toggle-mobile" class="w-full p-3 text-center bg-sky-50 text-sky-900 font-bold border-t border-gray-100">
                ${allContent[currentLang].lang_switch}
            </button>
        </div>
      </header>
    `;
};

const Footer = () => `
  <footer class="bg-gray-900 text-white p-6 text-center">
    <p>© Copyright 2025  ITARIFF</p>
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
        status.textContent = t('contacto.status_sending');
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
                status.textContent = t('contacto.status_success');
                status.classList.remove('text-sky-900', 'text-red-600');
                status.classList.add('text-green-600');
                form.reset(); // Limpiar formulario
            } else {
                status.textContent = result.message || t('contacto.status_error');;
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

function initHubspotForm() {
  // Script not loaded yet? Bail out.
  if (!window.hbspt || !window.hbspt.forms) return;

  const frame = document.querySelector('.hs-form-frame');
  if (!frame) return;

  // Avoid double-initialization if HubSpot has already rendered a form here
  if (frame.dataset.hsInitialized === 'true') return;

  frame.dataset.hsInitialized = 'true';

  window.hbspt.forms.create({
    region: frame.dataset.region || 'na1',
    portalId: frame.dataset.portalId,
    formId: frame.dataset.formId,
    target: '.hs-form-frame'
  });
}

function changeLanguage() {
    currentLang = (currentLang === 'es') ? 'en' : 'es';
    const scrollPosition = window.scrollY;
    renderSPV(); 
    
    window.scrollTo(0, scrollPosition);
    setupLangToggleListeners(); 
}

function setupLangToggleListeners() {
    const desktopBtn = document.getElementById('lang-toggle');
    const mobileBtn = document.getElementById('lang-toggle-mobile');
    
    if (desktopBtn) desktopBtn.addEventListener('click', changeLanguage);
    if (mobileBtn) mobileBtn.addEventListener('click', changeLanguage);
}

function initMobileMenu() {
    const toggleButton = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = mobileMenu.querySelectorAll('.nav-link');

    if (!toggleButton || !mobileMenu) return;

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden'); 
    }

    toggleButton.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
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
      title: t('servicios.modal_title_anexo24'),
      image: Anexo24Icon,
      description: t('servicios.modal_desc_anexo24'),
      subServices: [
        {
          icon: AdministracionIcon,
          name: t('servicios.sub_admin24_title'),
          description: t('servicios.sub_admin24_desc')
        },
        {
          icon: AuditoriaIcon,
          name: t('servicios.sub_audit24_title'),
          description: t('servicios.sub_audit24_desc')
        },
      ],
    },
    'anexo30': {
      title: t('servicios.modal_title_anexo30'),
      image: Anexo30Icon,
      description: t('servicios.modal_desc_anexo30'),
      subServices: [
        {
          icon: AdministracionIcon,
          name: t('servicios.sub_admin30_title'),
          description: t('servicios.sub_admin30_desc')
        },
        {
          icon: AuditoriaIcon, 
          name: t('servicios.sub_audit30_title'),
          description: t('servicios.sub_audit30_desc')
        },
      ],
      details: null
    },
    'cumplimiento': {
      title: t('servicios.modal_title_cumplimiento'),
      image: CumplimientoIcon,
      description: t('servicios.modal_desc_cumplimiento'),
      subServices: [
        {
          icon: AuditoriasIcon,
          name: t('servicios.sub_audit_prevention_title'),
          description: t('servicios.sub_audit_prevention_desc')
        },
        {
          icon: CapacitacionIcono, 
          name: t('servicios.sub_capacitacion_title'),
          description: t('servicios.sub_capacitacion_desc')
        },
        {
          icon: CoachingIcono,
          name: t('servicios.sub_coaching_title'),
          description: t('servicios.sub_coaching_desc')
        },
      ],
      details: null
    },
  };
  return serviceDataMap[id];
}

function getIndicatorPosition(index) {
    const angle = (index / 7) * 2 * Math.PI - (Math.PI / 2); 
    const radius = 50; 

    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);

    return `left: ${x}%; top: ${y}%; transform: translate(-50%, -50%);`;
}

function initTextRotator() {
    const titleElement = document.getElementById('rotating-text');
    const descElement = document.getElementById('rotating-description');
    
    if (!titleElement || !descElement) return;

  const heroTexts = getHeroTexts();
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

let complianceWheelInterval;
let currentComplianceStep = 0;

function initComplianceWheel() {
  const steps = getProcessSteps();
  if (!steps || !steps.length) {
    console.error("Error: processSteps no está definido o está vacío.");
    return;
  }

  const indicators = document.querySelectorAll('.process-indicator');
  const titleEl = document.getElementById('process-step-title');
  const descriptionEl = document.getElementById('process-step-description');
  const iconEl = document.getElementById('process-step-icon'); 
  const centerContent = document.querySelector('#process-wheel > div'); 

  if (!indicators.length) return;
    
  function autoAdvance() {
    currentComplianceStep = (currentComplianceStep + 1) % steps.length;
    updateContent(currentComplianceStep, false);
  }
  function startAutoAdvance() {
    clearInterval(complianceWheelInterval); 
    complianceWheelInterval = setInterval(autoAdvance, 5000); 
  }

  function stopAutoAdvance() {
    clearInterval(complianceWheelInterval);
    complianceWheelInterval = null; 
  }

  function updateContent(stepIndex, isUserInteraction = false) {
        
    if (isUserInteraction && complianceWheelInterval !== null) {
      stopAutoAdvance();
    }
        
    const data = steps[stepIndex];

    centerContent.classList.add('opacity-0', 'translate-y-4'); 

    setTimeout(() => {
      titleEl.textContent = data.title;
      descriptionEl.textContent = data.description;
            
      if (iconEl && data.iconPath) {
        iconEl.src = data.iconPath; 
      }

      indicators.forEach(btn => btn.classList.remove('bg-sky-700', 'ring-4', 'ring-sky-200'));
            
      const currentBtn = document.querySelector(`.process-indicator[data-step="${stepIndex}"]`);
      if (currentBtn) {
        currentBtn.classList.add('bg-sky-700', 'ring-4', 'ring-sky-200');
      }

      centerContent.classList.remove('opacity-0', 'translate-y-4');
    }, 300); 
        
    currentComplianceStep = stepIndex; 
  }

  indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
      const stepIndex = parseInt(indicator.dataset.step);
      updateContent(stepIndex, true); 
    });
  });

  updateContent(0, false)
  startAutoAdvance();
}

const navbarHeight = 64;

function renderSPV() {
  const appContainer = document.querySelector('#app');
  if (!appContainer) return;

  appContainer.innerHTML = `
    ${Navbar()}
    <main>
      ${HomeSection()}
      ${EmpresaSection()}
      ${ServiciosSection()}
      ${CumplimientoAduaneroSection()}
      ${ContactoSection()}
    </main>
    ${Footer()}
    ${ModalTemplate()}  `;
  try {
    document.body.style.overflow = '';
    document.body.classList.remove('overflow-hidden');
  } catch (e) {
  }
  initHorizontalCarousel();
  initServiceModals();
  initScrollSpy();
  initScrollReveal();
  initTextRotator();
  //initContactForm();
  initComplianceWheel();
  initMobileMenu();
  setupLangToggleListeners();
  // *** Aquí inicializas HubSpot ***
  initHubspotForm();

  const initialTarget = document.getElementById('inicio');
  if (initialTarget) {
      window.scrollTo({
          top: initialTarget.offsetTop - navbarHeight + 1, 
          behavior: 'smooth'
      });
  }
}



document.addEventListener('DOMContentLoaded', renderSPV);