# web_itariff
Sitio web empresarial itariff.com.mx

# Tecnologias utilizadas:
- Vite -> Empaquetador y entorno de desarrollo rápido.
- JavaScript -> Lógica de la aplicación, routing de scroll, carrusel y modales.
- TailwindCSS - Framework CSS.
- Web3forms -> Servicio de envío de correo electrónico sin necesidad de backend.

# Instalación de Dependencias
Instala los módulos de Node.js (principalmente Tailwind CSS, y dependencias de Vite):

  npm install

# Configuración del Formulario (Web3forms)
Para que el formulario de contacto funcione, debes reemplazar el valor del campo access_key en src/main.js:

  - Obtén tu clave de acceso en Web3forms.
  - Abre src/main.js y reemplaza el placeholder:
    
    // Dentro de la constante ContactoSection:
    <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">

# Ejecutar el Servidor de Desarrollo
Inicia el entorno de desarrollo de Vite:

  npm run dev

# Despliegue (Deployment)
Este proyecto está configurado para un despliegue simple y estático (basado en HTML/JS).

Generar la Versión de Producción:

  npm run build
  Esto creará la carpeta dist/ con todos los archivos optimizados (HTML, CSS y JS).
