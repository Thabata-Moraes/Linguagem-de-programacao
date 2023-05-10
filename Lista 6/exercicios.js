function exe1(){
    let mat = []
    // entrada de dados
    for(let i=0;i<3;i++){
        mat[i] = []
        for(let j=0;j<5;j++){
            mat[i][j] = Number(prompt(`Informe elemento da posição ${i+1} x ${j+1}`))
        }
    }
    // calcula qtde de número entre 15 e 20
    let qtde = 0
    for(let i=0;i<3;i++){
        for(let j=0;j<5;j++){
            if ((mat[i][j] >= 15) && (mat[i][j] <= 20)){
                qtde++
            }
        }
    }
    // mostra o resultado
    alert(`A qtde de número entre 15 e 20 é ${qtde}`)
}

function exe2(){
    let mat = []
    for(let i=0;i<2;i++){
        mat[i] = []
        for(let j=0;j<4;j++){
            mat[i][j] = Number(prompt(`Informe elemento da posição ${i+1} x ${j+1}`))
        }
    }
    // calcula qtde entre 12 e 20 por linha
    let vet = []
    let soma = 0
    let contaPares = 0
    for(let i=0;i<2;i++){
        vet[i] = 0
        for(let j=0;j<4;j++){
            if ((mat[i][j] >= 12) && (mat[i][j] <= 20)){
                vet[i]++
            }
            if (mat[i][j] % 2 == 0){
                soma += mat[i][j]
                contaPares++
            }
        }
    }
    alert(vet)
    alert(soma/contaPares)
}

function exe3(){
    let mat = []
    for(let i=0;i<6;i++){
        mat[i] = []
        for(let j=0;j<4;j++){
            mat[i][j] = Number(prompt(`Informe elemento da posição ${i+1} ${j+1}`))
        }
    }
    // calcula maior e menor números 
    let maior = mat[0][0]; let lmaior = 0; let cmaior = 0; 
    let menor = mat[0][0]; let lmenor = 0; let cmenor = 0;
    for(let i=0;i<6;i++){
        for(let j=0;j<3;j++){
            if (mat[i][j] > maior){
                maior = mat[i][j]; lmaior = i; cmaior = j;
            }
            if (mat[i][j] < menor){
                menor = mat[i][j]; lmenor = i; cmenor = j;
            }
        }
    }
    alert(`Maior: ${maior} na posição ${lmaior+1} x ${cmaior+1}`)
    alert(`Menor: ${menor} na posição ${lmenor+1} x ${cmenor+1}`)
}

function exe4(){
    let notas = []
    let alunos = []
    for(let i=0;i<3;i++){
        notas[i] = []
        alunos[i] = (prompt(`Informe o nome do ${i+1}º aluno`))
        for(let j=0;j<2;j++){
            notas[i][j] = Number(prompt(`Informe a nota da prova ${j+1} de ${alunos[i]}`))
        }
    }
    // calcula maior e menor números 
    let somaNotasTodos = 0
    let situacao
    for(let i=0;i<3;i++){
        let somaNotas = 0;
        for(let j=0;j<2;j++){
            somaNotas += notas[i][j]
        }
        somaNotasTodos += somaNotas
        if(somaNotas/notas[i].length > 7){
            situacao = 'Aprovado'
        } else if(somaNotas/notas[i].length > 5){
            situacao = 'Exame'
        } else {
            situacao = 'Reprovado'
        }
        alert(`Nome aluno: ${alunos[i]}`)
        alert(`Média: ${somaNotas/2}`)
        alert(`Situação: ${situacao}`)
    }
    console.log(notas.length)
    alert(`A média da turma é: ${somaNotasTodos/(notas.length)}`)
    
}

