function parImpar(numero){
    if (numero % 2 === 0){
        return `<p>El numero (${numero}) propuesto es par</p>`;
    }else{
        return `<p>El numero (${numero})propuesto es impar</p>`;
    }
}

const resultado1 = parImpar(10);
document.write(resultado1);

const resultado2 = parImpar(57);
document.write(resultado2);