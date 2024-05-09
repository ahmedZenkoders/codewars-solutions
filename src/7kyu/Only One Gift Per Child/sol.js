var hashmap={}
function handOutGift(name) {
  
  if(name in hashmap){
    throw "new Error('error')"
  }
  else{
    hashmap[name]=1;
  }
  return hashmap
}