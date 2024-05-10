function twosDifference(input){
    let finalArray=[]
    for(let i=0;i<input.length-1;i++){
      for(let j=i+1;j<input.length;j++){
        if(Math.abs(input[i]-input[j])===2){
          if(input[i]<input[j]){
            finalArray.push([input[i],input[j]]);
          }
          else{
            finalArray.push([input[j],input[i]]);}
        
          break;
        }
      }
    }
    finalArray.sort((a, b)=>a[0]-b[0] || a[1]-b[1]);
    return finalArray
  }