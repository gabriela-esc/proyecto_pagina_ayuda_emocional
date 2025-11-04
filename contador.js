//Fecha inicio (Año, Mes-1, Día, Hora, Minuto, Segundo)
const fechaInicio = new Date(2018,7,1,0,0,0);

//Contador - función.
function actualizarContador(){
    const ahora=new Date();
    const diferenciaMs=ahora-fechaInicio;

    //Total en segundos
    let totalSegundos=Math.floor(diferenciaMs/1000);

    //Cálculos
    const dias=Math.floor(totalSegundos/(60*60*24));
    totalSegundos%=(60*60*24);

    const horas=Math.floor(totalSegundos/3600);
    totalSegundos%=3600;

    const minutos=Math.floor(totalSegundos/60);
    const segundos=totalSegundos%60;

    //Formato con ceros a la izquierda
    const formato = `${dias} dias, ${String(horas).padStart(2, '0')} horas, ${String(minutos).padStart(2, '0')} minutos y ${String(segundos).padStart(2, '0')} segundos`;

    //Se muestra en el HTML
    document.getElementById("contador").textContent=`✨🤍Llevas cuidándote ${formato}🤍✨`;
}

//Actualizar al cargar
actualizarContador();
//Actualizar cada segundo
setInterval(actualizarContador,1000);