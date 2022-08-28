import { validarElemento } from "./validaciones.js";
import { agregarTexto } from "./textosAgregados.js";
import {
  agregarTextoAries,
  agregarTextoTauro,
  agregarTextoGeminis,
  agregarTextoLibra,
  agregarTextoCancer,
  agregarTextoLeo,
  agregarTextoVirgo,
  agregarTextoEscorpio,
  agregarTextoSagitario,
  agregarTextoCapricornio,
  agregarTextoAcuario,
  agregarTextoPiscis
} from "./textosSignos.js";

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
let padreSignos = document.getElementById("padreSignos");

botonNacimiento.addEventListener("click", fechaNacimiento);
elementos.addEventListener("change", () => {
  validarElemento(elementos);
});
elementos.addEventListener("change", () => {
  agregarTexto(formularioElementos);
});
aries.addEventListener("click", () => {
  agregarTextoAries(aries);
});
tauro.addEventListener("click", () => {
  agregarTextoTauro(tauro);
});
geminis.addEventListener("click", () => {
  agregarTextoGeminis(geminis);
});
cancer.addEventListener("click", () => {
  agregarTextoCancer(cancer);
});
leo.addEventListener("click", () => {
  agregarTextoLeo(leo);
});
virgo.addEventListener("click", () => {
  agregarTextoVirgo(virgo);
});
libra.addEventListener("click", () => {
  agregarTextoLibra(libra);
});
escorpio.addEventListener("click", () => {
  agregarTextoEscorpio(escorpio);
});
sagitario.addEventListener("click", () => {
  agregarTextoSagitario(sagitario);
});
capricornio.addEventListener("click", () => {
  agregarTextoCapricornio(capricornio);
});
acuario.addEventListener("click", () => {
    agregarTextoAcuario(acuario);
  });
  piscis.addEventListener("click", () => {
    agregarTextoPiscis(piscis);
  });


//se vienen las funciones

function fechaNacimiento(e) {
  e.preventDefault();
  let fechita = fecNac.value;
  console.log(fechita);

  let fechas = fechita.split("-", 3);
  console.log(fechas);

  let mes = fechas[1];
  let dia = parseInt(fechas[2]);

  switch (mes) {
    case "01":
      if (dia <= 19) {
        console.log("Pertence a capricornio");
      } else {
        console.log("Pertenece a acuario");
      }
      break;
    case "02":
      if (dia <= 18) {
        console.log("Pertence a acuario");
      } else {
        console.log("Pertenece a piscis");
      }
      break;
    case "03":
      if (dia <= 20) {
        console.log("Pertence a piscis");
      } else {
        console.log("Pertenece a aries");
      }
      break;
    case "04":
      if (dia <= 19) {
        console.log("Pertence a aries");
      } else {
        console.log("Pertenece a tauro");
      }
      break;
    case "05":
      if (dia <= 20) {
        console.log("Pertence a tauro");
      } else {
        console.log("Pertenece a geminis");
      }
      break;
    case "06":
      if (dia <= 20) {
        console.log("Pertence a geminis");
      } else {
        console.log("Pertenece a cancer");
      }
      break;
    case "07":
      if (dia <= 22) {
        console.log("Pertence a cancer");
      } else {
        console.log("Pertenece a leo");
      }
      break;
    case "08":
      if (dia <= 22) {
        console.log("Pertence a leo");
      } else {
        console.log("Pertenece a virgo");
      }
      break;
    case "09":
      if (dia <= 22) {
        console.log("Pertence a virgo");
      } else {
        console.log("Pertenece a libra");
      }
      break;
    case "10":
      if (dia <= 22) {
        console.log("Pertence a libra");
      } else {
        console.log("Pertenece a escorpio");
      }
      break;
    case "11":
      if (dia <= 21) {
        console.log("Pertence a escorpio");
      } else {
        console.log("Pertenece a sagitario");
      }
      break;
    case "12":
      if (dia <= 22) {
        console.log("Pertence a sagitario");
      } else {
        console.log("Pertenece a capricornio");
      }
      break;
  }
}
