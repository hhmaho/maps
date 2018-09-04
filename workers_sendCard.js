workers = [
    { name: "paul", alive: true, salary: 5000 },
    { name: "steven", alive: true, salary: 1999 },
    { name: "tom", alive: false, salary: 10000 },
    { name: "rob", alive: false, salary: 100 },
    { name: "stanley", alive: true, salary: 10000 },
  ]
//console.log (workers)
  // send a card to every dead workers family
function sendCards(workers) {
    //for loop elke worker apart
    for ( i = 0; i < workers.length; i++){
        worker = workers[i]
        // if alive
        if(worker.alive == false){
            console.log("sending card to the family of",worker.name)
        }
    }
}
sendCards(workers)