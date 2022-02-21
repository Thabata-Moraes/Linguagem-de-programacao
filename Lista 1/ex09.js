function area(){
    let base_maior = Number(document.getElementById("base_maior").value)
    let base_menor = Number(document.getElementById("base_menor").value)
    let altura = Number(document.getElementById("altura").value)
    let area = ((base_maior + base_menor)*altura)/2

    document.getElementById("resultado").innerHTML = "A área do trapézio é: " + area;
}
