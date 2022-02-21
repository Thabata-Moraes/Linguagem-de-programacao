function tabuada(){
    let num = parseInt(document.getElementById("num").value)
    let tab = 0
    let final = ''
        
    for (let i=0; i<11; i++){
        
        tab = num * i
        final = final + '<br />' + num + ' x ' + i + '= ' + tab
    }

    document.getElementById("resultado").innerHTML = final;
}