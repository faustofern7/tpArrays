const ciudades = [];
let ciudad;

do{
    ciudad = prompt("Ingrese el nombre de la ciudad y pais: ");
    if(ciudad !== null){
        ciudades.push(ciudad);
    }
}while (ciudad !== null)

document.write('La longitud del arreglo es: ' + ciudades.length);
document.write(`<br>Elemento 1er posición: ${ciudades[0]}<br>`);
document.write(`Elemento 3er posición: ${ciudades[2]}<br>`);
document.write(`Elemento ultima posición: ${ciudades[ciudades.length - 1]}<br>`);

ciudades.push('Paris');
document.write(`Elemento ultima posición(Modificado): ${ciudades[ciudades.length - 1]}<br>`);
document.write(`Elemento 2da posición: ${ciudades[1]}<br>`);

ciudades[1] = 'Barcelona';
document.write(`<h2>Arreglos de ciudades (${ciudades.length}) </h2>`);

document.write(`<ul>`)
for (let posicion = 0; posicion < ciudades.length ;posicion++){
    document.write(`<li> ${ciudades[posicion]} </li>`);
}
document.write(`</ul>`);