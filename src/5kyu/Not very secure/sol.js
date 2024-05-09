function alphanumeric(string){
    if(string.length===0){
      return false;
    }
    let answer=false;
    for(let i=0;i<string.length;i++){
      if(string[i]===" " || string[i]==="_"){
        return false;
      }
      if(string[i]===string[i].toUpperCase()&& string[i]!== string[i].toLowerCase()){
        answer=true;
      }
      else if(string[i]===string[i].toLowerCase()&& string[i]!== string[i].toUpperCase()){
        answer=true;
      }
      else if(string[i]>='0' && string[i]<='9'){
        answer=true;
      }
      else{
        answer=false;
        break;
      }
    }
    if(answer===true){
      return true;
    }
    return false
  }