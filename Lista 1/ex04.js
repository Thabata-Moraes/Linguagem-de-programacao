function media(){
    let nota1 = document.getElementById("nota1").value
    let nota2 = document.getElementById("nota2").value
    let media = ((nota1 * 2) + (nota2 * 3)) / 5 
    alert("A média ponderada é " + media)
}