function tablaMultiplicar(numero){
    document.write(`<h2>Tabla de multiplicar del ${numero}</h2>`);
    for (let i = 1; i <= 10; i++){
        const resultado = (numero * i);
        document.write(`<p>${numero} x ${i} = ${resultado}</p><br>`);
    }
}

const numero = parseInt(prompt(`Ingrese el valor numerico que desea conocer su tabla`));
tablaMultiplicar(numero);