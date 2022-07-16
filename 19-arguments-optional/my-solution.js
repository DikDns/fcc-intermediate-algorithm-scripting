function addTogether(a, b) {
  if(isNaN(a) || a.length || a === ""){
    return undefined;
  }
  return b === undefined ? function (x = b) {
    if(isNaN(x) || x.length || x === ""){
      return undefined;
    }
    return a + x;
  } : (isNaN(b) || b.length || b === "") ? undefined : a + b;
}
