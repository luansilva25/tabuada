function exibir(){
    const div_exibir = document.getElementById('exibir')
    const exibir = document.getElementById('txt').value
    div_exibir.innerHTML = `<p>voce digitou: ${exibir}</p>`
    
}

function tabuada(){
    const num= document.querySelector('#num').value
    const resul=document.querySelector('#resul')
    let multi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    resul.innerHTML = '';
    if(num < 11 ){
    for(const item of multi){
        const multiplicador = num * item
        resul.innerHTML +=` a tabuada do ${num} x ${item} = ${multiplicador}<br>`
     
    }
}
else{
    resul.innerHTML = 'a tabuada deve ser até 10'
}
    }

    

  