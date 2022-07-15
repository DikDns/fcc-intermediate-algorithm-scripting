function dropElements(arr, func) {
  const newArr = [];

  for(let i = 0; i < arr.length; i++){
    if(func(arr[i])){
      for(let j = i; j < arr.length; j++){
        newArr.push(arr[j]);
      }
      break;
    }
  }

  return newArr;
}


console.log(
  dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})
);
