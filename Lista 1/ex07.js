function peso_novo(){
    let peso = Number(document.getElementById("peso").value)
   
    let peso_mais =  peso + (peso*0.15)
    let peso_menos = peso - (peso*0.2)

    document.getElementById("resultado").innerHTML = "Se houver um aumento de peso de 15%, o novo peso será: " + peso_mais + "\n Se houver uma diminuição de peso de 20%, o novo peso será: " + peso_menos;
}
