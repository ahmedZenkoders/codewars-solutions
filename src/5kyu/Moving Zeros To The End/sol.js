function moveZeros(arr) {
    var array=[]
    var zeroCount=0
    for(let i=0;i<arr.length;i++){
      if(arr[i]===0){
        zeroCount++
        continue;
      }
        array.push(arr[i]);
    }
    for (let i=0; i<zeroCount;i++) {
      array.push(0);
    }
    return array
  }