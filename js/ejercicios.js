// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// function countText(text) {
//     if(typeof text === "string") {
//         return text.length
//     }else {
//         return "Ingresa un texto"
//     }
// }
// console.log(countText("hola mundo"));
// console.log(countText(3));
// console.log(countText({}));





// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// function croppedText(text, cropped) {
//     if(typeof text === "string") {
//         const textCropped = text.split("",cropped)
//         const result = textCropped.join("")
//         return result
//     }else {
//         return "Ingresa un texto para recortar"
//     }
// }
// console.log(croppedText("hola mundo",4))
// console.log(croppedText({},2));
// console.log(croppedText(10));





// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// function ArrayText(text, separator) {
//     if(typeof text === "string") {
//         const arrayText = text.split(separator)
//         return arrayText
//     }else {
//         return "Ingresa un texto para separar en string"
//     }
// }
// console.log(ArrayText("hola que tal", " "));
// console.log(ArrayText({}, " "));
// console.log(ArrayText(10, ""));





// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// function repeatText(text, repeatText) {
//     if(typeof text === "string") {
//         let result = ""
//         for (let i = 0; i < repeatText; i++) {
//                 result += text
//                 if (i < repeatText - 1) {
//                     result += " ";
//                 }
//             }
//         return result
//     }else {
//         return "Ingresa un texto para repetir"
//     }
// }
// console.log(repeatText("Hola Mundo", 3));
// console.log(repeatText({},3));
// console.log(repeatText(10, ""));


// Otra manera
// const repetirTexto = (texto = "", repeticiones = undefined) => {
//     if(!texto) return console.warn("No ingresasate un texto")
//     if(repeticiones === undefined) return console.warn("No ingresaste el numero de veces a repetir el texto")
//     if(repeticiones === 0) return console.warn("El numero de veces a repetir no puede ser 0")
//     if(Math.sign(repeticiones) === -1) return console.warn("El nymero de veces a repetir no puede ser negativo")
//     for (let i = 1; i < repeticiones; i++) {
//         console.info(`${texto}, ${i}`)
//     }
// }
// repetirTexto("Hola", 4)
// repetirTexto("Hola",0)
// repetirTexto("",2)
// repetirTexto("Ho")



// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

/* function invertirCadena(cadena) {
    (!cadena) 
    ? console.log("Ingresa un texto")
    : console.log(cadena.split('').reverse().join(''))
}
invertirCadena()
invertirCadena("Hola Mundo")
invertirCadena("Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde error magnam, facere tempore debitis cupiditate quia perferendis odio laudantium maxime reprehenderit nesciunt vero sapiente dignissimos at totam, autem recusandae?") */


// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

function contarPalabras(texto, palabra) {
    // Dividir el texto en palabras usando espacios como delimitadores
    const palabras = texto.split(' ');
    console.log(palabras);
    // Contar las ocurrencias de la palabra específica
    let contador = 0;
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i] === palabra) {
        contador++;
      }
    }
    
    return contador;
  }
  
  // Ejemplo de uso
  const resultado = contarPalabras("hola mundo adios mundo", "mundo");
  console.log(resultado); // 2
  

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.