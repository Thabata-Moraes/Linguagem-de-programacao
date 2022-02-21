function resultado(){
    let raio = parseFloat(document.getElementById("raio").value)
   
    let comp = parseFloat(2 * 3.14159265359 * raio)
    let area = parseFloat(3.14159265359 * (raio*raio))
    let volume = parseFloat(1/4 * 3.14159265359 * (raio*raio*raio))
    
    document.getElementById("saida").innerHTML = 'O comprimento da esfera é de: ' + comp + '<br/>' + 'A área da esfera é de: ' + area + '<br/>' + 'O volume da esfera é de: ' + volume
}