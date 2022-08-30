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
  agregarTextoPiscis,
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
let padreFechaNac = document.getElementById("padreFechaNac");

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
        let parrafoCapricornio = document.createElement("p");
        parrafoCapricornio.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Capricornio</h5>
                <hr>
                <div>
        Capricornio es Tierra dura, rocosa, camina sobre terreno montañoso en su afán de ascender y posicionarse. Su capacidad de supervivencia y su perseverancia y determinación hacen que pueda llegar a la cima. Recién cuando ha cumplido sus objetivos Capricornio puede relajarse y descomprimirse.
      </div></div></div>`;
        parrafoCapricornio.className = "lead my-4";
        padreFechaNac.appendChild(parrafoCapricornio);
      } else {
        console.log("Pertenece a acuario");
        let parrafoAcuario = document.createElement("p");
        parrafoAcuario.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Acuario</h5>
                <hr>
                <div>
                Acuario es viento de cambio, conectado con la sabiduría y la conciencia universal. Su sabiduría se orienta hacia los ideales humanos, la innovación, la búsqueda de un mundo mejor. Persigue el progreso y la libertad.
      </div></div></div>`;
        parrafoAcuario.className = "lead my-4";
        padreFechaNac.appendChild(parrafoAcuario);
        
      }
      break;
    case "02":
      if (dia <= 18) {
        console.log("Pertence a acuario");
        let parrafoAcuario = document.createElement("p");
        parrafoAcuario.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Acuario</h5>
                <hr>
                <div>
                Acuario es viento de cambio, conectado con la sabiduría y la conciencia universal. Su sabiduría se orienta hacia los ideales humanos, la innovación, la búsqueda de un mundo mejor. Persigue el progreso y la libertad.
      </div></div></div>`;
        parrafoAcuario.className = "lead my-4";
        padreFechaNac.appendChild(parrafoAcuario);
      } else {
        console.log("Pertenece a piscis");
        let parrafoPiscis = document.createElement("p");
        parrafoPiscis.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Piscis</h5>
                <hr>
                <div>
                Piscis fluye en aguas correntosas que suelen ir en sentido opuesto. Es soñador e idealista, pero tan emocional que a veces no puede decidir cuál es la corriente en la que quiere nadar. Su naturaleza es contradictoria, por eso a veces no confía en su intuición.
      </div></div></div>`;
        parrafoPiscis.className = "lead my-4";
        padreFechaNac.appendChild(parrafoPiscis);
      }
      break;
    case "03":
      if (dia <= 20) {
        console.log("Pertence a piscis");
        let parrafoPiscis = document.createElement("p");
        parrafoPiscis.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Piscis</h5>
                <hr>
                <div>
                Piscis fluye en aguas correntosas que suelen ir en sentido opuesto. Es soñador e idealista, pero tan emocional que a veces no puede decidir cuál es la corriente en la que quiere nadar. Su naturaleza es contradictoria, por eso a veces no confía en su intuición.
      </div></div></div>`;
        parrafoPiscis.className = "lead my-4";
        padreFechaNac.appendChild(parrafoPiscis);
      } else {
        console.log("Pertenece a aries");
        let parrafoAries = document.createElement("p");
        parrafoAries.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Aries</h5>
                <hr>
                <div>
                Aries es el Fuego originario, es pionero, valiente y muy capaz. La energía de Aries es tan grande que puede generarle conflictos, por su forma de actuar arrebatada y a veces agresiva. El Fuego de Aries arrasa con todo a su paso.
      </div></div></div>`;
        parrafoAries.className = "lead my-4";
        padreFechaNac.appendChild(parrafoAries);
      }
      break;
    case "04":
      if (dia <= 19) {
        console.log("Pertence a aries");
        let parrafoAries = document.createElement("p");
        parrafoAries.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Aries</h5>
                <hr>
                <div>
                Aries es el Fuego originario, es pionero, valiente y muy capaz. La energía de Aries es tan grande que puede generarle conflictos, por su forma de actuar arrebatada y a veces agresiva. El Fuego de Aries arrasa con todo a su paso.
      </div></div></div>`;
        parrafoAries.className = "lead my-4";
        padreFechaNac.appendChild(parrafoAries);
      } else {
        console.log("Pertenece a tauro"); 
        let parrafoTauro = document.createElement("p");
        parrafoTauro.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Tauro</h5>
                <hr>
                <div>
                Tauro está bien enraizado en Tierra fértil y dadora de seguridad. Protege y lucha por lo que es suyo, ya sean bienes materiales o vínculos afectivos. Llega a ser posesivo y testarudo al respecto. Persigue el bienestar material y la estabilidad emocional.
      </div></div></div>`;
        parrafoTauro.className = "lead my-4";
        padreFechaNac.appendChild(parrafoTauro);
      }
      break;
    case "05":
      if (dia <= 20) {
        console.log("Pertence a tauro");
        let parrafoTauro = document.createElement("p");
        parrafoTauro.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Tauro</h5>
                <hr>
                <div>
                Tauro está bien enraizado en Tierra fértil y dadora de seguridad. Protege y lucha por lo que es suyo, ya sean bienes materiales o vínculos afectivos. Llega a ser posesivo y testarudo al respecto. Persigue el bienestar material y la estabilidad emocional.
      </div></div></div>`;
        parrafoTauro.className = "lead my-4";
        padreFechaNac.appendChild(parrafoTauro);
      } else {
        console.log("Pertenece a geminis");
        let parrafoGeminis = document.createElement("p");
        parrafoGeminis.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Geminis</h5>
                <hr>
                <div>
                Géminis es etéreo y volátil como su elemento, tanto que a veces parece un eterno adolescente. Su mente está constantemente volando en reflexiones y búsqueda de conocimiento, por eso cambia constantemente y puede desconcertar a quienes lo rodean.
      </div></div></div>`;
        parrafoGeminis.className = "lead my-4";
        padreFechaNac.appendChild(parrafoGeminis);
      }
      break;
    case "06":
      if (dia <= 20) {
        console.log("Pertence a geminis");
        let parrafoGeminis = document.createElement("p");
        parrafoGeminis.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Geminis</h5>
                <hr>
                <div>
                Géminis es etéreo y volátil como su elemento, tanto que a veces parece un eterno adolescente. Su mente está constantemente volando en reflexiones y búsqueda de conocimiento, por eso cambia constantemente y puede desconcertar a quienes lo rodean.
      </div></div></div>`;
        parrafoGeminis.className = "lead my-4";
        padreFechaNac.appendChild(parrafoGeminis);
      } else {
        console.log("Pertenece a cancer");
        let parrafoCancer = document.createElement("p");
        parrafoCancer.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Cancer</h5>
                <hr>
                <div>
                Es el primer signo de Agua y por tanto el más emocional de todo zodíaco. El Agua de Cáncer es de manantial, dulce y transparente, amante de la familia, el hogar, la tradición. Se rige por la intuición y el inconsciente.
      </div></div></div>`;
        parrafoCancer.className = "lead my-4";
        padreFechaNac.appendChild(parrafoCancer);
      }
      break;
    case "07":
      if (dia <= 22) {
        console.log("Pertence a cancer");
        let parrafoCancer = document.createElement("p");
        parrafoCancer.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Cancer</h5>
                <hr>
                <div>
                Es el primer signo de Agua y por tanto el más emocional de todo zodíaco. El Agua de Cáncer es de manantial, dulce y transparente, amante de la familia, el hogar, la tradición. Se rige por la intuición y el inconsciente.
      </div></div></div>`;
        parrafoCancer.className = "lead my-4";
        padreFechaNac.appendChild(parrafoCancer);
      } else {
        console.log("Pertenece a leo");
        let parrafoLeo = document.createElement("p");
        parrafoLeo.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Leo</h5>
                <hr>
                <div>
                La llama de Leo arde en su interior y brilla hacia fuera, por eso el León llama tanto la atención y mantiene su condición de rey del zodíaco. Necesita dominar y ser celebrado por los demás. Su orgullo es lo que le permite triunfar y no apagarse nunca.
      </div></div></div>`;
        parrafoLeo.className = "lead my-4";
        parrafoLeo.appendChild(parrafoLeo);
      }
      break;
    case "08":
      if (dia <= 22) {
        console.log("Pertence a leo");
        let parrafoLeo = document.createElement("p");
        parrafoLeo.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Leo</h5>
                <hr>
                <div>
                La llama de Leo arde en su interior y brilla hacia fuera, por eso el León llama tanto la atención y mantiene su condición de rey del zodíaco. Necesita dominar y ser celebrado por los demás. Su orgullo es lo que le permite triunfar y no apagarse nunca.
      </div></div></div>`;
        parrafoLeo.className = "lead my-4";
        parrafoLeo.appendChild(parrafoLeo);
      } else {
        console.log("Pertenece a virgo"); 
        let parrafoVirgo = document.createElement("p");
        parrafoVirgo.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Virgo</h5>
                <hr>
                <div>
                Virgo pisa más en Tierras movedizas. Es realista y persigue constantemente el orden y la perfección, sin embargo, no se cierra y tienen en cuenta las posibilidades de cambio y movimiento. A través del análisis y la reflexión, Virgo se transplanta a otra Tierra si es necesario.
      </div></div></div>`;
        parrafoVirgo.className = "lead my-4";
         parrafoVirgo.appendChild(parrafoVirgo);
      }
      break;
    case "09":
      if (dia <= 22) {
        console.log("Pertence a virgo");
        let parrafoVirgo = document.createElement("p");
        parrafoVirgo.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Virgo</h5>
                <hr>
                <div>
                Virgo pisa más en Tierras movedizas. Es realista y persigue constantemente el orden y la perfección, sin embargo, no se cierra y tienen en cuenta las posibilidades de cambio y movimiento. A través del análisis y la reflexión, Virgo se transplanta a otra Tierra si es necesario.
      </div></div></div>`;
        parrafoVirgo.className = "lead my-4";
         parrafoVirgo.appendChild(parrafoVirgo);
      } else {
        console.log("Pertenece a libra");
        let parrafoLibra = document.createElement("p");
        parrafoLibra.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Libra</h5>
                <hr>
                <div>
                Libra es el Aire de viento suave que acaricia y mantiene el equilibrio. Busca constantemente la belleza, la armonía y la justicia, tanto en su interior como en el mundo externo. Necesita socializar e identificarse con los demás.
      </div></div></div>`;
      parrafoLibra.className = "lead my-4";
      parrafoLibra.appendChild(parrafoLibra);
      }
      break;
    case "10":
      if (dia <= 22) {
        console.log("Pertence a libra");
        let parrafoLibra = document.createElement("p");
        parrafoLibra.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Libra</h5>
                <hr>
                <div>
                Libra es el Aire de viento suave que acaricia y mantiene el equilibrio. Busca constantemente la belleza, la armonía y la justicia, tanto en su interior como en el mundo externo. Necesita socializar e identificarse con los demás.
      </div></div></div>`;
      parrafoLibra.className = "lead my-4";
      parrafoLibra.appendChild(parrafoLibra);
      } else {
        console.log("Pertenece a escorpio");
        let parrafoEscorpio = document.createElement("p");
        parrafoEscorpio.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Escorpio</h5>
                <hr>
                <div>
                El Agua de Escorpio es turbulenta y en constante movimiento. Siempre está buscando nuevas experiencias y respuestas. Debido a su sensibilidad, puede tener episodios depresivos o altibajos emocionales.
      </div></div></div>`;
      parrafoEscorpio.className = "lead my-4";
      parrafoEscorpio.appendChild(parrafoEscorpio);
      }
      break;
    case "11":
      if (dia <= 21) {
        console.log("Pertence a escorpio");
        let parrafoEscorpio = document.createElement("p");
        parrafoEscorpio.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Escorpio</h5>
                <hr>
                <div>
                El Agua de Escorpio es turbulenta y en constante movimiento. Siempre está buscando nuevas experiencias y respuestas. Debido a su sensibilidad, puede tener episodios depresivos o altibajos emocionales.
      </div></div></div>`;
      parrafoEscorpio.className = "lead my-4";
      parrafoEscorpio.appendChild(parrafoEscorpio);
      } else {
        console.log("Pertenece a sagitario");
        let parrafoSagitario = document.createElement("p");
        parrafoSagitario.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Sagitario</h5>
                <hr>
                <div>
                El Fuego de Sagitario es el más estable y controlado, se aviva solo cuando es necesario. Mientras, vive al calor de su optimismo, alegría y sinceridad. Generalmente no se deprime ante la adversidad, porque con su inteligencia y actitud superadora, sabe que todo estará bien.
      </div></div></div>`;
      parrafoSagitario.className = "lead my-4";
      parrafoSagitario.appendChild(parrafoSagitario);
      }
      break;
    case "12":
      if (dia <= 22) {
        console.log("Pertence a sagitario");
        let parrafoSagitario = document.createElement("p");
        parrafoSagitario.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Sagitario</h5>
                <hr>
                <div>
                El Fuego de Sagitario es el más estable y controlado, se aviva solo cuando es necesario. Mientras, vive al calor de su optimismo, alegría y sinceridad. Generalmente no se deprime ante la adversidad, porque con su inteligencia y actitud superadora, sabe que todo estará bien.
      </div></div></div>`;
      parrafoSagitario.className = "lead my-4";
      parrafoSagitario.appendChild(parrafoSagitario);
      } else {
        console.log("Pertenece a capricornio");
        let parrafoCapricornio = document.createElement("p");
        parrafoCapricornio.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Capricornio</h5>
                <hr>
                <div>
        Capricornio es Tierra dura, rocosa, camina sobre terreno montañoso en su afán de ascender y posicionarse. Su capacidad de supervivencia y su perseverancia y determinación hacen que pueda llegar a la cima. Recién cuando ha cumplido sus objetivos Capricornio puede relajarse y descomprimirse.
      </div></div></div>`;
        parrafoCapricornio.className = "lead my-4";
        padreFechaNac.appendChild(parrafoCapricornio);
      }
      break;
  }
}
