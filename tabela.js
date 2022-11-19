function somar(){
    let tabA = Number(document.getElementById("ita").value)
    let tabB = Number(document.getElementById("itb").value)
    let tabC = Number(document.getElementById("itc").value)
    let tabD = Number(document.getElementById("itd").value)
    let tabE = Number(document.getElementById("ite").value)
    let tabF = Number(document.getElementById("itf").value)
    let soma = tabA + tabB + tabC + tabD + tabE + tabF

    document.getElementById("isoma").innerHTML = soma
    entrada()
    saida()
    consulta()
    arquivo()
    interface()
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
    document.getElementById("lpValorDEF1").innerHTML = valorLinguagem
}

function sistemaChoice(){
    let tipoSistema = document.querySelector("[name='sistemaTipo']:checked").value
    let valorSistema = 0
    console.log(tipoSistema)
    if(tipoSistema == 1) {
        valorSistema = 3300
    }
    else if(tipoSistema == 2) {
        valorSistema = 2500
    }
    else{
        valorSistema = 3600
    }
    document.getElementById("lpValorDEF2").innerHTML = valorSistema
}

function valorHora(){
    let valorHora = Number(document.getElementById("ihora").value)
    document.getElementById('lpValorDEF3').innerHTML = valorHora
}

function entrada(){
    let tabA = Number(document.getElementById("ita").value)
    let tabB = Number(document.getElementById("itb").value)
    let tabC = Number(document.getElementById("itc").value)
    let tabD = Number(document.getElementById("itd").value)
    let tabE = Number(document.getElementById("ite").value)
    let tabF = Number(document.getElementById("itf").value)
    let classifica1
    let classifica2
    let classifica3
    let cont1 = 0
    let cont2 = 0
    let cont3 = 0

    if(tabA>=1 && tabA<=4){
        cont1++
    }
    else if(tabA>=5 && tabA<=15){
        cont2++
    }
    else if(tabA>=16){
        cont3++
    }

    if(tabB>=1 && tabB<=4){
        cont1++
    }
    else if(tabB>=5 && tabB<=15){
        cont2++
    }
    else if(tabB>=16){
        cont3++
    }

    if(tabC>=1 && tabC<=4){
        cont1++
    }
    else if(tabC>=5 && tabC<=15){
        cont2++
    }
    else if(tabC>=16){
        cont3++
    }
    
    if(tabD>=1 && tabD<=4){
        cont1++
    }
    else if(tabD>=5 && tabD<=15){
        cont2++
    }
    else if(tabD>=16){
        cont3++
    }
    
    if(tabE>=1 && tabE<=4){
        cont1++
    }
    else if(tabE>=5 && tabE<=15){
        cont2++
    }
    else if(tabE>=16){
        cont3++
    }
    
    if(tabF>=1 && tabF<=4){
        cont1++
    }
    else if(tabF>=5 && tabF<=15){
        cont2++
    }
    else if(tabF>=16){
        cont3++
    }


    let simples = 0
    let medio = 0
    let complexo = 0

    if(cont1==0 || cont1==1){
        classifica1 = `Simples`
        simples+=cont1
    }
    else if(cont1==2){
        classifica1 = "Simples"
        simples+=cont1
    }
    else{
        classifica1 = "Médio"
        medio+=cont1
    }
    
    if(cont2==0 || cont2==1){
        classifica2 = "Simples"
        simples+=cont2
    }
    else if(cont2==2){
        classifica2 = "Médio"
        medio+=cont2
    }
    else{
        classifica2 = "Complexo"
        complexo+=cont2
    }

    if(cont3==0 || cont3==1){
        classifica3 = "Médio"
        medio+=cont3
    }
    else if(cont3==2){
        classifica3 = "Complexo"
        complexo+=cont3
    }
    else{
        classifica3 = "Complexo"
        complexo+=cont3
    }

    console.log(simples, medio, complexo)

    document.getElementById(`entradaSimples`).innerHTML = simples
    document.getElementById(`entradaMedio`).innerHTML = medio
    document.getElementById(`entradaComplexo`).innerHTML = complexo
}

function saida(){
    let tabA = Number(document.getElementById("ita").value)
    let tabB = Number(document.getElementById("itb").value)
    let tabC = Number(document.getElementById("itc").value)
    let tabD = Number(document.getElementById("itd").value)
    let tabE = Number(document.getElementById("ite").value)
    let tabF = Number(document.getElementById("itf").value)
    let soma = tabA + tabB + tabC + tabD + tabE + tabF
    let classifica1
    let classifica2
    let classifica3
    let cont1 = 0
    let cont2 = 0
    let cont3 = 0

    if(tabA>=1 && tabA<=5){
        cont1++
    }
    else if(tabA>=6 && tabA<=19){
        cont2++
    }
    else if(tabA>=20){
        cont3++
    }

    if(tabB>=1 && tabB<=5){
        cont1++
    }
    else if(tabB>=6 && tabB<=19){
        cont2++
    }
    else if(tabB>=20){
        cont3++
    }

    if(tabC>=1 && tabC<=5){
        cont1++
    }
    else if(tabC>=6 && tabC<=19){
        cont2++
    }
    else if(tabC>=20){
        cont3++
    }
    
    if(tabD>=1 && tabD<=5){
        cont1++
    }
    else if(tabD>=6 && tabD<=19){
        cont2++
    }
    else if(tabD>=20){
        cont3++
    }
    
    if(tabE>=1 && tabE<=5){
        cont1++
    }
    else if(tabE>=6 && tabE<=19){
        cont2++
    }
    else if(tabE>=20){
        cont3++
    }
    
    if(tabF>=1 && tabF<=5){
        cont1++
    }
    else if(tabF>=6 && tabF<=19){
        cont2++
    }
    else if(tabF>=20){
        cont3++
    }

    if(soma>=1 && soma<=5){
        cont1++
    }
    else if(soma>=6 && soma<=19){
        cont2++
    }
    else if(soma>=20){
        cont3++
    }


    let simples = 0
    let medio = 0
    let complexo = 0

    if(cont1==0 || cont1==1){
        classifica1 = `Simples`
        simples+=cont1
    }
    else if(cont1==2 || cont1==3){
        classifica1 = "Simples"
        simples+=cont1
    }
    else{
        classifica1 = "Médio"
        medio+=cont1
    }
    
    if(cont2==0 || cont2==1){
        classifica2 = "Simples"
        simples+=cont2
    }
    else if(cont2==2 || cont2==3){
        classifica2 = "Médio"
        medio+=cont2
    }
    else{
        classifica2 = "Complexo"
        complexo+=cont2
    }

    if(cont3==0 || cont3==1){
        classifica3 = "Médio"
        medio+=cont3
    }
    else if(cont3==2 || cont3==3){
        classifica3 = "Complexo"
        complexo+=cont3
    }
    else{
        classifica3 = "Complexo"
        complexo+=cont3
    }

    console.log(simples, medio, complexo)

    document.getElementById(`saidaSimples`).innerHTML = simples
    document.getElementById(`saidaMedio`).innerHTML = medio
    document.getElementById(`saidaComplexo`).innerHTML = complexo
}

function consulta(){
    let tabA = Number(document.getElementById("ita").value)
    let tabB = Number(document.getElementById("itb").value)
    let tabC = Number(document.getElementById("itc").value)
    let tabD = Number(document.getElementById("itd").value)
    let tabE = Number(document.getElementById("ite").value)
    let tabF = Number(document.getElementById("itf").value)
    let soma = tabA + tabB + tabC + tabD + tabE + tabF
    let classifica1
    let classifica2
    let classifica3
    let cont1 = 0
    let cont2 = 0
    let cont3 = 0

    if(tabA>=1 && tabA<=4){
        cont1++
    }
    else if(tabA>=5 && tabA<=15){
        cont2++
    }
    else if(tabA>=16){
        cont3++
    }

    if(tabB>=1 && tabB<=4){
        cont1++
    }
    else if(tabB>=5 && tabB<=15){
        cont2++
    }
    else if(tabB>=16){
        cont3++
    }

    if(tabC>=1 && tabC<=4){
        cont1++
    }
    else if(tabC>=5 && tabC<=15){
        cont2++
    }
    else if(tabC>=16){
        cont3++
    }
    
    if(tabD>=1 && tabD<=4){
        cont1++
    }
    else if(tabD>=5 && tabD<=15){
        cont2++
    }
    else if(tabD>=16){
        cont3++
    }
    
    if(tabE>=1 && tabE<=4){
        cont1++
    }
    else if(tabE>=5 && tabE<=15){
        cont2++
    }
    else if(tabE>=16){
        cont3++
    }
    
    if(tabF>=1 && tabF<=4){
        cont1++
    }
    else if(tabF>=5 && tabF<=15){
        cont2++
    }
    else if(tabF>=16){
        cont3++
    }

    if(soma>=1 && soma<=4){
        cont1++
    }
    else if(soma>=5 && soma<=15){
        cont2++
    }
    else if(soma>=16){
        cont3++
    }


    let simples = 0
    let medio = 0
    let complexo = 0

    if(cont1==0 || cont1==1){
        classifica1 = `Simples`
        simples+=cont1
    }
    else if(cont1==2){
        classifica1 = "Simples"
        simples+=cont1
    }
    else{
        classifica1 = "Médio"
        medio+=cont1
    }
    
    if(cont2==0 || cont2==1){
        classifica2 = "Simples"
        simples+=cont2
    }
    else if(cont2==2){
        classifica2 = "Médio"
        medio+=cont2
    }
    else{
        classifica2 = "Complexo"
        complexo+=cont2
    }

    if(cont3==0 || cont3==1){
        classifica3 = "Médio"
        medio+=cont3
    }
    else if(cont3==2){
        classifica3 = "Complexo"
        complexo+=cont3
    }
    else{
        classifica3 = "Complexo"
        complexo+=cont3
    }

    console.log(simples, medio, complexo)

    document.getElementById(`consultaSimples`).innerHTML = simples
    document.getElementById(`consultaMedio`).innerHTML = medio
    document.getElementById(`consultaComplexo`).innerHTML = complexo
}

function arquivo(){
    let tabA = Number(document.getElementById("ita").value)
    let tabB = Number(document.getElementById("itb").value)
    let tabC = Number(document.getElementById("itc").value)
    let tabD = Number(document.getElementById("itd").value)
    let tabE = Number(document.getElementById("ite").value)
    let tabF = Number(document.getElementById("itf").value)
    let classifica1
    let classifica2
    let classifica3
    let cont1 = 0
    let cont2 = 0
    let cont3 = 0

    if(tabA>=1 && tabA<=19){
        cont1++
    }
    else if(tabA>=20 && tabA<=50){
        cont2++
    }
    else if(tabA>=51){
        cont3++
    }

    if(tabB>=1 && tabB<=19){
        cont1++
    }
    else if(tabB>=20 && tabB<=50){
        cont2++
    }
    else if(tabB>=51){
        cont3++
    }

    if(tabC>=1 && tabC<=19){
        cont1++
    }
    else if(tabC>=20 && tabC<=50){
        cont2++
    }
    else if(tabC>=51){
        cont3++
    }
    
    if(tabD>=1 && tabD<=19){
        cont1++
    }
    else if(tabD>=20 && tabD<=50){
        cont2++
    }
    else if(tabD>=51){
        cont3++
    }
    
    if(tabE>=1 && tabE<=19){
        cont1++
    }
    else if(tabE>=20 && tabE<=50){
        cont2++
    }
    else if(tabE>=51){
        cont3++
    }
    
    if(tabF>=1 && tabF<=19){
        cont1++
    }
    else if(tabF>=20 && tabF<=50){
        cont2++
    }
    else if(tabF>=51){
        cont3++
    }


    let simples = 0
    let medio = 0
    let complexo = 0

    if(cont1==1){
        classifica1 = `Simples`
        simples+=cont1
    }
    else if(cont1>=2 && cont1<=5){
        classifica1 = "Simples"
        simples+=cont1
    }
    else{
        classifica1 = "Médio"
        medio+=cont1
    }
    
    if(cont2==1){
        classifica2 = "Simples"
        simples+=cont2
    }
    else if(cont2>=2 && cont2<=5){
        classifica2 = "Médio"
        medio+=cont2
    }
    else{
        classifica2 = "Complexo"
        complexo+=cont2
    }

    if(cont3==1){
        classifica3 = "Médio"
        medio+=cont3
    }
    else if(cont3>=2 && cont3<=5){
        classifica3 = "Complexo"
        complexo+=cont3
    }
    else{
        classifica3 = "Complexo"
        complexo+=cont3
    }

    console.log(simples, medio, complexo)

    document.getElementById(`arquivoSimples`).innerHTML = simples
    document.getElementById(`arquivoMedio`).innerHTML = medio
    document.getElementById(`arquivoComplexo`).innerHTML = complexo
}

function interface(){
    let tabA = Number(document.getElementById("ita").value)
    let tabB = Number(document.getElementById("itb").value)
    let tabC = Number(document.getElementById("itc").value)
    let tabD = Number(document.getElementById("itd").value)
    let tabE = Number(document.getElementById("ite").value)
    let tabF = Number(document.getElementById("itf").value)
    let soma = tabA + tabB + tabC + tabD + tabE + tabF
    let classifica1
    let classifica2
    let classifica3
    let cont1 = 0
    let cont2 = 0
    let cont3 = 0

    if(tabA>=1 && tabA<=19){
        cont1++
    }
    else if(tabA>=20 && tabA<=50){
        cont2++
    }
    else if(tabA>=51){
        cont3++
    }

    if(tabB>=1 && tabB<=19){
        cont1++
    }
    else if(tabB>=20 && tabB<=50){
        cont2++
    }
    else if(tabB>=51){
        cont3++
    }

    if(tabC>=1 && tabC<=19){
        cont1++
    }
    else if(tabC>=20 && tabC<=50){
        cont2++
    }
    else if(tabC>=51){
        cont3++
    }
    
    if(tabD>=1 && tabD<=19){
        cont1++
    }
    else if(tabD>=20 && tabD<=50){
        cont2++
    }
    else if(tabD>=51){
        cont3++
    }
    
    if(tabE>=1 && tabE<=19){
        cont1++
    }
    else if(tabE>=20 && tabE<=50){
        cont2++
    }
    else if(tabE>=51){
        cont3++
    }
    
    if(tabF>=1 && tabF<=19){
        cont1++
    }
    else if(tabF>=20 && tabF<=50){
        cont2++
    }
    else if(tabF>=51){
        cont3++
    }

    if(soma>=1 && soma<=19){
        cont1++
    }
    else if(soma>=20 && soma<=50){
        cont2++
    }
    else if(soma>=51){
        cont3++
    }


    let simples = 0
    let medio = 0
    let complexo = 0

    if(cont1==1){
        classifica1 = `Simples`
        simples+=cont1
    }
    else if(cont1>=2 && cont1<=5){
        classifica1 = "Simples"
        simples+=cont1
    }
    else{
        classifica1 = "Médio"
        medio+=cont1
    }
    
    if(cont2==1){
        classifica2 = "Simples"
        simples+=cont2
    }
    else if(cont2>=2 && cont2<=5){
        classifica2 = "Médio"
        medio+=cont2
    }
    else{
        classifica2 = "Complexo"
        complexo+=cont2
    }

    if(cont3==1){
        classifica3 = "Médio"
        medio+=cont3
    }
    else if(cont3>=2 && cont3<=5){
        classifica3 = "Complexo"
        complexo+=cont3
    }
    else{
        classifica3 = "Complexo"
        complexo+=cont3
    }

    console.log(simples, medio, complexo)

    document.getElementById(`interfaceSimples`).innerHTML = simples
    document.getElementById(`interfaceMedio`).innerHTML = medio
    document.getElementById(`interfaceComplexo`).innerHTML = complexo
}