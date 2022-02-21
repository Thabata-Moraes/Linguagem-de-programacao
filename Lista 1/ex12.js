function sal(){
    let sal_minimo = parseFloat(document.getElementById("sal_minimo").value)
    let sal_funcionario = parseFloat(document.getElementById("sal_funcionario").value)
        
    let quant = sal_funcionario/ sal_minimo

    document.getElementById("resultado").innerHTML = 'A quantidade de salário mínimo é de: ' + quant;
}