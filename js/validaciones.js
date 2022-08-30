export function validarElemento(opcion){
    if(opcion.value.trim().length >0){
        opcion.className = "form-control is-valid"
        return true;
    }
}

