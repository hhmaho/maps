function fac(n) {
    var totaal=1
    for(i=1; i<=n; i++){
        totaal= i*totaal
    } return totaal
}

console.log(fac(5)) // == 1 * 2 * 3 * 4 * 5


function sumOfOddNumbers(n) {
    var totaal=0
    for(i=1; i<=n; i=i+2){
        totaal = i + totaal
    } return totaal
}   
console.log(sumOfOddNumbers(10)) // ?? == 1 + 3 + 5 + 7 + 9

