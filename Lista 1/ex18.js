function resultado(){
    let celsius = parseFloat(document.getElementById("celsius").value)
   
    let fahrenheit = parseFloat(180*((celsius+32)/100))
    
    document.getElementById("saida").innerHTML = 'A temperatura em fahrenheit é de: ' + fahrenheit
}