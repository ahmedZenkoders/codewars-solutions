function narcissistic(value) {
    var num=value
    var str=value.toString()
    var length=str.length
    var ans=0
    while(num!=0){
      var digit=num%10
      ans+=Math.pow(digit,length)
      num = Math.floor(num / 10);
    }
    if(ans===value){
      return true
    }
    return false
  }