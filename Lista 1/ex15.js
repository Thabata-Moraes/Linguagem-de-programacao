function resultado(){
    let sal = parseFloat(document.getElementById("sal").value)
    let conta1 = parseFloat(document.getElementById("conta1").value)
    let conta2 = parseFloat(document.getElementById("conta2").value)
        

   conta1 = conta1 + (conta1*0.02)
   conta2 = conta2 + (conta2*0.02)

   let sal_final = sal - (conta1 + conta2)


    document.getElementById("saida").innerHTML = 'Restará de salário: ' + sal_final
}