  // "this" here is "exports"

this.id = 'exports';

//regular function
const testerObj = {
  func1: function () {
    console.log('func1', this);
  },

  //arrowfunction
  func2: () => {
    console.log('func2', this);
  },
};

testerObj.func1();
testerObj.func2();