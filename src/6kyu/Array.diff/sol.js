function arrayDiff(a, b) {
    if(a.length == 0){return []}
    if(b.length == 0){return a}
  
    let returnArray = [];
    a.forEach(function included(element){
      if(!b.includes(element)){
        returnArray.push(element)
      }
  })
  
  return returnArray;
  }