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

// 11. Remove exclamation marks
function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}

// 12. Number of People in the Bus
var number = function(busStops){
  var totalPeople = 0;
  for (var i=0; i<busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}

// 13. Keep Hydrated!
Keep Hydrated!
function litres(time) {
  return Math.floor(time/2);
}

// 14. How many stairs will Suzuki climb in 20 years?
function stairsIn20(s){
  var sum = 0;
  for(var i = 0; i < s.length; i++){
    for(var j = 0; j < s[i].length; j++){
      sum += s[i][j];
    }
  }
  return sum * 20;
}

//15. Pre-FizzBuzz Workout #1
function preFizz(n) {
  var arr = [];
  for (var i = 1; i <= n; i++){
    arr.push(i);
  }
  return arr;
}

// 16. Keep up the hoop
function hoopCount (n) {
  return (n <= 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}

function hoopCount (n) {
  if(n >= 10) {
    return "Great, now move on to tricks";
  } else if(n < 10) {
    return "Keep at it until you get it";
  }
}

// 17. Simple Fun #40: Timed Reading
function timedReading(maxLength, text) {
  var count = 0;
  if (text === "..."){
    return 0;
  } else {
    text = text.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"");
    var word = text.split(' ');
    console.log(word);

    for(var j = 0; j < word.length; j++){
      if(word[j].length <= maxLength){
        console.log(word[j]);
        count += 1;
        console.log(count);
      }
    }
    return count;
  }
}

// 18. Simple Fun #20: First Reverse Try
function firstReverseTry(arr) {
  var newArr = []
  if(arr.length === 0){
    return newArr;
  } else if (arr.length === 1){
    newArr.push(arr[0]);
    return newArr;
  } else {
    newArr = arr.splice(1, (arr.length - 2));
    newArr.unshift(arr[arr.length-1]);
    newArr.push(arr[0]);
    return newArr;
  }
}

//19. Simple Fun #17: Rounders
function rounders(value) {
  power = value.toString().length - 1;
  for (i = 0; i < power; i++) {
    value = Math.round(value / 10);
  }
  return value * Math.pow(10, power);
}

// 20. mumbler
function accum(s) {
  var letters = s.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}

// 21. Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
function remove(s,n){
  for (let i = 0; i < n; i++) s = s.replace(/\!/, '');
  return s;
}

// 22. Dollars and Cents
function formatMoney(num){
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1")
}
// or
function formatMoney(amount){
  return '$' + amount.toFixed(2);
}

// 23.
