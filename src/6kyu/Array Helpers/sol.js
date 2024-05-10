Array.prototype.square = function() {
    var array=[]
    for(let i=0;i<this.length;i++){
      array.push(this[i]*this[i]);
    }
    return array;
  };
  Array.prototype.cube=function(){
    var array=[]
    for(let i=0;i<this.length;i++){
      array.push(this[i]*this[i]*this[i]);
    }
    return array;
  };
  
  Array.prototype.average=function (){
    let sum=0
    for(let i=0;i<this.length;i++){
      sum+=this[i];
    }
    return sum/this.length
  };
  Array.prototype.sum=function (){
    let Sum=0
    for(let i=0;i<this.length;i++){
      Sum+=this[i];
    }
    return Sum
  };
  Array.prototype.even=function (){
    let array=[];
    for(let i=0;i<this.length;i++){
      if(this[i]%2===0){
        array.push(this[i])
      }
    }
    return array
  };
  Array.prototype.odd=function(){
    let array=[];
    for(let i=0;i<this.length;i++){
      if(this[i]%2!==0){
        array.push(this[i])
      }
    }
    return array
  };