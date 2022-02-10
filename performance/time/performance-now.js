function contar (n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// ! performance.now() mide el tiempo que se tarda en ejecutar un algoritmo.
// ! el primer performance comienza el conteo y el otro detiene el conteo cuando el codigo deja de ejecutarse.
// ! eso debe ser guardado en alguna variable

let inicioTiempo = performance.now();
contar(10);
let finalTiempo = performance.now();

let duracion = finalTiempo - inicioTiempo;
console.log(`El algoritmo contar ha durado ${duracion} milisegundos.`)
