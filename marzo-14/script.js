

//variables primitivas
var edad = 25;
var nombre = "Peter";
var soltero = true;
var ahorros = 20000;

var edad_Mary = 22;
var nombre_Mary = "Mary";
var soltero_Mary = true;
var ahorros_Mary = 20000;

/*
console.log(edad);
edad = edad + 1;
console.log(edad);
edad += + 1;
console.log(edad);

nombre += " Parker";

console.log(nombre);
console.log(nombre + edad);

soltero = false;
console.log(soltero);

soltero = !soltero;
console.log(soltero);
*/

//Creación de función cumplir años 
function cumplirAños() {
    edad += 1;
    console.log("Nueva edad:", edad);
}

function counter() {
    for (var num = 0; num <= 5; num++) {
        console.log(num);
    }
}

function ingreso(monto) {
    ahorros += monto;
    console.log("Ahorros: ", ahorros);
}
function gasto(monto) {
    ahorros -= monto;
    console.log("Ahorros: ", ahorros);
}

function cumplir_con_return(age) {
    return age + 1;
}

cumplirAños();
counter();
ingreso(15000);
gasto(7500);

edad_Mary=cumplir_con_return(edad_Mary);
console.log(edad_Mary);
edad=cumplir_con_return(edad);
console.log(edad);

