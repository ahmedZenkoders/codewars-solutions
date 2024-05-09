function descendingOrder(n){
    var array = [];var ans=0
    while(n !== 0){
      array.push(n % 10);
      n = Math.floor(n / 10);
    }
    array.sort((a, b) => b - a);
    for(let i=0;i<array.length;i++){
      ans*=10;
      ans+=array[i];
    }
    return ans
  }