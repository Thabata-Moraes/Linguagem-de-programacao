function total(){
    let sal = document.getElementById("sal").value
    let vendas = document.getElementById("vendas").value
    let porc = document.getElementById("porc").value

    let porc2 = porc/100
    let comissao = vendas * porc2
    let total = parseFloat(sal) + parseFloat(comissao)

    document.getElementById("total").innerHTML = "O valor da comissão é " + comissao + " e o valor total é " + total
}
