var colors = document.querySelectorAll(".color");

console.log(colors);

function applyColors() {
    console.log("Aplicando colores");
    for (let i = 0; i < colors.length; i++) {
        console.log(colors[i]);
        colors[i].style.color = colors[i].innerText;
    }
    for (let i = 0; i < textos.length; i++) {
        console.log(colors[i]);
        document.querySelector(textos[i]).style.color = document.querySelector(textos[i]).innerText;
    }
}

var textos = [
    "#color1",
    "#color2",
    "#color3",
    "#color4",
]

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", () => {
        alert(colors[i].innerText);
        //colors[i].parentNode.classList.add("hidden");
        //colors[i].parentNode.innerHTML += "<h3> Hola </h3>";
    })
}



//async/await
async function buscarPerro() {
    let perrito = document.getElementById("perrito");
    var response = await fetch("https://dog.ceo/api/breed/hound/images/random");
    var coderData = await response.json();
    console.log(coderData);
    perrito.src = coderData.message;
    perrito.classList.remove("hidden");
}

//Promises
function buscarPromesa() {
    let perrito = document.getElementById("perrito");
    fetch("https://dog.ceo/api/breed/hound/images/random")
        .then(response => response.json())
        .then(coderData => {
            console.log(coderData);
            perrito.src = coderData.message;
            perrito.classList.remove("hidden");
        })
}