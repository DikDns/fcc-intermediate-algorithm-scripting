function truthCheck(collection, pre) {

  for(let i = 0; i < collection.length; i++){
    const object = collection[i];
    for(const prop in object){
      if(!object[pre]){
        return false;
      }
    }
  }

  return true;
}

// Expected Output: false
console.log(
  truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id")
);
