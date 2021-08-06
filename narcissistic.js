function narcissistic(value) {
  // Code me to return true or false
  let temp = 0;
  let str = value.toString();
  for (let i = 0; i < str.length; i++) {
    temp +=  Math.pow(str[i], str.length);
    console.log(Math.pow(str[i], str.length));
  }
  return temp === value? true : false;
}
console.log(narcissistic(371));

function splitToDigit(n){
  return[...n + ''].map(num => num ** [...n + ''].length).reduce((a, b) => a +b) == n;
}

console.log(splitToDigit(371));

function narcissistic( value ) {
  return ('' + value).split('').reduce(function(p, c){
    return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}
