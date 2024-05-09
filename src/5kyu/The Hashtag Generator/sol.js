function generateHashtag (str) {
    if (str.trim().length === 0) {
      return false;
    }
    var answer="#";var space=true;
    for(let i=0;i<str.length;i++){
      if(str[i]===" "){
        space=true;
        continue;
      }
      if(space===true){
        answer+=str[i].toUpperCase();
        space=false;
        continue;
      }
      if(str[i]!==" " && space===false){
        answer+=str[i];
      }
    }
    if(answer.length>140){
      return false;
    }
    return answer;
  }