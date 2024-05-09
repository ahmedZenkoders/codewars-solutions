var solution = function(firstArray, secondArray) {
    let sum=0;
     for(let i=0;i<firstArray.length;i++){
       let diff=firstArray[i]-secondArray[i];
       if(diff<0){
         diff*=-1;
       }
       sum+=diff*diff;
     }
   return sum/firstArray.length
 }