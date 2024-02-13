function calcularPerimetro(ancho, alto){
    const perimetro = 2*(ancho + alto);
    return perimetro;
}

const ancho = parseInt(prompt('Ingrese el ancho del rectangulo: '));
const alto = parseInt(prompt('Ingrese el alto del rectangulo: '));

const elPerimetro = calcularPerimetro(ancho, alto);
document.write(`El perimetro del rectangulo es: ${elPerimetro}`);