function calcularEx01(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let num3 = Number(document.getElementById("num3").value)
    let num4 = Number(document.getElementById("num4").value)
    let soma = parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4)
    let media  = soma / 4
    if (media >= 7) {
        mensagem.innerHTML = "Aprovado " + "<br/>A média é: " + media
    } else {
        mensagem.innerHTML = "Reprovado " + "<br/>A média é: " + media
    }
}

function calcularEx02(){
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

function calcularEx03(){
   
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    
    if (num1 > num2) {
        mensagem.innerHTML = `O maior número é : ${num1}`
    } else if (num2 > num1) {
        mensagem.innerHTML =  `O maior número é : ${num2}`
    } else if (num2 = num1){
        mensagem.innerHTML =  `Os números são iguais`
    } else {
        mensagem.innerHTML =  "Algo deu errado. Tente novamente"
    } 

}

function calcularEx04(){
   
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let num3 = Number(document.getElementById("num3").value)
    
    if ((num1<num3) && (num2<num3)) {
        mensagem.innerHTML = "O número maior é: " + num3
    } else if ((num1<num2) && (num3<num2)) {
        mensagem.innerHTML = "O número maior é: " + num2
    } else if ((num3<num1) && (num2<num1)) {
        mensagem.innerHTML = "O número maior é: " + num1
    } else {
        mensagem.innerHTML = "Há números repetidos"
    }

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

function calcularEx06(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let opcao = Number(document.getElementById("opcao").value)
    let mensagem 
    
    switch (opcao){
        case 1:
            let elevado = (num1 ** num2)
            mensagem = `A potência é ${elevado}`
            break
        case 2:
            let raiz1 = Math.sqrt(num1)
            let raiz2 = Math.sqrt(num2)
            mensagem = `A raiz quadrada do 1º número é: ${raiz1.toFixed(2)} 
                        A raiz quadrada do 2º número é: ${raiz2.toFixed(2)}`
            break
        case 3:
            let raizc1 = Math.cbrt(num1)
            let raizc2 = Math.cbrt(num2)
            mensagem = `A raiz cúbica do 1º número é: ${raizc1.toFixed(2)} 
                        A raiz cúbica do 2º número é: ${raizc2.toFixed(2)}`
            break
        default:
            mensagem = 'Tente novamente'
    }

    document.getElementById("mensagem").innerHTML =  mensagem 
}

function calcularEx07(){
    let num1 = Number(document.getElementById("num1").value)
    if (num1 <500) {
        let sal = parseFloat(num1) + parseFloat(num1 * 0.30)
        mensagem.innerHTML = "O salário com reajuste é: " + sal
    } else {
        mensagem.innerHTML = "Não tem direito ao aumento"
    }
}

function calcularEx08(){
    let num1 = Number(document.getElementById("num1").value)
    if (num1 <=300) {
        let sal = parseFloat(num1) + parseFloat(num1 * 0.35)
        mensagem.innerHTML = "O salário com reajuste é: " + sal
    } else {
        let sal = parseFloat(num1) + parseFloat(num1 * 0.15)
        mensagem.innerHTML = "O salário com reajuste é: " + sal
    }
}

function calcularEx09(){
    let num1 = Number(document.getElementById("num1").value)
    if (num1 <=200) {
        let sal = (num1 * 0.10)
        mensagem.innerHTML = "O saldo médio é: " + num1 + "<br/>O valor de crédito é: " + sal
    } else if ((num1>200) && (num1<=300)) {
        let sal = (num1 * 0.20)
        mensagem.innerHTML = "O saldo médio é: " + num1 + "<br/>O valor de crédito é: " + sal
    } else if ((num1>300) && (num1<=400)) {
        let sal = (num1 * 0.25)
        mensagem.innerHTML = "O saldo médio é: " + num1 + "<br/>O valor de crédito é: " + sal
    } else if (num1>400) {
        let sal = (num1 * 0.30)
        mensagem.innerHTML = "O saldo médio é: " + num1 + "<br/>O valor de crédito é: " + sal
    }
}

function calcularEx10(){
    let num1 = Number(document.getElementById("num1").value)
    if (num1 <=12000) {
        let dis = 0.05
        let custo= parseFloat(num1) + parseFloat(num1 * dis)
        mensagem.innerHTML = "O valor do carro é:" + custo
    } else if ((num1>12000) && (num1<=25000)) {
        let dis = 0.10
        let imp = 0.15
        let dis1 = (num1 * dis)
        let imp1 = (num1 * imp)
        let custo =  parseFloat(dis1) + parseFloat(imp1) + parseFloat(num1)
        mensagem.innerHTML = "O valor do carro é:" + custo
    } else if (num1>25000) {
        let dis = 0.15
        let imp = 0.20
        let dis1 = (num1 * dis)
        let imp1 = (num1 * imp)
        let custo =  parseFloat(dis1) + parseFloat(imp1) + parseFloat(num1)
        mensagem.innerHTML = "O valor do carro é:" + custo
    }
    
}



