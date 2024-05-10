function LCS(x, y) {
    let str=""
    let a=0;
    for(let i=0;i<y.length;i++){
       
      for(let j=a;j<x.length;j++){
        if(y[i]===x[j]){
          check=true;
          a=j+1;
          str+=y[i];
          break;
        }
      }
      
    }
    return str
  }