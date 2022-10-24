console.log("Hola Jorge en consola");
alert("Hola Jorge en un alert");

//condicionales
let usuario = "joguar";

let ingresoUsuario = prompt("Ingrese su usuario");

if(usuario==ingresoUsuario){
    alert("Usuario correcto");
}else{
    alert("Usuario incorrecto");
}

let password = 1234;

let ingresoClave = Number(prompt("Ingrese su clave"));

if(password==ingresoClave){
    alert("Clave correcta")
}else{
    alert("Clave incorrecta");
}//if(password != ingresoClave);
    //alert("Intente nuevamente");


//variables
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

console.log("A pagar: " + pagos);

let acumulador = 0;

let productos = 0; 


//prompt
prompt("Ingrese su pedido");
let pedido = prompt("Ingrese su pedido");
alert("El cliente ingreso: " + pedido);
console.log("El cliente ingreso: " + pedido);


//funciones

//let producto = prompt("Ingrese un producto");

//console.log(producto);

function comprar(producto) {

    console.log("El valor es: " + producto);

}

comprar(alimentoCperros);
comprar(alimentoBgatos);
comprar(alimentoCgatos);

//let alimentoCperros = 10000;
//let alimentoBgatos = 1500;
//let alimentoCgatos = 2000;

//constantes
const IVA = 21;


//for
//parseo
for(let i=0;i<3;i++){
    productos = Number(prompt("Ingrese valor producto"));
    acumulador = acumulador + productos;
}

console.log("El total a pagar es: " + acumulador);


//condicionales
//let pagoTarjeta = true;
//let pagoEfectivo = false;

//if(true){
//    alert("Ingrese datos de su tarjeta");
//}


//switch
//let pago = 000;
let opcion = Number(prompt("elegir opcion de pago: 1-efectivo 2-tarjeta"));

switch(opcion){
    case 1:
        alert("Gracias por su compra");
    break;
    case 2:
        alert("Ingrese datos de su tarjeta");

let opcionTarjeta = Number(prompt("Seleccione tarjeta: 1-Visa 2-Amex 3-Mastercard"));

switch(opcionTarjeta){
    case 1:
        alert("Ingrese datos de su tarjeta Visa");
    break;
    case 2:
        alert("Ingrese datos de su tarjeta American Express");
    break;
    case 3:
        alert("Ingrese datos de su tarjeta Mastercard");        
        }
    break;
    default:
        alert("No seleccionaste nada");    
    break;
}
   
