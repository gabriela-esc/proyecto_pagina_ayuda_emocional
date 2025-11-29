//variable "galerias" para cada album
const galerias = {
    reir: [
      { src: "https://picsum.photos/300/200?random=1", desc: "imágen random de ejemplo." },
      { src: "https://picsum.photos/300/200?random=2", desc: "imágen random de ejemplo." },
      { src: "https://picsum.photos/300/200?random=3", desc: "imágen random de ejemplo." },
    ],
    ego: [
      { src: "https://picsum.photos/300/200?random=4", desc: "imágen random de ejemplo." },
      { src: "https://picsum.photos/300/200?random=5", desc: "imágen random de ejemplo." },
      { src: "https://picsum.photos/300/200?random=6", desc: "imágen random de ejemplo." },
    ],
    hambre: [
      { src: "https://picsum.photos/300/200?random=7", desc: "imágen random de ejemplo." },
      { src: "https://picsum.photos/300/200?random=8", desc: "imágen random de ejemplo." },
      { src: "https://picsum.photos/300/200?random=9", desc: "imágen random de ejemplo." },
    ],
    llorar: [
      { src: "https://picsum.photos/300/200?random=10", desc: "imágen random de ejemplo." },
      { src: "https://picsum.photos/300/200?random=11", desc: "imágen random de ejemplo." },
      { src: "https://picsum.photos/300/200?random=12", desc: "imágen random de ejemplo." },
    ],
    porquesi: [
      { src: "https://picsum.photos/300/200?random=13", desc: "imágen random de ejemplo." },
      { src: "https://picsum.photos/300/200?random=14", desc: "imágen random de ejemplo." },
      { src: "https://picsum.photos/300/200?random=15", desc: "imágen random de ejemplo." },
    ]
  };

//Variables para los botones y descripciones
  const botones = document.querySelectorAll('.hover-box img');
  const galeria = document.getElementById('galeria');
  const foto = document.getElementById('foto');
  const descripcion = document.getElementById('descripcion');
  const anterior = document.getElementById('anterior');
  const siguiente = document.getElementById('siguiente');
  const cerrar = document.getElementById('cerrar');

  let actual = 0;
  let imagenes = [];

//Se muestran las fotos de la galería.
  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      const tipo = boton.dataset.galeria;
      imagenes = galerias[tipo];
      actual = 0;
      mostrarImagen();
      galeria.style.display = 'flex';
    });
  });

//Se establecen las funciones para cada botón
  function mostrarImagen() {
    foto.src = imagenes[actual].src;
    descripcion.textContent = imagenes[actual].desc;
  }

  siguiente.addEventListener('click', () => {
    actual = (actual + 1) % imagenes.length;
    mostrarImagen();
  });

  anterior.addEventListener('click', () => {
    actual = (actual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
  });

  cerrar.addEventListener('click', () => {
    galeria.style.display = 'none';
  });