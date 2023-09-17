// Code your solution here
function findMatching(array, string){
    let goo = array.filter(function(x){
        return x.toUpperCase() === string.toUpperCase()
    })
  return goo
}

function fuzzyMatch(array, string){
    let foo = array.filter(function(x){
        return x[0].toUpperCase() === string[0].toUpperCase()
    })
  return foo
}

function matchName(array, string){
    let eoo = array.filter(function(x){
        return x.name.toUpperCase() === string.toUpperCase()
    })
  return eoo
}