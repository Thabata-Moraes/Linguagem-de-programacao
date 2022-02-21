function peso_g(){
    let peso = Number(document.getElementById("peso").value)
   
    let peso_grama = peso * 1000

    document.getElementById("resultado").innerHTML = "O peso em gramas é: " + peso_grama ;
}
