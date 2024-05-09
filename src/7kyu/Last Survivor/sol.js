function lastSurvivor(letters, coords) {
    for (let i=0;i<coords.length;i++) {
       letters =letters.substring(0,coords[i])+letters.substring(coords[i]+1);
   }
     return letters
   }