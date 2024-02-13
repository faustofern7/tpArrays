const analizarCadena = (texto) => {
    if(texto === texto.toUpperCase()){
        return `<p>La cadena ingresada está formada solo por "MAYÚSCULAS"</p>`;
    }else if(texto === texto.toLowerCase()){
        return `<p>La cadena ingresada está formada solo por "minúsculas"</p>`;
    }else{
        return `<p>La caden ingresada está formada por MAYÚSCULAS y minúsculas</p>`
    }
}

const texto = prompt('Ingrese una cadena de texto');

const esMayMin = analizarCadena(texto); 
document.write(esMayMin);