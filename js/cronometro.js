function obtenerFecha(){
    let fecha = new Date();

    let dDia = document.getElementById('dia'),
    dMes = document.getElementById('mes'),
    dAnio = document.getElementById('anio');

    dDia.innerText = fecha.getDate();
    dMes.innerText = fecha.getMonth();
    dAnio.innerText = fecha.getFullYear();

    if(parseInt(dDia.innerText)<10){
        dDia.innerText = "0"+ dDia.innerText;
    }

    if(fecha.getMonth() <10){
        dMes.innerText = "0" + (fecha.getMonth()+1);
    } else {
        dMes.innerText = fecha.getMonth();
    }
}

window.setInterval(obtenerFecha,1000);

let estado = false;
let contador = 0;
let tiempoInicial;
let control;
let dMinutos = document.getElementById("minutos"),
dSegundos = document.getElementById("segundos"),
dCentesimas = document.getElementById("centesimas");

function iniciar(){
    if(estado == false){ //solo si esta parado
        tiempoInicial = new Date();
        control = setInterval(cronometro,10);
        estado = true;
        let botonPlay = document.getElementById("btnPlay");
        botonPlay.innerHTML = '<i class="fas fa-pause fa-2x text-white"></i>';
    } else if(estado == true){
        clearInterval(control);
        estado = false;
        let botonPlay = document.getElementById("btnPlay");
        botonPlay.innerHTML = '<i class="fas fa-play fa-2x text-white"></i>';
    }
}

function cronometro(){
    let minutos, segundos, centesimas;
    let tiempoActual = new Date();
    contador = tiempoActual - tiempoInicial;
    let acTiempo = new Date();
    let contador2 = acTiempo.setTime(contador);
    centesimas = acTiempo.getMilliseconds();
    centesimas = centesimas/10;
    centesimas = Math.round(centesimas);
    // mostrar por pantalla
    dCentesimas.innerText = centesimas;
    segundos = acTiempo.getSeconds();
    dSegundos.innerText = segundos;
    minutos = acTiempo.getMinutes();
    dMinutos.innerText = minutos;
    if(centesimas<10){
        dCentesimas.innerText = "0"+ centesimas;
    }
    if(segundos<10){
        dSegundos.innerText = "0"+ segundos;
    }
    if(minutos<10){
        dMinutos.innerText = "0"+ minutos;
    }
    
}

function parar(){
    if(estado == true){
        clearInterval(control);
        // estado = false;
    }
}

function resetear(){
    if(estado == true){
        clearInterval(control);
        estado = false;
    }
    contador = 0;
    dCentesimas.innerText = "00";
    dSegundos.innerText = "00";
    dMinutos.innerText = "00";  
}

function reanudar(){
    if(estado == false){
        console.log("estamos dentro de la funcion pausar")
        let tiempoActual = new Date();
        tiempoActual = tiempoActual.getTime();
        let acumulador = tiempoActual - contador;
        tiempoInicial = new Date();
        tiempoInicial.setTime(acumulador);
        control = setInterval(cronometro,10);
        estado = true;
    }
}

// function pausar(){
//     if(estado == true){
//         clearInterval(control);
//     }
// }