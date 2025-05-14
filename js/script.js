// Seleccionamos el botón con el id "contactar"
const botonContactar = document.getElementById("contactar");

// Agregamos un evento al hacer clic
botonContactar.addEventListener("click", function() {
  // Creamos el enlace de correo con asunto y cuerpo predefinido
  const correo = "andresdelarueg@gmail.com";
  const asunto = "Contactar por hoja de vida";
  const cuerpo = `Hola Andrés,%0A%0AEstoy interesado en tu hoja de vida.%0AQuedo atento a tu respuesta.`;
  
  // Abrimos el cliente de correo con mailto:
  window.location.href = `mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${cuerpo}`;
});