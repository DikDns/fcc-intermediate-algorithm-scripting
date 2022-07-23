function telephoneCheck(str) {
  const ctrCode = `1`;
  let newStr = str.split(/\W/).join(" ");

  if(newStr.match(/\w/g).length !== 10) {
    if(newStr.split(" ").at(0) !== ctrCode){
      return false;
    }
    newStr = str.substring(1).split(" ").join("")
  } else {
    newStr = str.split(" ").join("")
  }

  if(newStr.match(/[()]/)){
    if(newStr.at(0) !== `(` || newStr.at(4) !== `)`){
      return false;
    }
    if(newStr.match(/[()]/g).length > 2){
      return false;
    }
  }

  if(newStr.match(/[-]/)){
      if(newStr.match(/[-]/g).length > 2){
      return false;
    }
  }

  return true;
}
