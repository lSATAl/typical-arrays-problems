
exports.min = function min (array = []) {
    if(array.length === 0) {
      return 0;
    } else {
  let min = array[0];
  for(let i = 0; i < array.length; i++) {
    if (min > array[i]) min = array[i];
  }
  return min
}
}

exports.max = function max (array=[]) {
    if(array.length === 0) {
        return 0;
    }
    let max = array[0];
    for(let i = 0; i < array.length; i++) {
      if (max < array[i]) max = array[i];
    }
    return max
}

exports.avg = function avg (array=[]) {
    if (array === undefined) {
        return 0;
      }
    if(array.length === 0) {
        return 0;
    }
let summ = 0;
  for(let i = 0; i < array.length; i++) {
    summ += array[i]
  }
  return summ / array.length
}
