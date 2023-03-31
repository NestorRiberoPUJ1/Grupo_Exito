var carro = {
    color: "gris",
    motor: 2.4,
    luces: "halógenas",
    marca: "Audi",
    modelo: "A4",
    año: "2018",
    mostrar: function () {
        console.log(`${this.marca} ${this.modelo} color ${this.color}, motor ${this.motor}L`);
        console.log("Carro color " + this.color + ", motor " + this.motor + "L");
    },
    tunear: function () {
        this.motor += 0.2;
        this.mostrar();
    }
}

console.log(carro);
console.log("---------");
carro.mostrar();
console.log("---------");
carro.tunear();
