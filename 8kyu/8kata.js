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
