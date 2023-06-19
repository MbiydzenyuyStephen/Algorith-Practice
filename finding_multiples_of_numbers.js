
function multiplesOf(numbers, divider) {
    // create an empty array
    var  multiples = []
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % divider === 0) {
       // push multiples to the array
        multiples.push (numbers[i]);
      }
    }
   // return the array
    return multiples;
  }
  

  var numberArray=[4, 5, 6, 7, 20,21,42,36,100]
  var myDivider=4
  var output=multiplesOf(numberArray,myDivider)
  console.log(output)