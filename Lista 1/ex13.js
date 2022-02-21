function tabuada(){
    let num = parseInt(document.getElementById('num').value)

    let tab = num + ' x 0 = ' + num*0
        tab = tab + '<br/>' + num + ' x 1 = ' + num*1
        tab = tab + '<br/>' + num + ' x 2 = ' + num*2
        tab = tab + '<br/>' + num + ' x 3 = ' + num*3
        tab = tab + '<br/>' + num + ' x 4 = ' + num*4
        tab = tab + '<br/>' + num + ' x 5 = ' + num*5
        tab = tab + '<br/>' + num + ' x 6 = ' + num*6
        tab = tab + '<br/>' + num + ' x 7 = ' + num*7
        tab = tab + '<br/>' + num + ' x 8 = ' + num*8
        tab = tab + '<br/>' + num + ' x 9 = ' + num*9
        tab = tab + '<br/>' + num + ' x 10 = ' + num*10
    document.getElementById('resultado').innerHTML = tab

}

    