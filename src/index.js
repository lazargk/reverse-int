module.exports = function reverse (n) {
  let res = "";
  let str = "" + n;
  const count = str.length; 
  for (let i = 0; i < count; i++){
      res = res + str[count - 1 - i];
  }
  return parseInt(res);
}
