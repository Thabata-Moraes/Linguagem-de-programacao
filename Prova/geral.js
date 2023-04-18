function calcularProva(){
    let classificacao=[]
    let qtde=[]
    let computadores=[]
    let quantidade
    let modelo  
    let modeloCompra =[]
    let classificacaoCompra = [] 
    let qtdeCompra =[]
    let pos 
    let maior = 0
    let menor = 100000000000
    let posMaior 
    let posMenor 
    
    for(let i=0;i<2;i++){
        computadores.push(prompt(`Informe o modelo do ${i+1} computador:`))
        quantidade = Number(prompt(`Informe a quantidade do ${i+1} computador`))
        if(quantidade > 0){
            qtde.push(quantidade)
        } else return 
        classificacao.push(Number(prompt(`Informe a classificacao do ${i+1} computador, sendo as opções: \n 1 - Gamer \n 2 - Notebook \n 3 - Desktop`)))
    }

    for(let i=0;i<2;i++){
        modelo = prompt(`Informe o modelo do computador da ${i+1} compra:`)
        for(j=0; j<computadores.length; j++){
            if(modelo == computadores[j]){
                modeloCompra.push(modelo)
                pos = j 
            } else if (j == computadores.length){
                alert('Modelo não existe. Programa encerrado') 
                return
            }
        }
        quantidade = Number(prompt(`Informe a quantidade de compra do ${i+1} computador`))
        console.log(qtde[pos])
        console.log(computadores[pos])
        if(quantidade < qtde[pos]){
            qtdeCompra.push(quantidade)
            console.log('Passou aqui')
            qtde[pos] = qtde[pos] - quantidade
        } else {
            alert('Quantidade insuficiente. Programa encerrado')
            return
        }
        classificacaoCompra = Number(prompt(`Informe a classificacao do ${i+1} computador que está sendo comprado, sendo as opções: \n 1 - Gamer \n 2 - Notebook \n 3 - Desktop`))
    }
    for(i=0; i<computadores.length; i++){
        if(qtde[i] > maior){
            maior = qtde[i]
            posMaior = i 
        } 
        if (qtde[i] < menor){
            menor = qtde[i]
            posMenor = i 
        }
    }

    alert(`
    O maior estoque é do modelo: ${computadores[posMaior]} com ${qtde[posMaior]} unidades 
    O menor estoque é do modelo: ${computadores[posMenor]} com ${qtde[posMenor]} unidades
` ) 
}
