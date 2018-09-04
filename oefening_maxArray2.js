function maxArray(a) {
    // returns the biggest number in the array
    
    var biggestNumber = a[0];
    for ( var i = 1; i < a.length; i = i+1 ){
        //console.log (i)
        if (a[i] > biggestNumber){
             biggestNumber = a[i]
        }
        
       
        
    }
    return biggestNumber
}
   
console.log(maxArray([1, 2, 33, 4])) // ==> 33