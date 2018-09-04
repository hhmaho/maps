workers = [
    { name: "paul", alive: true, salary: 5000 },
    { name: "steven", alive: true, salary: 1999 },
    { name: "tom", alive: false, salary: 10000 },
    { name: "rob", alive: false, salary: 100 },
    { name: "stanley", alive: true, salary: 10000 },
  ]
// gemiddelde loon van alle overleden werknemers

function gemiddelde(workers) {
    //variabele van het totaal om later te delen
    var totaal = 0
    //varaibele voor het aantal doden
    var aantalDoden = 0

    //for loop de lijst van workers
    for ( i = 0; i < workers.length; i++){
        //variabele worker uit de lijst
        worker = workers[i]
        //if de worker is overleden
        if (worker.alive == false){
        //aantal doden optellen
        aantalDoden = aantalDoden + 1
        //totaal worker.salary optellen
        totaal = worker.salary + totaal
        }
    }
    if (aantalDoden == 0){
        return 0
    }
    return totaal/aantalDoden
}

console.log("gemiddelde:", gemiddelde(workers))