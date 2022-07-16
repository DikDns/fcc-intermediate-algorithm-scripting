function pow(num, exp) {
  if (exp < 1){
    return 1;
  }
  return num * pow(num, exp - 1);
}

function binaryAgent(str) {
  return str.split(" ").map(bin => {
    let code = 0, bit = 0;
    for(let i = (bin.length - 1); i >= 0 ; i--, bit++){
      if(bin[i] == "1"){
        code += pow(2, bit);
      }
    }
    return String.fromCharCode(code);
  }).join("");
}

// expected output: I love FreeCodeCamp!
console.log(
  binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")
);
