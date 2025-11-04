//variable "galerias" para cada album
const galerias = {
    reir: [
      { src: "img/3435196.jpg", desc: "Descripción." },
      { src: "img/3435196.jpg", desc: "Descripción." },
      { src: "img/3435196.jpg", desc: "Descripción." },
    ],
    ego: [
      { src: "img/3435196.jpg", desc: "Descripción." },
      { src: "img/3435196.jpg", desc: "Descripción." },
      { src: "img/3435196.jpg", desc: "Descripción." },
    ],
    hambre: [
      { src: "img/3435196.jpg", desc: "Descripción." },
      { src: "img/3435196.jpg", desc: "Descripción." },
      { src: "img/3435196.jpg", desc: "Descripción." },
    ],
    llorar: [
      { src: "img/3435196.jpg", desc: "Descripción." },
      { src: "img/3435196.jpg", desc: "Descripción." },
      { src: "img/3435196.jpg", desc: "Descripción." },
    ],
    porquesi: [
      { src: "img/3435196.jpg", desc: "Descripción." },
      { src: "img/3435196.jpg", desc: "Descripción." },
      { src: "img/3435196.jpg", desc: "Descripción." },
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