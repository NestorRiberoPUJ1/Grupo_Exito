
function clickedButton() {
    console.log("Haz clickeado el botón");
}

function clickedElement(element) {
    console.log("El elemento es:", element);
    console.log("Texto:", element.innerText);
    console.log("Classes:", element.classList);
    element.innerText += "+"
}

function toggleButton(element) {
    if (element.innerText === "On") {
        element.innerText = "Off";
    } else {
        element.innerText = "On";
    }
}

function remove(element) {
    element.remove();
}

function over(element) {
    element.style.backgroundColor = "lime";
}

function out(element) {
    element.style.backgroundColor = "transparent";
}