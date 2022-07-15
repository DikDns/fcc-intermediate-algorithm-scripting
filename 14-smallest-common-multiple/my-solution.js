function smallestCommons(arr) {
  let lowVal = 0;
  let highVal = 0;

  if(arr[0] > arr[1]){
    lowVal += arr[1];
    highVal += arr[0];
  } else {
    lowVal += arr[0];
    highVal += arr[1];
  }

  let lowestMultiple = lowVal;

  for(let currentVal = lowVal; currentVal < highVal; currentVal++){
    let iterateVal = lowestMultiple;
    
    while(true){
      if(iterateVal % (currentVal + 1) === 0){
        lowestMultiple = iterateVal;
        break;
      }
      iterateVal += lowestMultiple;
    }
  }
  
  return lowestMultiple;
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));
