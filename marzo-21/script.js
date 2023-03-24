var likeButton1 = document.querySelector("#likeButton1");
var likeButton2 = document.querySelector("#likeButton2");
var likeButton3 = document.querySelector("#likeButton3");

var likes1 = document.querySelector("#likes1");
var likes2 = document.querySelector("#likes2");
var likes3 = document.querySelector("#likes3");


function deleteItem(element) {
    element.remove();
}

likeButton1.addEventListener("click", () => {
    let likes = parseInt(likes1.innerHTML);
    likes += 1;
    likes1.innerHTML = likes;
})

likeButton2.addEventListener("click", () => {
    let likes = parseInt(likes2.innerHTML);
    likes += 1;
    likes2.innerHTML = likes;
})

likeButton3.addEventListener("click", () => {
    let likes = parseInt(likes3.innerHTML);
    likes += 1;
    likes3.innerHTML = likes;
})


function search() {
    let searchText = document.querySelector("#entradaBusqueda").value;
    alert("Searching "+searchText);
}