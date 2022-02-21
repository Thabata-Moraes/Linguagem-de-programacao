function resultado(){
    let cateto1 = parseFloat(document.getElementById("cateto1").value)
    let cateto2 = parseFloat(document.getElementById("cateto2").value)
    
    hipotenusa = (cateto1**2) + (cateto2**2)
    hipo = Math.sqrt(hipotenusa)
    
    document.getElementById("saida").innerHTML = 'O valor da hipotenusa é: ' + hipo
}