// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function countText(text) {
    if(typeof text === "string") {
        return text.length
    }else {
        return "Ingresa un texto"
    }
}
console.log(countText("hola"));
console.log(countText(3));
console.log(countText({}));
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function croppedText(text, cropped) {
    if(typeof text === "string") {
        const textCropped = text.split("",cropped)
        const result = textCropped.join("")
        return result
    }else {
        return "Ingresa un texto para recortar"
    }
}
console.log(croppedText("hola mundo",4))
console.log(croppedText({},2));
console.log(croppedText(10));
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function ArrayText(text, separator) {
    if(typeof text === "string") {
        const arrayText = text.split(separator)
        return arrayText
    }else {
        return "Ingresa un texto para separar en string"
    }
}
console.log(ArrayText("hola que tal", " "));
console.log(ArrayText({}, " "));
console.log(ArrayText(10, ""));
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function repeatText(text, repeatText) {
    if(typeof text === "string") {
        let result = ""
        for (let i = 0; i < repeatText; i++) {
                result += text
                if (i < repeatText - 1) {
                    result += " ";
                }
            }
        return result
    }else {
        return "Ingresa un texto para repetir"
    }
}
console.log(repeatText("Hola Mundo", 3));
console.log(repeatText({},3));
console.log(repeatText(10, ""));
