// totale loonkost per maand
workers = [
    { name: "paul", alive: true, salary: 5000 },
    { name: "steven", alive: true, salary: 1999 },
    { name: "tom", alive: false, salary: 10000 },
    { name: "rob", alive: false, salary: 100 },
    { name: "stanley", alive: true, salary: 10000 },
  ]
//console.log (workers)

// variabele voor het totaal (aan loonkost) te benoemen
var total = 0
function loonkost(workers) {
    // for loop voor elke worker apart tot allemaal behalve if
    for ( i=0; i<workers.length; i++){
        // variabele voor individuele worker
        worker = workers[i]
        if (worker.alive == true){
            // berekenen
            total = total + worker.salary
        }
    } return total
}

console.log(loonkost(workers))