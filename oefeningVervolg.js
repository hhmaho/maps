/*langste woord
  Geef het langste woord in een lijst terug.
  bvb:
    longest([ "find", "the", "longest", "word" ]) ==> "longest"*/

function langsteWoord(t){
  var woord = t[0];
  for ( i = 1; i < t.length; i++){
    var word = t[i]
    //word.length
    if (word.length > langsteWoord.length){
      langsteWoord = word
    }
  }
  return langsteWoord
  
}

console.log(langsteWoord(["zbn","zogjo"]))

/*palindroom
  Ga na of een woord een palindroom is.
  bvb:
    palindroom('pap') ==> true
    palindroom('neen') ==> true
    palindroom('meetsysteem') ==> true
    palindroom('mlsdvmlsn') ==> false

function palindroom(word){
 for ( i = 0; i < word.length; i++){
   //console.log(word[i])
   var currentLetter = word[i]
   var correspondingletter = word[word.length - i - 1]

   if (currentLetter != correspondingletter) {
     return false
   }

   //console.log(currentLetter, correspondingletter)
 }

 return true
}

console.log("pap")
console.log("neen")
console.log("meetsysteem")
console.log("gesjth")

palindroom
 Ga na of een woord een palindroom is.
 bvb:
   palindroom('pap') ==> true
   palindroom('neen') ==> true
   palindroom('meetsysteem') ==> true
   palindroom('mlsdvmlsn') ==> false

   */


function palindroom (word){
   for(var i=0 ; i < word.length ; i = i + 1){
       var currentLetter = word[i]
       var correspondingLetter = word[word.length -i -1]
   }
       if(currentLetter != correspondingLetter){
           return false
       }else (currentLetter = correspondingLetter)
           return true

   }

console.log(palindroom('pap'))
console.log(palindroom('neen'))
console.log(palindroom('meetsysteem'))
console.log(palindroom('mlsdvmlsn'))


/*camelCase
  bvb:
    camelCase([ "create", "text", "node" ]) ==> createTextNode
    camelCase([ "get", "element", "by", "id" ]) ==> getElementById*/

