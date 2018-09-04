function maxArray(a) {
    // returns the biggest number in the array
    if (a[0] > a[1] && a[3] && a[4]){
        return a[0]
        }else if (a[1] > a[2] && a[3] && a[0]){
            return a[1]
            }else if (a[2] > a[3] && a[0] && a[1]){
                return a[2]
                } else{
                    return a[3]
                    }
}
   
console.log(maxArray([1, 2, 33, 4])) // ==> 33