var intro = document.querySelector("#introElement")
var container = document.querySelector(".container")
var music = document.getElementById("#music");

function playMusic() {

}

function startGrinding() {
    if (document.getElementById("entryField").value !== false) {

        intro.parentNode.removeChild(intro);
        document.body.style.backgroundColor = "black";
        
        console.log("test")
    } 
}


document.getElementById("goButton").addEventListener("click", function() {
    startGrinding();
})