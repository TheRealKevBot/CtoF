// The algorithm to convert from Celsius to Fahrenheit 
// is the temperature in Celsius times 9/5, plus 32.

function convertToF(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  console.log(convertToF(40));
  console.log(convertToF(35));
  console.log(convertToF(32.5));
  console.log(convertToF(30));
  console.log(convertToF(25));
  console.log(convertToF(23.5));
  console.log(convertToF(15));
  console.log(convertToF(10));
  console.log(convertToF(5));
  console.log(convertToF(0));