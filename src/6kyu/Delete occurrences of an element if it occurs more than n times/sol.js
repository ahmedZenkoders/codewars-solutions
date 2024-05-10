function deleteNth(arr, n) {
    let hashmap = {};
    let array = [];
    for (let i=0;i<arr.length;i++) {
      if ((hashmap[arr[i]] || 0) < n) {
        array.push(arr[i]); 
        hashmap[arr[i]]=(hashmap[arr[i]] || 0)+1;
      }
    }
    return array;
  }