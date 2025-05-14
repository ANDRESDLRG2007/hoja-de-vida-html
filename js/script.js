// Función para alternar la visibilidad de una sección específica
function toggleSeccion(id) {
  // Obtiene el elemento HTML que tiene el ID proporcionado como argumento
  const seccion = document.getElementById(id);
  
  // Verifica si el estilo "display" del elemento está configurado como "none" (oculto)
  if (seccion.style.display === "none") {
    // Si está oculto, cambia el estilo "display" a "block" para mostrar la sección
    seccion.style.display = "block";
  } else {
    // Si no está oculto, cambia el estilo "display" a "none" para ocultar la sección
    seccion.style.display = "none";
  }
}

// Agrega un evento que se ejecuta cuando el DOM (estructura del documento HTML) se ha cargado completamente
window.addEventListener("DOMContentLoaded", () => {
  // Obtiene el elemento con el ID "sobre-mi" y asegura que esté visible al cargar la página
  document.getElementById("sobre-mi").style.display = "block";
  
  // Obtiene el elemento con el ID "educacion" y asegura que esté visible al cargar la página
  document.getElementById("educacion").style.display = "block";
  
  // Obtiene el elemento con el ID "cursos" y asegura que esté visible al cargar la página
  document.getElementById("cursos").style.display = "block";
  
  // Obtiene el elemento con el ID "experiencia" y asegura que esté visible al cargar la página
  document.getElementById("experiencia").style.display = "block";
});
