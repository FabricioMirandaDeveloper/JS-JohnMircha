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

/* function contarPalabras(texto, palabra) {
    const palabras = texto.split(' ');
    console.log(palabras);
    let contador = 0;
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i] === palabra) {
        contador++;
      }
    }

    return contador;
  }

  const resultado = contarPalabras("hola mundo adios mundo", "mundo");
  console.log(resultado);  */

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

/* const palindromo = (cadena) => {
  let cadena = cadena.toLowerCase();
  let reverseCadena = cadena.split("").reverse().join("");
  (cadena === reverseCadena) ? console.log("true") : console.log("false");
}

palindromo("fabricio")
palindromo("salas") */

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

/* const eliminarPatron = (texto, patron) => {
  console.log(texto.replace(new RegExp(patron, 'ig'), ''))
}
eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"); */

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
/*
const aleatorio = () => {
  let num = Math.floor(Math.random() * (600 - 501 + 1) + 501)
  console.log(num);
  return num;
}
aleatorio() */
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

/* const esCapicua = numero => {
  if(typeof numero != "number") return "Ingresa un número"
  let numeroACadena = numero.toString();
  let cadenaInvertidad = numeroACadena.split('').reverse().join('');
  return numeroACadena === cadenaInvertidad;
}
console.log(esCapicua(2002));
console.log(esCapicua(1234));
console.log(esCapicua(12321));
console.log(esCapicua("12"))  */
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
/* const factorial = (num = undefined) => {
  if(num === undefined) return console.log("Ingresa un numero")
  if(typeof num != "number") return console.log("No ingresaste un numero");
  if(num === 0) return console.log("El numero no puede ser 0");
  if(Math.sign(num) === -1) return console.log("El numero no puede ser negativo");
  let result = 1
  for (let i = 1; i <= num; i++) {
    result = result * i
  }
  console.log(`El factorial de ${num} es: ${result}`);
}
factorial()
factorial("5")
factorial(0)
factorial(-5)
factorial(5) */

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

// function esPrimo(num = undefined) {
//   if(num === undefined) {
//     console.error("Ingresa un numero");
//     return
//   }
//   if(typeof num !== "number") {
//     console.error("Debes ingresar un numero");
//     return
//   }
//   if(num <= 1) {
//     return false
//   }
//   if(num === 2) {
//     return true
//   }
//   if(num % 2 === 0) {
//     return false
//   }
//   for (let i = 3; i * i <= num; i += 2) {
//     if(num % i === 0) {
//       return false
//     }
//   }
//   return true
// }

// esPrimo()
// esPrimo("a")
// console.log(esPrimo(1));
// console.log(esPrimo(2));
// console.log(esPrimo(3));
// console.log(esPrimo(7));

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

// const parImpar = (num = undefined) => {
//   if (num === undefined) {
//     console.error("Ingresa un numero");
//     return;
//   }
//   if (typeof num !== "number") {
//     console.error("Debes ingresar un numero");
//     return;
//   }
//   (num % 2 === 0) ? console.log("Es par") : console.log("Es impar");

// };

// parImpar()
// parImpar("4")
// parImpar(4)
// parImpar(-1)

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

/* const grados = () => {
  let num = parseFloat(prompt("Ingresa un numero"));
  let option = prompt(`Elije el tipo de Grado
    1) Celsius
    2) Fahrenheit
    `);
  if (option === "1") {
    let fahrenheit = (num * 9) / 5 + 32;
    return console.log(
      `${num} Grados Celcius equivalen a ${fahrenheit} Grados Fahrenheit `
    );
  } else {
    let centigrados = ((num - 32) * 5) / 9;
    return console.log(
      `${num} Grados Fahrenheit equivalen a ${centigrados} Grados Celcius`
    );
  }
};
grados(); */

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

/* const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if(numero === undefined) return console.warn("No ingresaste el numero a convertir");

  if(typeof numero != "number") return console.error(`El valor ${numero} ingresado, NO es un numero`);

  if(base === undefined) return console.warn("No ingresaste la base a convertir");

  if(typeof base != "number") return console.error(`El valor ${base} ingresado, NO es un numero`);

  if(base === 2) {
    return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`)
  }else if(base === 10) {
    return console.info(`${numero} base ${base} = ${numero.toString(2)} base 2`)
  }else {
    return console.error("El tipo de base a convertir NO es valido");
  }
}   */

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

/* const descuento = (number = undefined, discound = undefined) => {
  if(number === undefined) return console.warn("No ingresaste el monto");

  if(typeof number != "number") return console.error(`El valor ${number} ingresado, NO es un numero`);

  if(discound === undefined) return console.warn("No ingresaste el descuento a aplicar");

  if(typeof discound != "number") return console.error(`El valor ${discound} ingresado, NO es un numero`);

  const newPrice = number - ((number * discound)/ 100)
  return console.log(`${number} soles con el descuento del ${discound}% es ${newPrice} soles`);
}

descuento()
descuento("1000")
descuento(1000)
descuento(1000, "20")
descuento(1000, 20)
*/
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// const calcularAnios = (fecha = undefined) => {
//   if(fecha === undefined) return console.warn("No ingresaste la fecha")
//   if(!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha valida");

//   let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
//   aniosEnMs = 1000 * 60 *60 * 24 * 365,
//   aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMs)

//   return (Math.sign(aniosHumanos) === -1)
//   ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
//   : (Math.sign(aniosEnMs) === 1)
//     ? console.info(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`)
//     : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
// }
// calcularAnios()
// calcularAnios("")
// calcularAnios(false)
// calcularAnios(new Date())
// calcularAnios(new Date(2001,3,4))
// calcularAnios(new Date(2100,3,4))

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.