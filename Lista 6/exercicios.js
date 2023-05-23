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

function exe5Cadastra(mat, meses){
    for(let i=0;i<12;i++){
        mat[i] = [] // aloca espaço na memória para cada vetor da matriz
        alert(`Informe as vendas do mês ${meses[i]}`)
        for(let j=0;j<4;j++){
            mat[i][j] = Number(prompt(`Valor vendido na semana ${j+1}`))
        }
    }
}
function exe5TotalMes(mat, meses){
    let totalMes = []
    let saida = ''
    for(let i=0;i<12;i++){
        totalMes[i] = 0
        for(let j=0;j<4;j++){
            totalMes[i] = totalMes[i] + mat[i][j]
        }
        saida = saida + `\n ${meses[i]} - ${totalMes[i]}`
    }
    alert(saida)
}
function exe5TotalSemana(mat){
    let totalSemana = []
    let saida = ''
    for(let j=0;j<4;j++){
        totalSemana[j] = 0
        for(let i=0;i<12;i++){
            totalSemana[j] = totalSemana[j] + mat[i][j]
        }
        saida = saida + `Semana ${i} vendeu ${totalSemana[i]}`
    }
    alert(saida)
}
function exe5Total(mat){
    let total = 0
    for(let i=0;i<12;i++){
        for(let j=0;j<4;j++){
            total += mat[i][j]
        }
    }
    alert(`Total vendido ${total}`)
}
function exe5(){
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
    let mat = []
    // passagem de parâmetro é por referência
    // a função chamada, quando altera o parâmetro, afeta a variável da função que chamou
    exe5Cadastra(mat, meses) 
    exe5TotalMes(mat, meses)
    exe5TotalSemana(mat)
    exe5Total(mat)
}

function preencherMatriz(matriz, linhas, colunas){
    for (let i=0; i<linhas; i++){
        matriz[i] = []
        for (let j=0; j<colunas; j++){
            matriz[i][j] = parseInt(Math.random()*20)
        }
    }
}

function mostraMatriz(matriz){
    let saida
    for(let i=0; i<matriz.length; i++){
        let saida = ''
        for(let j=0; j<matriz[i].length; j++){
            saida = saida + " " + matriz[i][j]
        }
        console.log(saida)
    }
    console.log('\n')
}

function somaLinhaColuna(M, N){
    let o =[]
    for (let i=0; i<M.length; i++){
        o[i] = []
        for (let j=0; j<M[i].length; j++){
            o[i][j] = M[i][j] + N[j][i]
        }
    }
    mostraMatriz(o)
}

function exe7(){
    let M = []
    let N =[]
    preencherMatriz(M, 4, 6)
    preencherMatriz(N, 6, 4)
    mostraMatriz(M)
    mostraMatriz(N)
    somaLinhaColuna(M, N)
}

function diagonalPrincipal(matriz){
    let soma =0
    for(let i=0;i<matriz.length;i++){
        for(let j=0;j<matriz[i].length;j++){
            if (i == j){
                soma += matriz[i][j]
            }
        }
    }
    console.log(`Soma da DP é ${soma}`)
}

function diagonalSecundaria(matriz){
    let soma =0
    for(let i=0;i<matriz.length;i++){
        let aux = matriz[i].length - i - 1
        console.log(`${i} x ${aux} `)
        soma += matriz[i][aux]
    }
    console.log(`Soma da DS é ${soma}`)
}
function exe10(){
    let matriz = []
    preencheMatriz(matriz, 5, 5)
    mostraMatriz(matriz)
    diagonalPrincipal(matriz)
    diagonalSecundaria(matriz)
}