function formatDuration(seconds){
  const y = Math.floor(seconds / 31536000);
  //const m = Math.floor(seconds /  3600);
  const d = Math.floor((seconds %  31536000) / 86400);
  const h = Math.floor((seconds %  86400) / 3600);
  const m = Math.floor((seconds %  3600)/60);
  const s = Math.round(seconds % 60);

var yDisplay = y > 0 ? y + (y == 1 ? " year, " : " years, ") : "";
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
//return yDisplay + dDisplay + hDisplay + mDisplay + sDisplay;
  //return[y, d, h,m,s];

  let display = yDisplay + dDisplay + hDisplay + mDisplay + sDisplay;
return display[display.length - 1] === ' ' ? display.substring(0, display.length-2) : display;
}

console.log(formatDuration(3662));


function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}
