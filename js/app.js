import {validarElemento} from "./validaciones.js"
import {agregarTexto} from "./textosAgregados.js"

let aries = document.getElementById("aries");
let tauro = document.getElementById("tauro");
let geminis = document.getElementById("geminis");
let cancer = document.getElementById("cancer");
let leo = document.getElementById("leo");
let virgo = document.getElementById("virgo");
let libra = document.getElementById("libra");
let escorpio = document.getElementById("escorpio");
let sagitario = document.getElementById("sagitario");
let capricornio = document.getElementById("capricornio");
let acuario = document.getElementById("acuario");
let piscis = document.getElementById("piscis");
let botonNacimiento = document.getElementById("btnFechaNacimiento");
let formularioElementos = document.getElementById("formElementos");
let fecNac = document.getElementById("fecNac");
let elementos = document.getElementById("elementos");


botonNacimiento.addEventListener("click", fechaNacimiento);
elementos.addEventListener("change",()=>{validarElemento(elementos)});
elementos.addEventListener("change",()=>{agregarTexto(formularioElementos)});



//se vienen las funciones
// Aries (21 de marzo al 19 de abril)
// Tauro (20 de abril al 20 de mayo)
// Géminis (21 de mayo al 20 de junio)
// Cáncer (21 de junio al 22 de julio)
// Leo (23 de julio al 22 de agosto)
// Virgo (23 de agosto al 22 de septiembre)
// Libra (23 de septiembre al 22 de octubre)
// Escorpio (23 de octubre al 21 de noviembre)
// Sagitario (22 de noviembre al 21 de diciembre)
// Capricornio (22 de diciembre al 19 de enero)
// Tú20:18
// Acuario (20 de enero al 18 de febrero)
// Piscis (19 de febrero al 20 de marzo)

function fechaNacimiento(e){
    e.preventDefault()
    let fechita = fecNac.value;
    console.log(fechita);

    let fechas = fechita.split("-", 3);
    console.log(fechas);

    let mes = fechas[1];
    let dia = parseInt(fechas[2]);


    switch(mes){
        case "01":
            if(dia<=19){
                console.log("Pertence a capricornio")
            }else{
                console.log("Pertenece a acuario")
            }
        break;
        case "02":
            if(dia<=18){
                console.log("Pertence a acuario")
            }else{
                console.log("Pertenece a piscis")
            }
        break;
        case "03":
            if(dia<=20){
                console.log("Pertence a piscis")
            }else{
                console.log("Pertenece a aries")
            }
        break;
        case "04":
            if(dia<=19){
                console.log("Pertence a aries")
            }else{
                console.log("Pertenece a tauro")
            }
        break;
        case "05":
            if(dia<=20){
                console.log("Pertence a tauro")
            }else{
                console.log("Pertenece a geminis")
            }
        break;
        case "06":
            if(dia<=20){
                console.log("Pertence a geminis")
            }else{
                console.log("Pertenece a cancer")
            }
        break;
        case "07":
            if(dia<=22){
                console.log("Pertence a cancer")
            }else{
                console.log("Pertenece a leo")
            }
        break;
        case "08":
            if(dia<=22){
                console.log("Pertence a leo")
            }else{
                console.log("Pertenece a virgo")
            }
        break;
        case "09":
            if(dia<=22){
                console.log("Pertence a virgo")
            }else{
                console.log("Pertenece a libra")
            }
        break;
        case "10":
            if(dia<=22){
                console.log("Pertence a libra")
            }else{
                console.log("Pertenece a escorpio")
            }
        break;
        case "11":
            if(dia<=21){
                console.log("Pertence a escorpio")
            }else{
                console.log("Pertenece a sagitario")
            }
        break;
        case "12":
            if(dia<=22){
                console.log("Pertence a sagitario")
            }else{
                console.log("Pertenece a capricornio")
            }
        break;
    }





}

