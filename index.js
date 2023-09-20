//  Define the function
function receivesAFunction(callback) {
  if (typeof callback === 'function') {
    callback();
  } else {
    console.log('Not Groot');
  }
}

function callreceivesAFunction() {

  // Call receivesAFunction 

  receivesAFunction(function() {

    console.log('I am Groot');
  });
}

callreceivesAFunction();

// Define function

function returnsANamedFunction () {
  namedFunction = function () {
    console.log ('before all')
  }
  return  namedFunction;
  
}

function returnsAnAnonymousFunction () {

   // Define and return an anonymous function

  return function() {
    return 'Anonymous';
  };
}

