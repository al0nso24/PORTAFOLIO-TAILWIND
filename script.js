document.addEventListener("DOMContentLoaded", function() {

    //Haciendo click en la imagen del pato sale el mensaje de "Hola".
    const patito = document.getElementById("pato");
    patito.addEventListener("click", function(){
        alert("Holaaaa");
    })

    
})

// Configuración de carruseles
const carruseles = {
  1: { slideActual: 0, totalSlides: 4 },
  2: { slideActual: 0, totalSlides: 6 },
  3: { slideActual: 0, totalSlides: 5 }
};

function moverCarrusel(id, direccion) {
  const carrusel = carruseles[id];
  carrusel.slideActual += direccion;
  
  if (carrusel.slideActual < 0) {
    carrusel.slideActual = carrusel.totalSlides - 1;
  } else if (carrusel.slideActual >= carrusel.totalSlides) {
    carrusel.slideActual = 0;
  }
  
  actualizarCarrusel(id);
}

function irASlide(id, index) {
  carruseles[id].slideActual = index;
  actualizarCarrusel(id);
}

function actualizarCarrusel(id) {
  const carruselElement = document.getElementById(`carrusel_${id}`);
  const carrusel = carruseles[id];
  
  carruselElement.style.transform = `translateX(-${carrusel.slideActual * 100}%)`;
  
  // Actualizar indicadores
  for (let i = 0; i < carrusel.totalSlides; i++) {
    const dot = document.getElementById(`dot-${id}-${i}`);
    if (i === carrusel.slideActual) {
      dot.classList.remove('bg-gray-400');
      dot.classList.add('bg-gray-600');
    } else {
      dot.classList.remove('bg-gray-600');
      dot.classList.add('bg-gray-400');
    }
  }
}

// Inicializar todos los carruseles
Object.keys(carruseles).forEach(id => actualizarCarrusel(id));