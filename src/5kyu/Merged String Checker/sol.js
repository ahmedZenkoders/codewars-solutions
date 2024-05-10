function isMerge(s, part1, part2) {
    if (part1 === "" && part2 === "") {
      return s === "";
    }
    if((part1.length+part2.length)!==s.length || part1===part2){
      return false;
    }
    var a=0
    for(let i=0;i<part1.length;i++){
      let check=false;
      for(let j=a;j<s.length;j++){
        if(part1[i]===s[j]){
          check=true;
          a=j+1;
          break;
        }
      }
      if(check===false){return false}
    }
    var b=0;
    for(let i=0;i<part2.length;i++){
      let check=false;
      for(let j=b;j<s.length;j++){
        if(part2[i]===s[j]){
          check=true;
          b=j+1;
          break;
        }
      }
      if(check===false){return false}
    }
    return true;
  }