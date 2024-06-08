//#region VAR-LET
// VAR NO RESPETA LOS SCOPE DE BLOQUE
/* var musica = "Rock"
console.log("Variable musica antes del bloque", musica);

{
    var musica = "Pop"
    console.log("Variable musica durante del bloque", musica);
}
console.log("Variable musica despues del bloque", musica); */

// LET SI RESPETA LOS SCOPE DE BLOQUE
/* let musica2 = "Rock"
console.log("Variable musica antes del bloque", musica2);

{
    let musica2 = "Pop"
    console.log("Variable musica durante del bloque", musica2);
}
console.log("Variable musica despues del bloque", musica2);  
console.log(window); */
//#endregion
//#region CONST
/* let a;
const PI = 3.1416 */
// const NUEVE;
/* console.log(PI); */
// PI = 3.15

/* a = "Odi"
console.log(a)

const objeto = {
    nombre: "Jon",
    edad: 35
}
const colores = ["blanco","negro","azul"]

console.log(objeto);
console.log(colores);

objeto.apellido = "Miranda"
colores.push("anaranjado")
console.log(objeto);
console.log(colores); */
//#endregion

// Alcance:
/* if (true) { */
    /* var varVar = 'varVar'; */ // disponible en toda la función
    /* let letVar = 'letVar'; */ // disponible solo dentro del bloque if
 /*  } */
  
  // Acercamiento:
  /* console.log(letVar); */ // error de referencia, letVar no está disponible fuera del bloque
 /*  console.log(varVar) */; // muestra 'varVar'

  // Contexto de ejecución:
  /* function fn() {
    var varVar = 'varVar';
  } */
  /* let letVar = 'letVar'; */
  /* console.log(varVar); */ // muestra 'varVar', acoplado al contexto de ejecución global
  /* console.log(letVar); */ // muestra 'letVar', acoplado al contexto de ejecución local
   

  /* let this = "pancito" */
  /* let edad = 23
  let int = "tengo " + edad + " años"
  console.log(int);
  let int2 = `tengo ${edad} 
  a
  ñ
  o
  s`
  console.log(int2); */

/* function estoEsUnaFuncion() {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}
estoEsUnaFuncion() */

/* function unaFuncionQueDevuelveElValor() {
    console.log("Uno");
    return 19
    console.log("Dos");
    console.log("Tres");
    return "La funcion ha retornado una cadena de texto"
}
let valorDeFuncion = unaFuncionQueDevuelveElValor()

console.log(valorDeFuncion); */

/* function saludar(nombre = "Desconocido", edad = 0) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}
saludar("Fabricio", 23)
saludar() */

/* const a = []
const b = [23,true,"Hola",["a","b",[1,2,3]]]
console.log(a);
console.log(b[2]);
console.log(b[3][2]);
console.log(b[3][2][0]);

const c = Array.of("1","2","3")

const d = Array(100).fill(false)
console.log(d); */

/* let numeros = [1,2,3]

let [num1,num2,num3] = numeros

console.log(num1,num2,num3);

let persona = {
    nombre: "Fabricio",
    apellido: "Miranda",
    edad: 23
}

let {nombre,...ay} = persona

console.log(nombre);
console.log(ay.apellido); */

/* function Animal(nombre, genero) {
    this.nombre = nombre
    this.genero = genero
}

Animal.prototype.sonar = function() {
    console.log("Hoago sonidos porque estoy vivo");
}
Animal.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre}`);
}

// Herencia Prototipica

function Perro(nombre, genero, tamanio) {
    this.super = Animal
    this.super(nombre, genero)
    this.tamanio = tamanio
}
Perro.prototype = new Animal()
Perro.prototype.constructor = Perro

Perro.prototype.sonar = function() {
    console.log("Soy un perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar = function() {
    console.log("guau guau");
}

const odi = new Perro("Odi", "macho", "mediano"), 
morgan = new Animal("Morgan", "macho")

console.log(odi);
console.log(morgan);

odi.sonar()
odi.saludar()
odi.ladrar()

morgan.sonar()
morgan.saludar() */
/* 
class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre
        this.genero = genero
    }
    sonar() {
        console.log("Hago sonidos porque estoy vivo");
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

class Perro extends Animal{
    constructor(nombre, genero, tamanio) {
        super(nombre, genero)
        this.tamanio = tamanio
        this.raza = null
    }
    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }
    ladrar() {
        console.log("guau guau");
    }
    static queSomos() {
        console.log("Mejores amigos del hombre");
    }
    get getRaza() {
        return this.raza
    }
    set setRaza(raza) {
        this.raza = raza
    }
}
Perro.queSomos()
const odi = new Animal("Odi", "Macho"),
morgan = new Perro("Morgan", "Macho", "gigante")

console.log(odi);
odi.sonar()
odi.saludar()
console.log(morgan);
morgan.sonar()
morgan.saludar()
morgan.ladrar()
console.log(morgan.getRaza)
morgan.setRaza = "pequeño"
console.log(morgan.getRaza); */

/* console.log(console);
console.error("Esto es un error");
console.warn("Esto es una aviso");
console.info("Hola")

let nombre = "Fabricio",
apellido = "Miranda",
edad = 23

console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);

console.clear()

console.log(document)
console.dir(document)

console.group("Cursos de John en YT")
console.log("Curso de Js");
console.log("Curso de NodeJs");
console.log("Curso de PWA");
console.log("Curso de CSS");
console.groupEnd()

console.clear()
console.table(Object.entries(console).sort())

let ar1 = [1,2,3,4,5]
let ar2 = ["a","e","i","o","u"]

console.table(ar1)
console.table(ar2)

const perro = {
    nombre: "Kenai",
    raza: "Doberman",
    edad: 23
}

console.table(perro)

console.clear()
console.time("Cuanto tiempo tarde mi codigo")

const arr = Array(10000)

for (let i = 0; i < arr.length; i++) {
    arr[i] = i
}

console.timeEnd("Cuanto tiempo tarde mi codigo")

console.clear()

for (let i = 0; i < 100; i++) {
    console.count("codigo for")
    console.log(i);
}
console.clear()
let x = 3,
y = 2,
pruebaXY = "Se espera que X siempre sea menor que Y"
console.assert(x < y, {x,y, pruebaXY}) */

/* console.log(Date());

let fecha = new Date()
console.log(fecha);
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(Date.now()); */
/* 
console.log(Math);

console.log(Math.PI);
console.log(Math.abs(-3.15));
console.log(Math.ceil(7.2));
console.log(Math.floor(7.8));
console.log(Math.round(7.2));
console.log(Math.round(7.8));
console.log(Math.sqrt(81));
console.log(Math.pow(2,5));
console.log(Math.sign(-7.8));
console.log(Math.sign(0));
console.log(Math.sign(7.8));
console.log(Math.round(Math.random() * 100)); */

/* console.log(window); */
// alert("esto es una alerta")
// confirm("esto es una confirmacion")
// prompt("esto es una promt y le permite al usuario ingresar un valor")
/* let alerta = alert("esto es una alerta"),
confirmacion = confirm("esto es una confirmacion"),
aviso = prompt("esto es una aviso y le permite al usuario ingresar un valor")

console.log(alerta);
console.log(confirmacion);
console.log(aviso); */
/* let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci expedita, soluta dolor qui perspiciatis et officia. Iusto modi accusamus voluptates, consectetur quis, unde a repellenduslorem dolor quasi ad nisi excepturi?" */
/* let expReg = new RegExp("lorem","ig") */

/* console.log(expReg.test(cadena));
console.log(expReg.test(cadena)); */
/* let expReg2 = /lorem/ig
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena)); */
/* 
(function() {
    console.log("Mi primer IIFE");
})();

(function(d,w,c) {
    console.log("Mi segundo IIFE");
console.log(w);
console.log(d);
c.log("esto es un console.log")
})(document,window,console); */

