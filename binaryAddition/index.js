/*
Binary Addition
  First argument of toString is radix which is the root. 
  Binary only can go up to 2, 0 and 1. So by saying toString(2) it turns it into a binary
*/

function addBinary(a,b) {
    return (a + b).toString(2);
  }
  
  function nArr(n) {
      let firstArr = [];
      let poop = 0;
      for(let i = 0; i < n; i++) {
          firstArr.push([]);
          for(let j = 0; j < n; j++){
              firstArr[i].push(poop += 2);
          }
      }
      console.log(firstArr)
  }