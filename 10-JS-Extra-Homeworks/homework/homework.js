// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/

  //Escribe tu código aquí

  var matrizObjeto = [];
  for (key in objeto) {
    matrizObjeto.push([key, objeto[key]]);
  }
  return matrizObjeto;
  //return Object.entries(objeto);
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí

  var numeroDeCaracteres = {};

  for (let i = 0; i < string.length; i++) {
    if (numeroDeCaracteres.hasOwnProperty(string[i])) {
      numeroDeCaracteres[string[i]] += 1;
    } else {
      numeroDeCaracteres[string[i]] = 1;
    }
  }
  return numeroDeCaracteres;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var nuevoOrdenMayusculas = "";
  var nuevoOrdenMinusculas = "";

  for (i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      nuevoOrdenMayusculas = nuevoOrdenMayusculas + s[i];
    } else nuevoOrdenMinusculas = nuevoOrdenMinusculas + s[i];
  }

  return nuevoOrdenMayusculas + nuevoOrdenMinusculas;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  ///[T h e , Henry , Challenge , is , close!]    eht     y r n e h
  var espejo = str.split(" ").map(function (el) {
    return el.split("").reverse().join("");
  });
  return espejo.join(" ");
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var numeroDadoVuelta = numero.toString().split("").reverse().join("");

  if (numeroDadoVuelta === numero.toString()) {
    return "Es capicua";
  } else return "No es capicua";
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadenaNueva = "";
  for (i = 0; i < cadena.length; i++) {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c")
      cadenaNueva += cadena[i];
  }
  return cadenaNueva;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  //forma imperativa seria/\
  // var cambio = true;
  var cambio = true;
  while (cambio) {
    cambio = false;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i].length > arr[i + 1].length) {
        var aux = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = aux;
        cambio = true;
      }
    }
  }
  return arr;
}

/* formadescriptiva return arr.sort((text1, text2) => {
    return text1.length < text2.length ? -1 : 1;
  }); // */

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí

  //array1 = [1,3,4,5,6]
  //array2 = [1,2,3,4,5]

  arrayNuevo = [];

  arreglo1.forEach((element) => {
    for (i = 0; i < arreglo2.length; i++)
      if (arreglo2[i] === element) {
        arrayNuevo.push(element);
      }
  });
  return arrayNuevo;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
