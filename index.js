//criar um herói com nome e uma determinada quantidade de XP
let nomeHeroi = "Master Yi"
let xp = 100000
//classificar o rank do herói de acordo com a experiência que ele tem

if(xp <= 1000){ 
        console.log("O Herói de nome " + nomeHeroi+ " está no nível de " + "Ferro")
}

else if(xp <=2000){
    console.log("O Herói de nome " + nomeHeroi+ " está no nível de " + "Bronze")
}

else if(xp<=5000){
     console.log("O Herói de nome " + nomeHeroi+ " está no nível de " + "Prata")
}

else if (xp<=7000){
     console.log("O Herói de nome " + nomeHeroi+ " está no nível de " + "Ouro")
}

else if(xp <=8000){
     console.log("O Herói de nome " + nomeHeroi+ " está no nível de " + "Platina")
}

else if(xp <=9000){
     console.log("O Herói de nome " + nomeHeroi+ " está no nível de " + "Ascendente")
}

else if(xp<=10000){
     console.log("O Herói de nome " + nomeHeroi+ " está no nível de " + "Imortal")
}

else if(xp >=10001){
     console.log("O Herói de nome " + nomeHeroi+ " está no nível de " + "Radiante")
}
