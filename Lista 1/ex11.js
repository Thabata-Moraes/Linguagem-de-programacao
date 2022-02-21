function tabuada(){
    let diagonal_maior = parseFloat(document.getElementById("diagonal_maior").value)
    let diagonal_menor = parseFloat(document.getElementById("diagonal_menor").value)
        
    let area = (diagonal_maior*diagonal_menor)/2

    document.getElementById("resultado").innerHTML = 'A área do losango é: ' + area;
}