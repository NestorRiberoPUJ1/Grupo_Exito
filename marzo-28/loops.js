var veces = 10; //numericas
var ahora = 0;
var nombre = "Nestor"//texto
var mayorEdad = true //boolean
/*
while (ahora < veces) {
    console.log("Incrementando", ahora);
    ahora += 1; // ahora = ahora + 1 
}
console.log("----------------------")
for (let x = 0; x < 10; x++) {
    console.log("Incrementando en FOR", x);
}
*/
var persona = {
    estatura: 195,  //numerico
    peso: 85,   //numérico
    cabello: "castaño", //texto
    soltero: true,   //booleano
    comidas: ["Hamburguesa", "HotDog", "Fries"],
    contacto: {
        nombre: "Ana",
        telefono: 321321321,
    }
};

var verduras = ["brocoli", "coliflor", "zanahoria", "lechuga"]

var contactos = [{ nombre: "Frodo", tel: 1231321 }, { nombre: "Sam", tel: 684986 }, { nombre: "Faramir", tel: 8585858 }, { nombre: "Gandalf", tel: 9999999 }]

console.log(persona.cabello);
console.log(verduras[2]);
console.log(persona.comidas[1]);
console.log(persona.contacto.nombre);
console.log(contactos[2].tel);

for (let index = 0; index < contactos.length; index++) {
    if (contactos[index].nombre == "Faramir") {
        console.log("Llamando a ", contactos[index].tel);
        break;
    }
    else {
        console.log("Buscando...");
    }
}

var ensalada = [verduras[0], verduras[2]];
console.log(ensalada);