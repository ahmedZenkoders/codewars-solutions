function pigIt(str){
    var firstLetter = true;
    var string = "";
    for (let i = 0; i < str.length; i++) {
      if (firstLetter && /[a-zA-Z]/.test(str[i])) {
        var a = str[i];
        firstLetter = false;
        continue;
      }
      if (str[i] === " " && a !== undefined) {
        string += a + "ay";
        firstLetter = true;
        a = undefined;
      }
      if (/[^\w\s]/.test(str[i])) {
        string += str[i];
      }
      else {
        string += str[i];
      }
    }
    if (a !== undefined) {
      string += a + "ay";
    }
    return string;
  }