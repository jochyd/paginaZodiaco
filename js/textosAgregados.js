let sectionPadre = document.getElementById("agregandoTexto");

export function agregarTexto() {
  if (elementos.value === "1") {
    sectionPadre.removeChild(sectionPadre.children[0]);
    let parrafoTierra = document.createElement("p");
    console.log("este elemento es tierra");
    parrafoTierra.innerHTML = `
         <div class="row g-0">
           <div class="col-md-4">
             <img src="https://cf.ltkcdn.net/es-feng-shui/images/std-xs/244296-333x337-earthsymbol.jpg" class="img-fluid rounded-start" alt="foto tierra">
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h5 class="card-title display-6">Elemento Tierra</h5>
               <p class="card-text">Los signos de tierra son pasivos y fríos, y se caracterizan por ser los más resistentes de todos. Gozan de un temperamento tranquilo y carácter un tanto introvertido. Suelen ser trabajadores, perseverantes y esforzarse al máximo en todo lo que hacen.</p>
             </div>
           </div>
         </div>`;
    parrafoTierra.className = "lead my-4";
    sectionPadre.prepend(parrafoTierra);
  }else{
    sectionPadre.removeChild(sectionPadre.children[0]);
   }
  if (elementos.value === "2") {
    let parrafoAgua = document.createElement("p");
    console.log("este elemento es agua");
    parrafoAgua.innerHTML = `
         <div class="row g-0">
           <div class="col-md-4">
             <img src="https://cf.ltkcdn.net/es-feng-shui/images/std-xs/244299-333x334-airsymbol.jpg" class="img-fluid rounded-start" alt="foto agua">
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h5 class="card-title display-6">Elemento Agua</h5>
               <p class="card-text">Las cualidades en común de Cáncer, Escorpio y Piscis son la transparencia, la fluidez y pureza del elemento al que pertenecen: el agua. Los nacidos en estos signos con personalidades que se suelen ver reflejadas en emociones que conectan con una naturaleza profundamente emocional y sensible.</p>
             </div>
           </div>
         </div>`;
    parrafoAgua.className = "lead my-4";
    sectionPadre.prepend(parrafoAgua);
    console.log(sectionPadre.children);
  }
  if (elementos.value === "3") {
    console.log("este elemento es fuego");
    let parrafoFuego = document.createElement("p");
    parrafoFuego.innerHTML = `
         <div class="row g-0">
           <div class="col-md-4">
             <img src="https://cf.ltkcdn.net/es-feng-shui/images/std-xs/244298-337x333-firesymbol.jpg" class="img-fluid rounded-start" alt="foto fuego">
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h5 class="card-title display-6">Elemento Fuego</h5>
               <p class="card-text">El fuego es el elemento al que corresponden la pasión, la valentía y el liderazgo. El Fuego simboliza el calor, la energía, la pasión, la videncia. Las nacidas bajo la influencia de este elemento son personas divertidas y apasionadas, llenas de vitalidad. Generosas, entusiastas y aventureras.</p>
             </div>
           </div>
         </div>`;
    parrafoFuego.className = "lead my-4";
    sectionPadre.prepend(parrafoFuego);
  }
 if (elementos.value === "4") {
    console.log("este elemento es aire");
    let parrafoAire = document.createElement("p");
    parrafoAire.innerHTML = `
         <div class="row g-0">
           <div class="col-md-4">
             <img src="https://cf.ltkcdn.net/es-feng-shui/images/std-xs/244299-333x334-airsymbol.jpg" class="img-fluid rounded-start" alt="foto aire">
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h5 class="card-title display-6">Elemento Aire</h5>
               <p class="card-text">Los signos del elemento aire, es decir, Géminis, Libra y Acuario, son los más rebeldes, activos y sociables del zodiaco, por lo que suelen tener personalidades fuertes y resaltar entre los demás. Los nacidos en el elemento aire son los más coquetos y seductores del zodiaco, en especial Acuario.</p>
             </div>
           </div>
         </div>`;
    parrafoAire.className = "lead my-4";
    sectionPadre.prepend(parrafoAire);
  }
}

// export function removerHijo(){
//   if(sectionPadre.children < 0){
//     sectionPadre.removeChild(children[0])
//   }
// }