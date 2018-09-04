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
camelCase
  bvb:
    camelCase([ "create", "text", "node" ]) ==> createTextNode
    camelCase([ "get", "element", "by", "id" ]) ==> getElementById*/

