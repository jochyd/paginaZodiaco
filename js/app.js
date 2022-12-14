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
let formularioSignos = document.getElementById('formularioSignos');

botonNacimiento.addEventListener("click", fechaNacimiento);
elementos.addEventListener("change", () => {
  validarElemento(elementos);
});
elementos.addEventListener("change", () => {
  agregarTexto(formularioElementos)
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

  let fechas = fechita.split("-", 3);

  let mes = fechas[1];
  let dia = parseInt(fechas[2]);
  
  resetearFormulario();

  switch (mes) {
    case "01":
      if (dia <= 19) {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoCapricornio = document.createElement("p");
        parrafoCapricornio.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Capricornio</h5>
                <hr>
                <div>
        Capricornio es Tierra dura, rocosa, camina sobre terreno monta??oso en su af??n de ascender y posicionarse. Su capacidad de supervivencia y su perseverancia y determinaci??n hacen que pueda llegar a la cima. Reci??n cuando ha cumplido sus objetivos Capricornio puede relajarse y descomprimirse.
      </div></div></div>`;
        parrafoCapricornio.className = "lead my-4";
        padreFechaNac.appendChild(parrafoCapricornio);
      } else {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoAcuario = document.createElement("p");
        parrafoAcuario.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Acuario</h5>
                <hr>
                <div>
                Acuario es viento de cambio, conectado con la sabidur??a y la conciencia universal. Su sabidur??a se orienta hacia los ideales humanos, la innovaci??n, la b??squeda de un mundo mejor. Persigue el progreso y la libertad.
      </div></div></div>`;
        parrafoAcuario.className = "lead my-4";
        padreFechaNac.appendChild(parrafoAcuario);
        
      }
      break;
    case "02":
      if (dia <= 18) {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoAcuario = document.createElement("p");
        parrafoAcuario.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Acuario</h5>
                <hr>
                <div>
                Acuario es viento de cambio, conectado con la sabidur??a y la conciencia universal. Su sabidur??a se orienta hacia los ideales humanos, la innovaci??n, la b??squeda de un mundo mejor. Persigue el progreso y la libertad.
      </div></div></div>`;
        parrafoAcuario.className = "lead my-4";
        padreFechaNac.appendChild(parrafoAcuario);
      } else {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoPiscis = document.createElement("p");
        parrafoPiscis.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Piscis</h5>
                <hr>
                <div>
                Piscis fluye en aguas correntosas que suelen ir en sentido opuesto. Es so??ador e idealista, pero tan emocional que a veces no puede decidir cu??l es la corriente en la que quiere nadar. Su naturaleza es contradictoria, por eso a veces no conf??a en su intuici??n.
      </div></div></div>`;
        parrafoPiscis.className = "lead my-4";
        padreFechaNac.appendChild(parrafoPiscis);
      }
      break;
    case "03":
      if (dia <= 20) {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoPiscis = document.createElement("p");
        parrafoPiscis.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Piscis</h5>
                <hr>
                <div>
                Piscis fluye en aguas correntosas que suelen ir en sentido opuesto. Es so??ador e idealista, pero tan emocional que a veces no puede decidir cu??l es la corriente en la que quiere nadar. Su naturaleza es contradictoria, por eso a veces no conf??a en su intuici??n.
      </div></div></div>`;
        parrafoPiscis.className = "lead my-4";
        padreFechaNac.appendChild(parrafoPiscis);
      } else {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoAries = document.createElement("p");
        parrafoAries.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Aries</h5>
                <hr>
                <div>
                Aries es el Fuego originario, es pionero, valiente y muy capaz. La energ??a de Aries es tan grande que puede generarle conflictos, por su forma de actuar arrebatada y a veces agresiva. El Fuego de Aries arrasa con todo a su paso.
      </div></div></div>`;
        parrafoAries.className = "lead my-4";
        padreFechaNac.appendChild(parrafoAries);
      }
      break;
    case "04":
      if (dia <= 19) {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoAries = document.createElement("p");
        parrafoAries.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Aries</h5>
                <hr>
                <div>
                Aries es el Fuego originario, es pionero, valiente y muy capaz. La energ??a de Aries es tan grande que puede generarle conflictos, por su forma de actuar arrebatada y a veces agresiva. El Fuego de Aries arrasa con todo a su paso.
      </div></div></div>`;
        parrafoAries.className = "lead my-4";
        padreFechaNac.appendChild(parrafoAries);
      } else {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoTauro = document.createElement("p");
        parrafoTauro.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Tauro</h5>
                <hr>
                <div>
                Tauro est?? bien enraizado en Tierra f??rtil y dadora de seguridad. Protege y lucha por lo que es suyo, ya sean bienes materiales o v??nculos afectivos. Llega a ser posesivo y testarudo al respecto. Persigue el bienestar material y la estabilidad emocional.
      </div></div></div>`;
        parrafoTauro.className = "lead my-4";
        padreFechaNac.appendChild(parrafoTauro);
      }
      break;
    case "05":
      if (dia <= 20) {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoTauro = document.createElement("p");
        parrafoTauro.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Tauro</h5>
                <hr>
                <div>
                Tauro est?? bien enraizado en Tierra f??rtil y dadora de seguridad. Protege y lucha por lo que es suyo, ya sean bienes materiales o v??nculos afectivos. Llega a ser posesivo y testarudo al respecto. Persigue el bienestar material y la estabilidad emocional.
      </div></div></div>`;
        parrafoTauro.className = "lead my-4";
        padreFechaNac.appendChild(parrafoTauro);
      } else {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoGeminis = document.createElement("p");
        parrafoGeminis.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Geminis</h5>
                <hr>
                <div>
                G??minis es et??reo y vol??til como su elemento, tanto que a veces parece un eterno adolescente. Su mente est?? constantemente volando en reflexiones y b??squeda de conocimiento, por eso cambia constantemente y puede desconcertar a quienes lo rodean.
      </div></div></div>`;
        parrafoGeminis.className = "lead my-4";
        padreFechaNac.appendChild(parrafoGeminis);
      }
      break;
    case "06":
      if (dia <= 20) {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoGeminis = document.createElement("p");
        parrafoGeminis.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Geminis</h5>
                <hr>
                <div>
                G??minis es et??reo y vol??til como su elemento, tanto que a veces parece un eterno adolescente. Su mente est?? constantemente volando en reflexiones y b??squeda de conocimiento, por eso cambia constantemente y puede desconcertar a quienes lo rodean.
      </div></div></div>`;
        parrafoGeminis.className = "lead my-4";
        padreFechaNac.appendChild(parrafoGeminis);
      } else {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoCancer = document.createElement("p");
        parrafoCancer.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Cancer</h5>
                <hr>
                <div>
                Es el primer signo de Agua y por tanto el m??s emocional de todo zod??aco. El Agua de C??ncer es de manantial, dulce y transparente, amante de la familia, el hogar, la tradici??n. Se rige por la intuici??n y el inconsciente.
      </div></div></div>`;
        parrafoCancer.className = "lead my-4";
        padreFechaNac.appendChild(parrafoCancer);
      }
      break;
    case "07":
      if (dia <= 22) {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoCancer = document.createElement("p");
        parrafoCancer.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Cancer</h5>
                <hr>
                <div>
                Es el primer signo de Agua y por tanto el m??s emocional de todo zod??aco. El Agua de C??ncer es de manantial, dulce y transparente, amante de la familia, el hogar, la tradici??n. Se rige por la intuici??n y el inconsciente.
      </div></div></div>`;
        parrafoCancer.className = "lead my-4";
        padreFechaNac.appendChild(parrafoCancer);
      } else {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoLeo = document.createElement("p");
        parrafoLeo.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Leo</h5>
                <hr>
                <div>
                La llama de Leo arde en su interior y brilla hacia fuera, por eso el Le??n llama tanto la atenci??n y mantiene su condici??n de rey del zod??aco. Necesita dominar y ser celebrado por los dem??s. Su orgullo es lo que le permite triunfar y no apagarse nunca.
      </div></div></div>`;
        parrafoLeo.className = "lead my-4";
        parrafoLeo.appendChild(parrafoLeo);
      }
      break;
    case "08":
      if (dia <= 22) {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoLeo = document.createElement("p");
        parrafoLeo.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Leo</h5>
                <hr>
                <div>
                La llama de Leo arde en su interior y brilla hacia fuera, por eso el Le??n llama tanto la atenci??n y mantiene su condici??n de rey del zod??aco. Necesita dominar y ser celebrado por los dem??s. Su orgullo es lo que le permite triunfar y no apagarse nunca.
      </div></div></div>`;
        parrafoLeo.className = "lead my-4";
        parrafoLeo.appendChild(parrafoLeo);
      } else {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoVirgo = document.createElement("p");
        parrafoVirgo.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Virgo</h5>
                <hr>
                <div>
                Virgo pisa m??s en Tierras movedizas. Es realista y persigue constantemente el orden y la perfecci??n, sin embargo, no se cierra y tienen en cuenta las posibilidades de cambio y movimiento. A trav??s del an??lisis y la reflexi??n, Virgo se transplanta a otra Tierra si es necesario.
      </div></div></div>`;
        parrafoVirgo.className = "lead my-4";
         parrafoVirgo.appendChild(parrafoVirgo);
      }
      break;
    case "09":
      if (dia <= 22) {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoVirgo = document.createElement("p");
        parrafoVirgo.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Virgo</h5>
                <hr>
                <div>
                Virgo pisa m??s en Tierras movedizas. Es realista y persigue constantemente el orden y la perfecci??n, sin embargo, no se cierra y tienen en cuenta las posibilidades de cambio y movimiento. A trav??s del an??lisis y la reflexi??n, Virgo se transplanta a otra Tierra si es necesario.
      </div></div></div>`;
        parrafoVirgo.className = "lead my-4";
         parrafoVirgo.appendChild(parrafoVirgo);
      } else {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoLibra = document.createElement("p");
        parrafoLibra.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Libra</h5>
                <hr>
                <div>
                Libra es el Aire de viento suave que acaricia y mantiene el equilibrio. Busca constantemente la belleza, la armon??a y la justicia, tanto en su interior como en el mundo externo. Necesita socializar e identificarse con los dem??s.
      </div></div></div>`;
      parrafoLibra.className = "lead my-4";
      parrafoLibra.appendChild(parrafoLibra);
      }
      break;
    case "10":
      if (dia <= 22) {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoLibra = document.createElement("p");
        parrafoLibra.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Libra</h5>
                <hr>
                <div>
                Libra es el Aire de viento suave que acaricia y mantiene el equilibrio. Busca constantemente la belleza, la armon??a y la justicia, tanto en su interior como en el mundo externo. Necesita socializar e identificarse con los dem??s.
      </div></div></div>`;
      parrafoLibra.className = "lead my-4";
      parrafoLibra.appendChild(parrafoLibra);
      } else {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoEscorpio = document.createElement("p");
        parrafoEscorpio.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Escorpio</h5>
                <hr>
                <div>
                El Agua de Escorpio es turbulenta y en constante movimiento. Siempre est?? buscando nuevas experiencias y respuestas. Debido a su sensibilidad, puede tener episodios depresivos o altibajos emocionales.
      </div></div></div>`;
      parrafoEscorpio.className = "lead my-4";
      parrafoEscorpio.appendChild(parrafoEscorpio);
      }
      break;
    case "11":
      if (dia <= 21) {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoEscorpio = document.createElement("p");
        parrafoEscorpio.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Escorpio</h5>
                <hr>
                <div>
                El Agua de Escorpio es turbulenta y en constante movimiento. Siempre est?? buscando nuevas experiencias y respuestas. Debido a su sensibilidad, puede tener episodios depresivos o altibajos emocionales.
      </div></div></div>`;
      parrafoEscorpio.className = "lead my-4";
      parrafoEscorpio.appendChild(parrafoEscorpio);
      } else {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoSagitario = document.createElement("p");
        parrafoSagitario.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Sagitario</h5>
                <hr>
                <div>
                El Fuego de Sagitario es el m??s estable y controlado, se aviva solo cuando es necesario. Mientras, vive al calor de su optimismo, alegr??a y sinceridad. Generalmente no se deprime ante la adversidad, porque con su inteligencia y actitud superadora, sabe que todo estar?? bien.
      </div></div></div>`;
      parrafoSagitario.className = "lead my-4";
      parrafoSagitario.appendChild(parrafoSagitario);
      }
      break;
    case "12":
      if (dia <= 22) {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoSagitario = document.createElement("p");
        parrafoSagitario.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Sagitario</h5>
                <hr>
                <div>
                El Fuego de Sagitario es el m??s estable y controlado, se aviva solo cuando es necesario. Mientras, vive al calor de su optimismo, alegr??a y sinceridad. Generalmente no se deprime ante la adversidad, porque con su inteligencia y actitud superadora, sabe que todo estar?? bien.
      </div></div></div>`;
      parrafoSagitario.className = "lead my-4";
      parrafoSagitario.appendChild(parrafoSagitario);
      } else {
        padreFechaNac.removeChild(padreFechaNac.lastChild);
        let parrafoCapricornio = document.createElement("p");
        parrafoCapricornio.innerHTML = `<div class="card border-warning">
                <div class="card-body">
                <h5 class="card-title display-6">Perteneces a Capricornio</h5>
                <hr>
                <div>
        Capricornio es Tierra dura, rocosa, camina sobre terreno monta??oso en su af??n de ascender y posicionarse. Su capacidad de supervivencia y su perseverancia y determinaci??n hacen que pueda llegar a la cima. Reci??n cuando ha cumplido sus objetivos Capricornio puede relajarse y descomprimirse.
      </div></div></div>`;
        parrafoCapricornio.className = "lead my-4";
        padreFechaNac.appendChild(parrafoCapricornio);
      }
      break;
  }
}

function resetearFormulario(){
    formularioSignos.reset();
}