workers = [
    { name: "paul", alive: true, salary: 5000 },
    { name: "steven", alive: true, salary: 1999 },
    { name: "tom", alive: false, salary: 10000 },
    { name: "rob", alive: false, salary: 100 },
    { name: "stanley", alive: true, salary: 10000 },
  ]

// iedereen (dood of levend) die meer als een bepaalde limiet verdient.
// console.log die hun naam.
function veelverdieners(workers, limiet) {
    //variabele om limiet toe te passen aan 2000
    var limiet = 2000
    for (var i = 0; i < workers.length; i = i+1){
        var worker = workers[i]
        //console.log(workers[i])
        if (limiet < worker.salary){
            console.log("werknemer: ",worker.name, "; salaris: ", worker.salary)
        }
    }
    
    // foor loop om de lijst in te lezen
    //variabele individuele worker uit workers lijst
    //if worker.salary > 2000 true
    //return name.worker

}

veelverdieners(workers, 2000)