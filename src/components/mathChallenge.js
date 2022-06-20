function MathChallenge(num) {
  let numString = num.toString();
  let stringArray = numString.split("");
  var flag = true;
  stringArray.map((str) => {
    if (Number(str) % 2 !== 0) {
      flag = false;
    }
  });
  return flag;
}
console.log(MathChallenge(3005));
