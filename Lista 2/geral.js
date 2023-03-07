function nota(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let media = (num1 + num2)/2 
    let mensagem 

    if((media>=0) && (media<3)){
        mensagem = 'Reprovado'
    } else if ((media>=3) && (media<7)){
        mensagem = 'Exame'
    } else if ((media>=7)&&(media<=10)){
        mensagem = "Aprovado"
    } else {
        mensagem = 'Impossível informar'
    }

    document.getElementById("mensagem").innerHTML =  mensagem 
}

function calcularEx5(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let opcao = Number(document.getElementById("opcao").value)
    let mensagem 
    
    switch (opcao){
        case 1:
            let media = (num1+num2)/2
            mensagem = `A média entre os números é ${media}`
            break
        case 2:
            let diferenca
            if(num1 > num2){
                diferenca = num1 - num2
                mensagem = `A diferença entre os números é de: ${diferenca}`
            } else if (num2 >= num1){
                diferenca = num2 - num1
                mensagem = `A diferença entre os números é de: ${diferenca}`
            } else {
                mensagem = 'Algo errado. Tente novamente'
            }
            break
        case 3:
            let produto = num1 * num2 
            mensagem = `O produto entre os números é: ${produto}`
            break
        case 4:
            let divisao = num1 / num2 
            mensagem =  `A divisão do primeiro pelo segundo é: ${divisao}`
            break
        default:
            mensagem = 'Tente novamente'
    }

    document.getElementById("mensagem").innerHTML =  mensagem 
}