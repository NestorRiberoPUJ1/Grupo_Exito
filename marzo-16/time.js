function timeout() {
    console.log("Proceso 2")
}
console.log("Inicié El programa");  //Aparece primero
console.log("Proceso1");    //Aparece segundo
setTimeout(timeout, 5000);      //Aparece Ultimo
setTimeout(() => {
    console.log("Proceso 3");       // Aparece cuarto
}, 3000);
console.log("Finalicé el programa");    //Aparece tercero


setInterval(timeout, 2000); // bucle de invertalo que ejecuta la función cada x cantidad de tiempo