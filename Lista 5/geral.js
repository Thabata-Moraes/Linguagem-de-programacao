function calcularEx02(){
    let vetor = []
    let totalSal = 0
    let totalFilhos = 0
    for(i=0; i<2; i++){
        let obj = {
            salario: Number(prompt("Informe o salário")),
            idade: Number(prompt("Informe a idade")),
            filhos: Number(prompt("Informe a quantidade de filhos")),
            genero: prompt("Informe M ou F").toUpperCase,
        }
        vetor.push(obj)
        totalSal += vetor[i].salario
        totalFilhos += vetor[i].filhos
        console.log(vetor[i].genero())
    }
    
    let maiorSal = 0 
    let qtdeF = 0
    let qtdeFSal = 0
    for (i=0; i<vetor.length; i++){
        if(vetor[i].salario>maiorSal){
            maiorSal = vetor[i].salario
        }
        if(vetor[i].genero == "F"){
            console.log("Entrou no genero")
            qtdeF++
            if(vetor[i].salario > 1000){
                qtdeFSal++
            }
        }
    }
    console.log(qtdeF)
    console.log(qtdeFSal)

    console.log(`A média de salário é: ${totalSal/vetor.length}`)
    console.log(`A média de filhos é: ${totalFilhos/vetor.length}`)
    console.log(`O maior salário é: ${maiorSal}`)
    console.log(`A porcentagem de mulheres com salário maior de 1000 é: ${(qtdeFSal*100)/qtdeF}`)
}