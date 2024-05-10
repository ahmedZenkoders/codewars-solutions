function total(arr){
    var sum=0;
    function prime(n){
        if(n<2){
          return false
        }
        for(let i=2;i<=Math.sqrt(n);i++){
            if(n%i===0){
              return false
            }
        }
        return true;
      }
   
    for(let i=0;i<arr.length;i++){
      if(prime(i)){
        sum+=arr[i]
      }
    }
    return sum
  };