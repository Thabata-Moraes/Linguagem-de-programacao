function area(){
    let lado = Number(document.getElementById("lado").value)
    let area = lado * lado

    document.getElementById("resultado").innerHTML = "A área do quadrado é: " + area;
}
