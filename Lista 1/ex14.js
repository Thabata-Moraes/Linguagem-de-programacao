function idade(){
    let ano_nasc = parseFloat(document.getElementById("ano_nasc").value)
    let ano_atual = parseFloat(document.getElementById("ano_atual").value)
        

    let idade = ano_atual - ano_nasc 
    let idade_meses = idade*12
    let idade_semanas = idade*52
    let idade_dias = idade*365

    document.getElementById("resultado").innerHTML = 'A idade é: ' + idade + '<br/>' + 'A idade em meses é: ' + idade_meses + '<br/>' + 'A idade em semanas é: ' + idade_semanas + '<br/>' + 'A idade em dias é: ' + idade_dias;
}