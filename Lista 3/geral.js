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

