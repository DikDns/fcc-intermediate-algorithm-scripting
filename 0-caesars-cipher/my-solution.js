function rot13(str) {
  const alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  const encoded = str.toUpperCase();
  let decoded = ``;

  for(let i = 0; i < encoded.length; i++){
    const currentChar = encoded[i];
    const index = alphabet.indexOf(currentChar);

    if(index !== -1){
      const keyAlphabet = alphabet.substring(index + 1) + alphabet.substring(0, index + 1);
      decoded += keyAlphabet[12];
    } else {
      decoded += currentChar;
    }

  }
  
  return decoded;
}

console.log(
  rot13("SERR PBQR PNZC")
);
