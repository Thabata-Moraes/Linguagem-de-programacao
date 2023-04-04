
function calcularEx02(){
    let vetor = []
    for(let i=0; i<7; i++){
        vetor.push(Number(prompt(`Informe o elemento ${i+1}`)))
    }
    let mult2=[]; let mult3=[]; let mult23=[]
    for(let i=0;i<7;i++){
        if((vetor[i]%2==0) && (vetor[i]%3==0)){
            mult23.push(vetor[i])
        } else if(vetor[i]%2==0){
            mult2.push(vetor[i])
        } else if(vetor[i]%3==0){
            mult3.push(vetor[i])
        }
    }
    console.log(`Multiplos de 2 e 3: ${mult23}`)
    console.log(`Multiplos de 2: ${mult2}`)
    console.log(`Multiplos de 3: ${mult3}`)
}

function calcularEx03(){
    let id=[]
    let qtde=[]
    let cliente=[]
    let codCliente 
    let codProduto
    let qtdeCompra
    
    for(let i=0;i<10;i++){
        id.push(prompt(`Informe o id do produto ${i+1}`))
        qtde.push(Number(prompt(`Informe a quantidade do produto ${i+1}`)))
    }
    while (codCliente != 0){
        codCliente = (prompt(`Informe o id do cliente ou 0 para sair: `))
        if (codCliente != 0){
            codProduto = (prompt(`Informe o id do produto ou 0 para sair: `))
            for(let i=0; i<id.length; i++){
                if(codProduto == id[i]){
                    qtdeCompra = (prompt(`Informe a quantidade de produto: `))
                    if(qtdeCompra<=qtde[i]){
                        qtde[i] = qtde[i] - qtde
                        console.log('Compra realizada com sucesso')
                    } else {
                        console.log('Estoque insuficiente')
                    } 
                    break 
                }    
            }    
            console.log('Produto não cadastrado')
    }


    console.log(`O número existe na(s) posição(ões): ${posicoes}`)
}

function calcularEx04(){
    let vetor = []
    let posicoes =[]
    
    for(let i=0;i<15;i++){
        vetor.push(Number(prompt(`Informe o elemento ${i+1}`)))
        if(vetor[i]==30){
            posicoes.push(i)
        }
    }
    console.log(`O número existe na(s) posição(ões): ${posicoes}`)
}