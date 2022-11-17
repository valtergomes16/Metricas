function somar(){
    let tabA = Number(document.getElementById("ita").value)
    let tabB = Number(document.getElementById("itb").value)
    let tabC = Number(document.getElementById("itc").value)
    let tabD = Number(document.getElementById("itd").value)
    let tabE = Number(document.getElementById("ite").value)
    let tabF = Number(document.getElementById("itf").value)
    let soma = tabA + tabB + tabC + tabD + tabE + tabF

    document.getElementById("isoma").innerHTML = soma
}

function linguagemChoice(){
    //let tipoLinguagem = document.getElementsByName("linguagemTipo")
    let valorLinguagem = 0
    let tipoLinguagem = document.querySelector("[name='linguagemTipo']:checked").value
    console.log(tipoLinguagem)
    if(tipoLinguagem == 1) {
        valorLinguagem = 100
    }
    else if(tipoLinguagem == 2) {
        valorLinguagem = 200
    }
    else if(tipoLinguagem == 3) {
        valorLinguagem = 300
    }
    else if(tipoLinguagem == 4) {
        valorLinguagem = 400
    }
    else{
        valorLinguagem = 500
    }
    document.getElementById("lpValorDEF").innerHTML = valorLinguagem
}