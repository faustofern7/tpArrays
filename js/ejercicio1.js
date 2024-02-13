const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

document.write(`<h2>Lista de Meses</h2>`);

document.write(`<ul>`)
for (let posicion = 0; posicion < meses.length ;posicion++){
    document.write(`<li> ${meses[posicion]} </li>`);
}
document.write(`</ul>`);