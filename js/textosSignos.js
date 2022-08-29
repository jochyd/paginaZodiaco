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


export function agregarTextoAries(){
    let padreSignos = document.getElementById("padreSignos");

    if(aries.innerHTML === 'Ver Mas'){
        let parrafoAries = document.createElement('div');
        parrafoAries.innerHTML = ` <div class="card border-warning">
        <div class="card-body">
        Aries es el Fuego originario, es pionero, valiente y muy capaz. La energía de Aries es tan grande que puede generarle conflictos, por su forma de actuar arrebatada y a veces agresiva. El Fuego de Aries arrasa con todo a su paso.
        </div>
      </div>`;
        parrafoAries.className = 'my-4 fw-semibold fs-4 text-dark cardbody-red'
        padreSignos.appendChild(parrafoAries);
        aries.innerHTML = 'Ocultar';
        aries.className = 'btn btn-outline-warning'
    }else{
        console.log(padreSignos.children)
        padreSignos.removeChild(padreSignos.children[12])
        aries.innerHTML = 'Ver Mas'
        aries.className = 'btn btn-black'
    }
}

export function agregarTextoTauro(){
    let padreSignos = document.getElementById("padreSignos");

    if(tauro.innerHTML === 'Ver Mas'){
        let parrafoTauro = document.createElement('div');
        parrafoTauro.innerHTML = ` <div class="card border-warning">
        <div class="card-body">
        Tauro está bien enraizado en Tierra fértil y dadora de seguridad. Protege y lucha por lo que es suyo, ya sean bienes materiales o vínculos afectivos. Llega a ser posesivo y testarudo al respecto. Persigue el bienestar material y la estabilidad emocional.
        </div>
      </div>`;
        parrafoTauro.className = 'my-4 fw-semibold fs-4 text-dark cardbody-red'
        padreSignos.appendChild(parrafoTauro);
        tauro.innerHTML = 'Ocultar';
        tauro.className = 'btn btn-outline-warning'
    }else{
        console.log(padreSignos.children)
        padreSignos.removeChild(padreSignos.children[12])
        tauro.innerHTML = 'Ver Mas'
        tauro.className = 'btn btn-black'
    }
}

export function agregarTextoGeminis(){
    let padreSignos = document.getElementById("padreSignos");

    if(geminis.innerHTML === 'Ver Mas'){
        let parrafoGeminis = document.createElement('div');
        parrafoGeminis.innerHTML = ` <div class="card border-warning">
        <div class="card-body">
        Tauro está bien enraizado en Tierra fértil y dadora de seguridad. Protege y lucha por lo que es suyo, ya sean bienes materiales o vínculos afectivos. Llega a ser posesivo y testarudo al respecto. Persigue el bienestar material y la estabilidad emocional.
        </div>
      </div>`;
        parrafoGeminis.className = 'my-4 fw-semibold fs-4 text-dark cardbody-red'
        padreSignos.appendChild(parrafoGeminis);
        geminis.innerHTML = 'Ocultar';
        geminis.className = 'btn btn-outline-warning'
    }else{
        console.log(padreSignos.children)
        padreSignos.removeChild(padreSignos.children[12])
        geminis.innerHTML = 'Ver Mas'
        geminis.className = 'btn btn-black'
    }
}
export function agregarTextoCancer(){
    let padreSignos = document.getElementById("padreSignos");

    if(cancer.innerHTML === 'Ver Mas'){
        let parrafoCancer = document.createElement('div');
        parrafoCancer.innerHTML = ` <div class="card border-warning">
        <div class="card-body">
        Es el primer signo de Agua y por tanto el más emocional de todo zodíaco. El Agua de Cáncer es de manantial, dulce y transparente, amante de la familia, el hogar, la tradición. Se rige por la intuición y el inconsciente.
        </div>
      </div>`;
        parrafoCancer.className = 'my-4 fw-semibold fs-4 text-dark cardbody-red'
        padreSignos.appendChild(parrafoCancer);
        cancer.innerHTML = 'Ocultar';
        cancer.className = 'btn btn-outline-warning'
    }else{
        console.log(padreSignos.children)
        padreSignos.removeChild(padreSignos.children[12])
        cancer.innerHTML = 'Ver Mas'
        cancer.className = 'btn btn-black'
    }
}
export function agregarTextoLeo(){
    let padreSignos = document.getElementById("padreSignos");

    if(leo.innerHTML === 'Ver Mas'){
        let parrafoLeo = document.createElement('div');
        parrafoLeo.innerHTML = ` <div class="card border-warning">
        <div class="card-body">
        La llama de Leo arde en su interior y brilla hacia fuera, por eso el León llama tanto la atención y mantiene su condición de rey del zodíaco. Necesita dominar y ser celebrado por los demás. Su orgullo es lo que le permite triunfar y no apagarse nunca.
        </div>
      </div>`;
        parrafoLeo.className = 'my-4 fw-semibold fs-4 text-dark cardbody-red'
        padreSignos.appendChild(parrafoLeo);
        leo.innerHTML = 'Ocultar';
        leo.className = 'btn btn-outline-warning'
    }else{
        console.log(padreSignos.children)
        padreSignos.removeChild(padreSignos.children[12])
        leo.innerHTML = 'Ver Mas'
        leo.className = 'btn btn-black'
    }
}
export function agregarTextoVirgo(){
    let padreSignos = document.getElementById("padreSignos");

    if(virgo.innerHTML === 'Ver Mas'){
        let parrafoVirgo = document.createElement('div');
        parrafoVirgo.innerHTML = ` <div class="card border-warning">
        <div class="card-body">
        Virgo pisa más en Tierras movedizas. Es realista y persigue constantemente el orden y la perfección, sin embargo, no se cierra y tienen en cuenta las posibilidades de cambio y movimiento. A través del análisis y la reflexión, Virgo se transplanta a otra Tierra si es necesario.
        </div>
      </div>`;
        parrafoVirgo.className = 'my-4 fw-semibold fs-4 text-dark cardbody-red'
        padreSignos.appendChild(parrafoVirgo);
        virgo.innerHTML = 'Ocultar';
        virgo.className = 'btn btn-outline-warning'
    }else{
        console.log(padreSignos.children)
        padreSignos.removeChild(padreSignos.children[12])
        virgo.innerHTML = 'Ver Mas'
        virgo.className = 'btn btn-black'
    }
}

export function agregarTextoLibra(){
    let padreSignos = document.getElementById("padreSignos");

    if(libra.innerHTML === 'Ver Mas'){
        let parrafoLibra = document.createElement('div');
        parrafoLibra.innerHTML = ` <div class="card border-warning">
        <div class="card-body">
        Libra es el Aire de viento suave que acaricia y mantiene el equilibrio. Busca constantemente la belleza, la armonía y la justicia, tanto en su interior como en el mundo externo. Necesita socializar e identificarse con los demás.
        </div>
      </div>`;
        parrafoLibra.className = 'my-4 fw-semibold fs-4 text-dark cardbody-red'
        padreSignos.appendChild(parrafoLibra);
        libra.innerHTML = 'Ocultar';
        libra.className = 'btn btn-outline-warning'
    }else{
        console.log(padreSignos.children)
        padreSignos.removeChild(padreSignos.children[12])
        libra.innerHTML = 'Ver Mas'
        libra.className = 'btn btn-black'
    }
}

export function agregarTextoEscorpio(){
    let padreSignos = document.getElementById("padreSignos");

    if(escorpio.innerHTML === 'Ver Mas'){
        let parrafoEscorpio = document.createElement('div');
        parrafoEscorpio.innerHTML = ` <div class="card border-warning">
        <div class="card-body">
        El Agua de Escorpio es turbulenta y en constante movimiento. Siempre está buscando nuevas experiencias y respuestas. Debido a su sensibilidad, puede tener episodios depresivos o altibajos emocionales.
        </div>
      </div>`;
        parrafoEscorpio.className = 'my-4 fw-semibold fs-4 text-dark cardbody-red'
        padreSignos.appendChild(parrafoEscorpio);
        escorpio.innerHTML = 'Ocultar';
        escorpio.className = 'btn btn-outline-warning'
    }else{
        console.log(padreSignos.children)
        padreSignos.removeChild(padreSignos.children[12])
        escorpio.innerHTML = 'Ver Mas'
        escorpio.className = 'btn btn-black'
    }
}

export function agregarTextoSagitario(){
    let padreSignos = document.getElementById("padreSignos");

    if(sagitario.innerHTML === 'Ver Mas'){
        let parrafoSagitario = document.createElement('div');
        parrafoSagitario.innerHTML = ` <div class="card border-warning">
        <div class="card-body">
        El Fuego de Sagitario es el más estable y controlado, se aviva solo cuando es necesario. Mientras, vive al calor de su optimismo, alegría y sinceridad. Generalmente no se deprime ante la adversidad, porque con su inteligencia y actitud superadora, sabe que todo estará bien.
      </div>`;
        parrafoSagitario.className = 'my-4 fw-semibold fs-4 text-dark cardbody-red'
        padreSignos.appendChild(parrafoSagitario);
        sagitario.innerHTML = 'Ocultar';
        sagitario.className = 'btn btn-outline-warning'
    }else{
        console.log(padreSignos.children)
        padreSignos.removeChild(padreSignos.children[12])
        sagitario.innerHTML = 'Ver Mas'
        sagitario.className = 'btn btn-black'
    }
}

export function agregarTextoCapricornio(){
    let padreSignos = document.getElementById("padreSignos");

    if(capricornio.innerHTML === 'Ver Mas'){
        let parrafoCapricornio = document.createElement('div');
        parrafoCapricornio.innerHTML = ` <div class="card border-warning">
        <div class="card-body">
        Capricornio es Tierra dura, rocosa, camina sobre terreno montañoso en su afán de ascender y posicionarse. Su capacidad de supervivencia y su perseverancia y determinación hacen que pueda llegar a la cima. Recién cuando ha cumplido sus objetivos Capricornio puede relajarse y descomprimirse.
      </div>`;
        parrafoCapricornio.className = 'my-4 fw-semibold fs-4 text-dark cardbody-red'
        padreSignos.appendChild(parrafoCapricornio);
        capricornio.innerHTML = 'Ocultar';
        capricornio.className = 'btn btn-outline-warning'
    }else{
        console.log(padreSignos.children)
        padreSignos.removeChild(padreSignos.children[12])
        capricornio.innerHTML = 'Ver Mas'
        capricornio.className = 'btn btn-black'
    }
}
export function agregarTextoAcuario(){
    let padreSignos = document.getElementById("padreSignos");

    if(acuario.innerHTML === 'Ver Mas'){
        let parrafoAcuario = document.createElement('div');
        parrafoAcuario.innerHTML = ` <div class="card border-warning">
        <div class="card-body">
        Acuario es viento de cambio, conectado con la sabiduría y la conciencia universal. Su sabiduría se orienta hacia los ideales humanos, la innovación, la búsqueda de un mundo mejor. Persigue el progreso y la libertad.
      </div>`;
        parrafoAcuario.className = 'my-4 fw-semibold fs-4 text-dark cardbody-red'
        padreSignos.appendChild(parrafoAcuario);
        acuario.innerHTML = 'Ocultar';
        acuario.className = 'btn btn-outline-warning'
    }else{
        console.log(padreSignos.children)
        padreSignos.removeChild(padreSignos.children[12])
        acuario.innerHTML = 'Ver Mas'
        acuario.className = 'btn btn-black'
    }
}
export function agregarTextoPiscis(){
    let padreSignos = document.getElementById("padreSignos");

    if(piscis.innerHTML === 'Ver Mas'){
        let parrafoPiscis = document.createElement('div');
        parrafoPiscis.innerHTML = ` <div class="card border-warning">
        <div class="card-body">
        Piscis fluye en aguas correntosas que suelen ir en sentido opuesto. Es soñador e idealista, pero tan emocional que a veces no puede decidir cuál es la corriente en la que quiere nadar. Su naturaleza es contradictoria, por eso a veces no confía en su intuición.
      </div>`;
        parrafoPiscis.className = 'my-4 fw-semibold fs-4 text-dark cardbody-red'
        padreSignos.appendChild(parrafoPiscis);
        piscis.innerHTML = 'Ocultar';
        piscis.className = 'btn btn-outline-warning'
    }else{
        console.log(padreSignos.children)
        padreSignos.removeChild(padreSignos.children[12])
        piscis.innerHTML = 'Ver Mas'
        piscis.className = 'btn btn-black'
    }
}