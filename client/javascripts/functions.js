// jshint esversion: 6

//3a
let revWord1 = (str) =>{
  let arr = str.split("");
  let result = "";
  for (char of arr){
    result = char + result;
  }
  return result;
};

//3b
let revWords2 = (str) => {
  let arr = str.split("");
  let result = "";
  arr.forEach((char)=>{
    result = char + result;
  });
  return result;
};

//3c
let revWords3 = (str) => {
  let arr = str.split("");
  let result = "";
  for (char of arr){
    result = char + result;
  }
  return result;
};





let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
