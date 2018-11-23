const ftoc = function(temp) {
    let newTemp = ((temp - 32) * (5/9));
    return +newTemp.toFixed(1);
}

const ctof = function(temp) {
    let newTemp = (temp * (9/5) + 32);
    return +newTemp.toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}
