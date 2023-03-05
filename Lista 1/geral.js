function sub(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let calcular = (num1 - num2) 
    alert("A subtração dos números é " + calcular)
}

function mult(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let num3 = document.getElementById("num3").value
    let calcular = num1 * num2 * num3
    alert("A multiplicação entre os números é " + calcular)
}

function div(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let calcular = num1 / num2 
    alert("A divisão entre os números é " + calcular)
}

function media(){
    let nota1 = document.getElementById("nota1").value
    let nota2 = document.getElementById("nota2").value
    let media = ((nota1 * 2) + (nota2 * 3)) / 5 
    alert("A média ponderada é " + media)
}

function desc(){
    let preco = document.getElementById("preco").value
    desc = preco - (preco*0.1)
    alert("O valor com desconto é " + desc)
}

function sal_final(){
    let salario = document.getElementById("salario").value
    let vendas = document.getElementById("vendas").value
    let comissao = vendas * 0.04
    let sal_final = parseInt(salario) + parseInt(comissao)
    alert("O valor da comissão é: " + comissao + "\nO salário final é de: " + sal_final)
}

function peso_novo(){
    let peso = Number(document.getElementById("peso").value)
   
    let peso_mais =  peso + (peso*0.15)
    let peso_menos = peso - (peso*0.2)

    document.getElementById("resultado").innerHTML = "Se houver um aumento de peso de 15%, o novo peso será: " + peso_mais + "\n Se houver uma diminuição de peso de 20%, o novo peso será: " + peso_menos;
}

function peso_g(){
    let peso = Number(document.getElementById("peso").value)
   
    let peso_grama = peso * 1000

    document.getElementById("resultado").innerHTML = "O peso em gramas é: " + peso_grama ;
}

function area(){
    let base_maior = Number(document.getElementById("base_maior").value)
    let base_menor = Number(document.getElementById("base_menor").value)
    let altura = Number(document.getElementById("altura").value)
    let area = ((base_maior + base_menor)*altura)/2

    document.getElementById("resultado").innerHTML = "A área do trapézio é: " + area;
}

/*
function area(){
    let lado = Number(document.getElementById("lado").value)
    let area = lado * lado

    document.getElementById("resultado").innerHTML = "A área do quadrado é: " + area;
}

function tabuada(){
    let diagonal_maior = parseFloat(document.getElementById("diagonal_maior").value)
    let diagonal_menor = parseFloat(document.getElementById("diagonal_menor").value)
        
    let area = (diagonal_maior*diagonal_menor)/2

    document.getElementById("resultado").innerHTML = 'A área do losango é: ' + area;
}

function sal(){
    let sal_minimo = parseFloat(document.getElementById("sal_minimo").value)
    let sal_funcionario = parseFloat(document.getElementById("sal_funcionario").value)
        
    let quant = sal_funcionario/ sal_minimo

    document.getElementById("resultado").innerHTML = 'A quantidade de salário mínimo é de: ' + quant;
}

function tabuada(){
    let num = parseInt(document.getElementById("num").value)
    let tab = 0
    let final = ''
        
    for (let i=0; i<11; i++){
        
        tab = num * i
        final = final + '<br />' + num + ' x ' + i + '= ' + tab
    }

    document.getElementById("resultado").innerHTML = final;
}

function idade(){
    let ano_nasc = parseFloat(document.getElementById("ano_nasc").value)
    let ano_atual = parseFloat(document.getElementById("ano_atual").value)
        

    let idade = ano_atual - ano_nasc 
    let idade_meses = idade*12
    let idade_semanas = idade*52
    let idade_dias = idade*365

    document.getElementById("resultado").innerHTML = 'A idade é: ' + idade + '<br/>' + 'A idade em meses é: ' + idade_meses + '<br/>' + 'A idade em semanas é: ' + idade_semanas + '<br/>' + 'A idade em dias é: ' + idade_dias;
}

function resultado(){
    let sal = parseFloat(document.getElementById("sal").value)
    let conta1 = parseFloat(document.getElementById("conta1").value)
    let conta2 = parseFloat(document.getElementById("conta2").value)
        

   conta1 = conta1 + (conta1*0.02)
   conta2 = conta2 + (conta2*0.02)

   let sal_final = sal - (conta1 + conta2)


    document.getElementById("saida").innerHTML = 'Restará de salário: ' + sal_final
}

function resultado(){
    let cateto1 = parseFloat(document.getElementById("cateto1").value)
    let cateto2 = parseFloat(document.getElementById("cateto2").value)
    
    hipotenusa = (cateto1**2) + (cateto2**2)
    hipo = Math.sqrt(hipotenusa)
    
    document.getElementById("saida").innerHTML = 'O valor da hipotenusa é: ' + hipo
}

function resultado(){
    let raio = parseFloat(document.getElementById("raio").value)
   
    let comp = parseFloat(2 * 3.14159265359 * raio)
    let area = parseFloat(3.14159265359 * (raio*raio))
    let volume = parseFloat(1/4 * 3.14159265359 * (raio*raio*raio))
    
    document.getElementById("saida").innerHTML = 'O comprimento da esfera é de: ' + comp + '<br/>' + 'A área da esfera é de: ' + area + '<br/>' + 'O volume da esfera é de: ' + volume
}

function resultado(){
    let celsius = parseFloat(document.getElementById("celsius").value)
   
    let fahrenheit = parseFloat(180*((celsius+32)/100))
    
    document.getElementById("saida").innerHTML = 'A temperatura em fahrenheit é de: ' + fahrenheit
}
*/