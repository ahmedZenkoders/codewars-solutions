function solution(str){
    if(str.length===1){
      return [str[0]+"_"];
    }
     let array=[];let s=""
    for(let i=0;i<str.length;i++){
      s+=str[i];
      if(s.length===2){
        array.push(s);
        s="";
      }
      else if(s.length<2 && i===str.length-1){
        s+="_";
        array.push(s)
      }
    }
    return array;
    
  }