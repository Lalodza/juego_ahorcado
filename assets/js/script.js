

var btnPlay = document.querySelector("#play"); 
btnPlay.onclick = createCanvas;
/* btnPlay.onclick = escogerPalabraSecreta; */

let palabraSec = [
    'alura','javascript','curso','programacion','oracle',
    'logica','iniciativa','aprender','canvas','escuela',
    'persistencia','eduardo','dedicacion','conocimiento'
];

var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext('2d');
pincel.fillStyle = '#633e0ec9';

function createCanvas (){
    pincel.fillRect(20,30,1200,800);
    escogerPalabraSecreta();
}

function escogerPalabraSecreta (){
    let palabra = palabraSec[Math.floor(Math.random()*palabraSec.length)];
    console.log(palabra);
}

