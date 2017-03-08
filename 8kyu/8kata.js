// 1. Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}


// 2. To square(root) or not to square(root)
function squareOrSquareRoot(array) {
  var newInput = [];
  for (var i = 0; i < array.length; i++) {
    if(Math.sqrt(array[i]) % 1 === 0){
      newInput.push(Math.sqrt(array[i]));
    } else {
      newInput.push(array[i] * array[i]);
    }
  }
  return newInput;
}

// 3. Even or Odd
function even_or_odd(n) {
  if(n % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// 4. Simple Fun #1: Seats in Theater
function seatsInTheater(nCols, nRows, col, row) {
  var cols = nCols - (col - 1); //need include the row you sit in as well
  var rows = nRows - row;
  var seats = cols * rows
  return seats;
}

function seatsInTheater(nCols, nRows, col, row) {
  return (nCols-col+1) * (nRows - row);
}

// 5. get character from ASCII Value
function getChar(c){
 return String.fromCharCode(c);
}

// 6. Remove String Spaces
function noSpace(x){
  return x.replace(/\s+/g, '')
}

// 7. Heads and Legs
function animals(heads, legs){
  if (heads > 1000 || legs > 1000){
    return "No solutions";
  } else if(legs > heads * 4){
    return "No solutions";
  }else if (heads > 0 && legs > 0){
    var double = heads * 2;
    var twiceCows = legs - double;
    var cows = twiceCows/2;
    var chickens = heads - cows;
    if (chickens < 0 || cows < 0){
      return "No solutions";
    } else if (chickens % 1 == 0 && cows % 1 == 0){
      return [chickens, cows];
    } else {
      return "No solutions"
    }
  } else if (heads === 0 && legs === 0) {
    return [0, 0];
  } else if (heads <= 0 || legs <= 0) {
    return "No solutions";
  }
}
                // a better solution:
                function animals(heads, legs){
                  if (heads == 0 && legs == 0)
                    return [0, 0];

                  if (heads < 0 || legs < 0)
                    return 'No solutions';

                  var c = legs/2 - heads;
                  var h = heads - c;

                  if (h < 0 || c < 0 || h%1 > 0 || c%1 > 0)
                    return 'No solutions';

                  return [h, c];
                }

// 8. Sum without highest and lowest number
function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a, b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
        total += array[i];
    }
    return total;
  }
}

// 9. Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
function remove(s){
  s = s.replace(/!+/g, '');
  return s + '!';
}

// 10. Invert values
function invert(array) {
  var inverted = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 0){
      inverted.push(array[i] = 0);
    } else if(array[i] > 0){
      inverted.push(-array[i]);
    } else if (array[i] < 0) {
      inverted.push(Math.abs(array[i]));
    }
  }
  return inverted;
}
                  // a better solutions
                  function invert(array) {
                     return array.map( x => x === 0 ? x : -x);
                  }

// 11. 
