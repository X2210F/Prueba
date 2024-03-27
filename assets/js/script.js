// tamaño de parrafo de 3 columnas
window.onload = function () {
    var paragraph = document.getElementById("myParagraph");
    paragraph.onclick = function () {
        this.style.fontSize = "2em";
    };
};

window.onload = function () {
    var paragraph = document.getElementById("myParagraph");
    paragraph.onclick = function () {
        this.style.fontSize = "2em";
    };
    paragraph.ondblclick = function () {
        this.style.fontSize = "1em";
    };
}


// alerta boton enviar
function gformr() {
    alert("Información guardada")
}