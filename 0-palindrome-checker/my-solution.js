function palindrome(str) {
  const regex = /[\W_]/;
  const arrStr = str.split(" ").join("").toLowerCase()
    .split("")
    .map(char => {
      if(!char.match(regex)){
        return char;
      }
    })
    .join("")
    .split("");

  let result = false;

  for(let i = 0; i < arrStr.length; i++){
    const checkChar = (arrStr.length - 1 - i);
    if(arrStr[i] === arrStr[checkChar]){
      result = true
    } else {
      result = false;
      break;
    }
  }

  return result;
}

// expected output: true
console.log(
  palindrome("never odd or even")
);
// expected output: true
console.log(
  palindrome("0_0 (: /-\ :) 0-0")
);
// expected output: false
console.log(
  palindrome("five|\_/|four")
);
// expected output: false
console.log(
  palindrome("almostomla")
);
