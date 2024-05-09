function getNumberOfSquares(n) {
    let result=0;
    let base=1;
    while(result<n) {
      result+=base*base;
      base++;
    }
    return base-2;
  }