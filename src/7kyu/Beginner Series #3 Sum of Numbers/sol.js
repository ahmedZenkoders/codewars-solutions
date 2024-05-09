function getSum(a, b)
{
  if(a===b){
    return a
  }
  if(a>b){
    var temp=a
    a=b
    b=temp
  }
  var ans=0
  for(let i=a;i<=b;i++){
    ans+=i
  }
  return ans
   //Good luck!
}