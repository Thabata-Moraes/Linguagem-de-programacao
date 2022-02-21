function desc(){
    let preco = document.getElementById("preco").value
    desc = preco - (preco*0.1)
    alert("O valor com desconto é " + desc)
}