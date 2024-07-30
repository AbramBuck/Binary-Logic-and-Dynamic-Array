const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

function dec(str) {
  const result = [];
  for(let i = 0; i < str.length; i++){
    result.push(str.charCodeAt(i));
  }
  return result;
}

const asciiTo8bit = str => {
  let decimal = dec(str);
  let arr =[];
  const result = decimal.map((item) => {
    // console.log(item)
    let n = item.toString(2); //convert to binary
    // console.log(n)
    arr.push(addZeros(n, 8)) // add zeros to 8 digits
  })

  return arr.join('');

};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
