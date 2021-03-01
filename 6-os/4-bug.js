// API documentation https://nodejs.org/api/debugger.html
// node --inspect-brk 4-bug.js --> chrome://inspect

function convertArrayToObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr[0]] = curr[1];
      return acc;
    }, {});
  }
  
  const obj = convertArrayToObject([
    [1, 'One'],
    [2, 'Two'],
    [3, 'Three'],
    [4, 'Four'],
    [5, 'Five'],
  ]);
  
  console.log(obj);
  /* Should output:
    {
      1: 'One',
      2: 'Two',
      3: 'Three'
      4: 'Four',
      5: 'Five'
    }
  */