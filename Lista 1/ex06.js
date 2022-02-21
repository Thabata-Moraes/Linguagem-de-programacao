function sal_final(){
    let salario = document.getElementById("salario").value
    let vendas = document.getElementById("vendas").value
    let comissao = vendas * 0.04
    let sal_final = parseInt(salario) + parseInt(comissao)
    alert("O valor da comissão é: " + comissao + "\nO salário final é de: " + sal_final)
}