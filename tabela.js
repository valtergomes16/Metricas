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

function linguagem(){
    let cobol = document.getElementById("icobol").value
    let cobol1
    let linguagem = document.getElementsByName("linguagem")

    if(cobol==1){
        cobol1 = 100
    }

    console.log(cobol1)
}