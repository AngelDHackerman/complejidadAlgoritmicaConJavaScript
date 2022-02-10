function contar (n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function repetir (arreglo) { 
  let arregloRepetido = arreglo;
}

function convertirAString (arreglo) { 
  let resultado = arreglo.map(elemento => elemento.toString());
  return resultado;
}

const arregleDosDimensiones = (valor) => { // * Array de 2 dimensiones, por cada indice del array "x", cada valor en los indices sera otro array (un array de arrays);
  let x = new Array(valor); // ! valor es el numero de indices que nuestro array X tendra por dentro;
  for (let i = 0; i < valor; i++) {
    x[i] = new Array(valor).fill(0); // ! valor es el numero de indices que nuestro array DENTRO del array x van a tener;
  }
  return x;
}

console.log(arregleDosDimensiones(5))

/* Este seria el output:
[
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ]
]
*/