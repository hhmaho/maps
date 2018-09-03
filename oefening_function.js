function absoluteWaarde (number){
    if (number < 0) {
        return number * -1
    }
    else {
        return number
    }
}

console.log(absoluteWaarde(-5));
console.log(absoluteWaarde(0));
console.log(absoluteWaarde(1));

//var getallen = ['eerste getal', 'tweede getal'];

function max(a, b){
    if (a >= b){
        return a;
    }
    else{
        return b;
    }
}

console.log(max(10,20));
console.log(max(0,0));
console.log(max(-50,20));

function dhg(n){
    var totaal = 0
    for (i=1; i<=n; i++){
        totaal = totaal+i
        //console.log(i);
    }
    return totaal
}
console.log(dhg(6));
console.log(dhg(1));
console.log(dhg(5));