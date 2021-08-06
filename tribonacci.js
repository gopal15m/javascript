function tribonacci(signature, n) {

  if (n == 0) {
    return [];
  } else if (n === 1) {
    return [signature[0]];
  } else if (n > 1){
    for (let i = 3; i < n; i++) {
      signature.push(signature[i - 3] + signature[i - 2] + signature[i - 1]);
    }

  }
  return signature;
  }

console.log(tribonacci([18, 5, 4], 1));

function tribonacci2(signature,n){
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
