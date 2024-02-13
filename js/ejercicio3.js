const sumas = new Array(11).fill(0);

for (let i = 0; i < 50; i++) {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  
  let suma = dado1 + dado2;
  sumas[suma - 2]++;
}
document.write(`<table>`);
document.write("<tr><th>Suma 🎲🎲</th> <th>apariciones</th><tr>");
for (let i = 0; i < sumas.length; i++){
  document.write(`<tr><td>${i + 2}</td>  <td>${sumas[i]}</td></tr>`);
}
document.write(`</table>`);