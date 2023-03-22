
var titulo = document.querySelector("h1");

console.log("TITULO");
console.log(titulo);

var listItem = document.querySelector("ul li");

console.log("Elemento de lista");
console.log(listItem);

var parrafo = document.querySelector("#parrafo");

console.log("Parrafo");
console.log(parrafo);

var prettyItems = document.querySelectorAll(".prettyElement");

console.log("Pretty Elements");
console.log(prettyItems);

var contador = 0;

function toggle(element) {
    console.log(element.classList);
    console.log(element.style);
    element.style.color = "red";
    element.classList.remove("prettyElement");
    element.classList.add("prettyElementRed");
    contador += 1;
    console.log(contador);
    console.log(element.innerHTML);
    element.innerHTML = "clicked";
}


function escogerAlmuerzo(element) {
    alert("Elegiste " + element.value);
}

var nameTag = document.querySelector("#name-tag");
function setName(element) {
    console.log(element.value);
    nameTag.innerText = element.value;
}