const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

const nuevoAño = '1 Jan 2022';

function temporizador(){
    const añoNuevoActual = new Date(nuevoAño);
    const fechaActual = new Date();
    
    const totalSeg = (añoNuevoActual - fechaActual) / 1000;

    const dias = Math.floor(totalSeg / 3600 / 24);

    const horas = Math.floor(totalSeg / 3600 ) % 24;

    const minuto = Math.floor(totalSeg / 60) % 60;

    const segundos = Math.floor(totalSeg) % 60;

    console.log(dias, horas, minuto, segundos);

    diasEl.innerHTML = dias; 
    horasEl.innerHTML = formatoHora(horas);
    minutosEl.innerHTML = formatoHora(minuto);
    segundosEl.innerHTML = formatoHora(segundos);

}

function formatoHora(time){
    return time < 10 ? `0${time}` : time;
}

temporizador();

setInterval(temporizador, 1000);

