document.addEventListener("DOMContentLoaded", () => {
  const imagenes = [
    "img/Nieve.jpg",
    "img/Ventana.jpg",
  ];
  const frases = [
    "Está bien no estar bien.",
    "Lo que sientes tiene sentido, no estás loco y más si consideras todo lo que estás viviendo.",
    "Estoy aquí contigo. No estás solo.",
    "No hace falta que resuelvas todo a la vez, ve paso a paso.",
    "Tus emociones no son un problema. Son una señal de que necesitas prestar atención a algo.",
    "Permitete descansar. No tienes por qué ser fuerte ni 'seguir adelante' todo el tiempo.",
    "Lo que sientes ahora no define quién eres.",
  ];
  const audios = ["Audios/Getting_Older.mp3"];
  const memes = [
    {tipo: "img", src: "sos/meme/img2.webp"},
    {tipo: "video", src: "sos/meme/video12.mp4"},
    {tipo: "video", src: "sos/meme/video13.mp4"},
  ];

  const img = document.getElementById("imagen-mostrada");
  const frase = document.getElementById("frase-mostrada");
  const audio = document.getElementById("audio-mostrado");
  const memeContenedor = document.getElementById("meme-mostrado");

  function ocultarTodo() {
    img.style.display = "none";
    frase.style.display = "none";
    audio.style.display = "none";
    memeContenedor.style.display = "none";
    memeContenedor.innerHTML = "";
    audio.pause();
  }

  document.getElementById("boton-img").addEventListener("click", () => {
    ocultarTodo();
    const random = Math.floor(Math.random() * imagenes.length);
    img.src = imagenes[random];
    img.style.display = "block";
  });

  document.getElementById("boton-frase").addEventListener("click", () => {
    ocultarTodo();
    const random = Math.floor(Math.random() * frases.length);
    frase.textContent = frases[random];
    frase.style.display = "block";
  });

  document.getElementById("boton-audio").addEventListener("click", () => {
    ocultarTodo();
    const random = Math.floor(Math.random() * audios.length);
    audio.src = audios[random];
    audio.style.display = "block";
    audio.play();
  });

  document.getElementById("boton-meme").addEventListener("click", () => {
    ocultarTodo();
    const random = Math.floor(Math.random() * memes.length);
    const meme = memes[random];

    if (meme.tipo === "img") {
      memeContenedor.innerHTML = `<img src="${meme.src}" style="max-width: 100%;">`;
    } else if (meme.tipo === "video") {
      memeContenedor.innerHTML = `<video src="${meme.src}" controls style="max-width: 100%;"></video>`;
    }

    memeContenedor.style.display = "block";
  });
});