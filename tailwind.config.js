/** @type {import('tailwindcss').Config} */
export default {
  // Las rutas DEBEN coincidir con la ubicación real de tus archivos.
  content: [
    // 1. Archivo HTML en la raíz (Correcto)
    "./index.html",
    
    // 2. Todos los archivos JavaScript/TypeScript dentro de la carpeta 'src'
    "./src/**/*.{js,ts}",
    
    // NOTA: No es necesario especificar "./src/main.js" si ya incluiste "./src/**/*.{js,ts}".
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}