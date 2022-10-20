console.log("Hola Jorge en consola");
alert("Hola Jorge en un alert");

//acumulador

let pagos = 0;

let alimentoAperros = 5000;
let alimentoBperros = 8000;
let alimentoCperros = 10000;

let alimentoAgatos = 1000;
let alimentoBgatos = 1500;
let alimentoCgatos = 2000;

pagos = pagos + alimentoCperros;
pagos = pagos + alimentoBgatos;
pagos = pagos + alimentoCgatos;

console.log("a pagar: " + pagos);

let acumulador = 0;

let productos = 0; 


//for
for(let i=0;i<3;i++){
    productos = Number(prompt("ingrese valor producto"));
    acumulador = acumulador + productos;
}

console.log("el total a pagar es: " + acumulador);