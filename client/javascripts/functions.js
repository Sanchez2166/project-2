// jshint esversion: 6
/*
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
*/
let revWord = str => {
  let arr = str.split("");
  let result = "";
  for (let char of arr) {
    result = char + result;
  }
  return result;
};
//3a
let revWords1 = str => {
  let arr = str.split(" ");
  let result = "";
  for (var i = 0; i < arr.length; i++) {
    result = result + " " + revWord(arr[i]);
  }
  return result;
};

//3b
let revWords2 = str => {
  let arr = str.split(" ");
  let result = "";
  arr.forEach((item, i) => {
    result = result + " " + revWord(arr[i]);
  });
  return result;
};

//3c
let revWords3 = str => {
  let arr = str.split(" ");
  let result = "";
  for (let i of arr) {
    result = result + " " + revWord(i);
  }
  return result;
};
