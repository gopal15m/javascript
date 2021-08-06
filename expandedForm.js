//You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
  const nStr = String(num);
  let str = "";
  for (let i = 0; i < nStr.length; i++) {
    const val = +(nStr[i] * Math.pow(10, nStr.length - 1 - i));

    if (nStr.length - i > 1 && val != '0') {
      //console.log(val);
      str += `${val}+`;
    } else if ( val != '0'){
      str += val;
    }
  }
  return (str[str.length - 1] === '+'? str.substring(0, str.length-1) : str).split('+').join(' + ');
  //return str.substring(0, str.length-1);
}

console.log(expandedForm(9000000));

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");
