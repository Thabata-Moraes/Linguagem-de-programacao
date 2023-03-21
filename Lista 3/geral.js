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