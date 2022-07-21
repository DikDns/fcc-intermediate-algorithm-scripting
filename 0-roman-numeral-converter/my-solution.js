function convertToRoman(num) {
  const arr = [];
  let result = ``;

  for(let i = num; i >= 1; i--){
    arr.push("I");
  }

  while(arr){
    // M
    if(arr[0] === `I` && arr[999] === `I`){
      result += `M`
      arr.splice(0, 1000);
      continue;
    }

    // CM
    if(arr[0] === `I` && arr[899] === `I`){
      result += `CM`;
      arr.splice(0, 900);
      continue;
    }

    // D
    if(arr[0] === `I` && arr[499] === `I`){
      result += `D`;
      arr.splice(0, 500);
      continue;
    }
    
    // CD
    if(arr[0] === `I` && arr[399] === `I`){
      result += `CD`;
      arr.splice(0, 400);
      continue;
    }

    // C
    if(arr[0] === `I` && arr[99] === `I`){
      result += `C`;
      arr.splice(0, 100);
      continue;
    }
    
    // XC
    if(arr[0] === `I` && arr[89] === `I`){
      result += `XC`;
      arr.splice(0, 90);
      continue;
    }

    // L
    if(arr[0] === `I` && arr[49] === `I`){
      result += `L`;
      arr.splice(0, 50);
      continue;
    }
    
    // XL
    if(arr[0] === `I` && arr[39] === `I`){
      result += `XL`;
      arr.splice(0, 40);
      continue;
    }
    
    // X
    if(arr[0] === `I` && arr[9] === `I`){
      result += `X`;
      arr.splice(0, 10);
      continue;
    }

    // IX
    if(arr[0] === `I` && arr[8] === `I`){
      result += `IX`;
      arr.splice(0, 9);
      continue;
    }
    
    // V
    if(arr[0] === `I` && arr[4] === `I`){
      result += `V`;
      arr.splice(0, 5);
      continue;
    }
    
    // IV
    if(arr[0] === `I` && arr[3] === `I`){
      result += `IV`;
      arr.splice(0, 4);
      continue;
    }
    
    // I
    if(arr[0] === `I`){
      result += `I`;
      arr.splice(0, 1);
      continue;
    }

    // End Loop Condition
    if(arr.length <= 0){
      break;
    }
  }

  return result;
}

// expected output: DCXLIX
console.log(
  convertToRoman(649)
);

// expected output: MMXIV
console.log(
  convertToRoman(2014)
);

// expected output: MMMCMXCIX
console.log(
  convertToRoman(3999)
);
