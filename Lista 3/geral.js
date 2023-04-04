function calcularExemplo01(){
    let num1 = Number(document.getElementById("num1").value)
    let conta = 0
    let nota = 0
    let acumula = 0
    while (conta<num1){
        nota=Number(prompt(`Digite a idade do aluno ${conta+1}`))
        acumula = acumula + nota
        conta ++
    }
    let mensagem = `A média da turma é: ${acumula/num1}`
    document.getElementById("mensagem").innerHTML =  mensagem

}
function calcularEx01(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let num3 = Number(document.getElementById("num3").value)
    let num4 = Number(document.getElementById("num4").value)
    let conta = 1
    while (conta<=3){
        if (num1>num2){
            let aux
            aux = num1
            num1 = num2 
            num2 = aux 
        } 
        if (num2>num3){
            let aux
            aux = num2
            num2 = num3 
            num3 = aux 
        }
        if (num3>num4){
            let aux
            aux = num3
            num3 = num4 
            num4 = aux 
        }
        conta++
    }

    let mensagem = `
        Ordenação crescente: ${num1}, ${num2}, ${num3}, ${num4}
    `
    document.getElementById("mensagem").innerHTML =  mensagem

}

function calcularEx03(){
    let idade
    let f1 = 0
    let f2 = 0 
    let f3 = 0
    let f4 = 0 
    let f5 = 0
    let pf1 = 0 
    let pf5 = 0

    for (let i=0; i<8; i++){
        idade = Number(prompt(`Informa a idade ${i+1}`))
        if(idade>0 && idade<=15){
            f1++
        } else if(idade>15 && idade<=30){
            f2++
        } else if(idade>30 && idade<=45){
            f3++
        } else if(idade>45 && idade<=60){
            f4++
        } else if (idade>60){
            f5++
        } else {
            alert('Idade Inválida')
            break
        }
    }
    pf1 = (f1*100)/8
    pf5 = (f5*100)/8

    let mensagem = `
        A porcentagem de idades na faixa etária 1 foi de: ${pf1} </br>
        A porcentagem de idades na faixa etária 5 foi de: ${pf5}
    `
    document.getElementById("mensagem").innerHTML =  mensagem

    
}

function calcularEx04(){
    let num = Number(prompt('Entre com um valor'))
    let mensagem = ''
    let tabuada
    for (let i=0; i<=10; i++){
        tabuada = num * (i)
        mensagem = mensagem + `${num} * ${i} = ${tabuada} </br> `
    }

    document.getElementById("mensagem").innerHTML =  mensagem

    
}

function calcularEx05(){
    let i = 1
    let saida = ""
    let saida1 = ""
    let saida2= ""
    let saida3 = ""
    let saida4 = ""
    let saida5 = ""
    let saida6 = ""
    let saida7 = ""
    let saida8 = ""
    let saida9 = ""
    let mensagem =""

    while(i<=10){
        saida = (1*i)
        saida1 = (2*i)
        saida2 = (3*i)
        saida3 = (4*i)
        saida4 = (5*i)
        saida5 = (6*i)
        saida6 = (7*i)
        saida7 = (8*i)
        saida8 = (9*i)
        saida9 = (10*i)
        mensagem += ` Tabuada do ${i}: </br>  ${saida} </br>  ${saida1} </br>  ${saida2} </br> ${saida3} </br> ${saida4} </br> ${saida5} </br> ${saida6} </br> ${saida7} </br> ${saida8} </br> ${saida9} </br> `
        i++
    }
    document.getElementById("mensagem").innerHTML = mensagem
}

function calcularEx06(){
    let aVista = 0
    let aPrazo = 0
    let total = 0
    let tipo = 0
    let valor = 0
    let prest = 0
    i = 0
    let mensagem = ""

    while (i<=2){
        tipo = prompt("Digite o tipo de pagamento: V- À Vista ou P - A Prazo")
        valor = Number(prompt("Digite o valor da compra: "))
        if ((tipo == "p") || (tipo == "P")){
            aPrazo += valor
        }else if ((tipo == "v") || (tipo == "V")){
            aVista += valor
        }i++
    }
    prest = aPrazo / 3
    total = aPrazo + aVista
    mensagem = `O valor total das compras à vista: ${aVista}  </br> O valor total das compras a prazo: ${aPrazo} </br>O valor total das compras efetuadas: ${total} </br>O valor da primeira prestação das compras a prazo juntas: ${prest}`
 
    document.getElementById("mensagem").innerHTML = mensagem
}

function calcularEx07(){
    let maiorId = 0
    let somaAl = 0
    let quant = 0
    let pesoMenor = 0
    let idade = 0
    let altura = 0
    let peso = 0
    let media = 0
    let perc = 0
    i = 0

    while (i<=5){
        idade = Number(prompt("Digite a idade da pessoa: "))
        altura = Number(prompt("Digite a altura da pessoa: "))
        peso = Number(prompt("Digite a massa corporal da pessoa: "))
        if (idade>50){
            maiorId += 1
        }else if ((idade>10) && (idade<20)){
            somaAl += altura
            quant += 1
        }if (pesoMenor<40){
            pesoMenor += 1
        }i++
    }
    media = somaAl / quant
    perc =  pesoMenor /5

    mensagem = `A quantidade de pessoas com idade superior a 50 anos: ${maiorId} 
    </br>A média das alturas das pessoas com idade entre 10 e 20 anos: ${media} 
    </br>A porcentagem das pessoas com massa corporal inferior a 40 quilos entre todas as pessoas analisadas: ${perc}`
 
    document.getElementById("mensagem").innerHTML = mensagem
}

function calcularEx08(){
    let maiorId = 0
    let somaId = 0
    let quant = 0
    let azul = 0
    let idade = 0
    let altura = 0
    let peso = 0
    let olhos = ""
    let cabelo =  ""
    let media = 0
    let perc = 0
    let ruivo = 0
    i = 0

    while (i<=6){
        idade = Number(prompt("Digite a idade da pessoa: "))
        altura = Number(prompt("Digite a altura da pessoa: "))
        peso = Number(prompt("Digite a massa corporal da pessoa: "))
        olhos = prompt("Digite a cor dos olhos da pessoa: A-Azul ou P-Preto ou V-Verde ou C-castanho")
        cabelo = prompt("Digite a cor do cabelo da pessoa: P-Preto ou C-Castanho ou L-Loiro ou R-Ruivo")
        if ((idade>50) && (peso<60)){
            maiorId += 1
        }if (altura<1.50){
            somaId += idade
            quant += 1
        }if ((olhos == "A") || (olhos == "a")){
            azul += 1
        }if ((cabelo == "R") || (cabelo == "r") && (olhos != "A") || (olhos != "a")){
            ruivo += 1
        }i++
    }
    media = somaId / quant
    perc =  azul /6

    mensagem = `
    A quantidade de pessoas com idade superior a 50 anos e peso inferior a 60 quilos: ${maiorId}
    </br>A média das idades das pessoas com altura até 1.50: ${media} 
    </br>A porcentagem das pessoas com olhos azuis entre todas as pessoas analisadas: ${perc} 
    </br>A quantidade de ruivos que não tem olhos azuis: ${ruivo}
    `
 
    document.getElementById("mensagem").innerHTML = mensagem
}


function calcularEx21(){
    let opcao1 = 0
    let opcao2 = 0
    let opcao3 = 0
    let opcao4 = 0
    let opcao5 = 0
    let opcao6 = 0 
    let mensagem = ''
    let total = 0 
    let op;

    do {
        total += 1
        op=Number(prompt(`Entre com a opção:
        0 - Encerrar votação
        1 - Votar candidato 1 
        2 - Votar candidato 2 
        3 - Votar candidato 3 
        4 - Votar candidato 4 
        5 - Votar nulo 
        6 - Votar branco
        `))

        switch(op){
            case 0:
                break
            case 1:
                opcao1 += 1
                break
            case 2:
                opcao2 += 1
                break
            case 3:
                opcao3 += 1
                break
            case 4:
                opcao4 += 1
                break
            case 5:
                opcao5 += 1
                break
            case 6:
                opcao6 += 1
                break
            default:
                alert ('Opção indisponível')
        }
        console.log(op)
    } while(op!=0);

    mensagem = `
        Resumo da votação: </br>
        Candidato 1: ${opcao1} </br>
        Candidato 2: ${opcao2} </br>
        Candidato 3: ${opcao3} </br>
        Candidato 4: ${opcao4} </br>
        Votos nulos: ${opcao5} </br>
        Votos brancos: ${opcao6} </br>
        % nulo: ${((opcao5/total)*100).toFixed(2)} </br>
        % brancos: ${((opcao6/total)*100).toFixed(2)} </br>
    `
    document.getElementById("mensagem").innerHTML =  mensagem
}

function calcularEx23(){
    do {
        total += 1
        op=Number(prompt(`Entre com a opção:
        1 - Novo salário 
        2 - Férias  
        3 - Décimo terceiro
        4 - Sair
        `))

        switch(op){
            case 1:
                let sal=Number(prompt("Entre com o novo salário"))
                if (sal<=250){

                } else if (sal>250 && sal <=600){

                } else if (sal>600){

                }
                break
            case 2:
                opcao2 += 1
                break
            case 3:
                opcao3 += 1
                break
            case 4:
                opcao4 += 1
                breaki
            default:
                alert ('Opção indisponível')
        }
        console.log(op)
    } while(op!=4);

    mensagem = `
        
    `
    document.getElementById("mensagem").innerHTML =  mensagem
}