function skipytest() {
let str = "hellowordtest";
if (str.length > 4) {
  console.log(str.slice(0, str.length - 4).replace(/./g, "#") + str.slice(-4));
  console.log(str.slice(-4));
}
}
skipytest();

function howmanyrepeated(str) {
  try {
    return str
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/(.)\1+/g).length;
  } catch (e) {
    return 0;
  }
}
console.log(howmanyrepeated("Indivisibilities"));


// let teststr = "WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB";

// console.log(song.split("WUB").join(" ").replace(/\s+/g, " ").trim());
