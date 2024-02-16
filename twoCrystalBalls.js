function two(breaks) {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jmpAmount;
  for (; i < breaks.length; i += jmpAmount) {
    if (breaks[i]) {
      break;
    }
  }
  i -= jmpAmount;
  for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
}

function linear_search(breaks) {
  for (let i = 0; i < breaks.length; ++i) {
    if (breaks[i]) {
      return i;
    }
  }
}

let idx = Math.floor(Math.random() * 10000);
const data = new Array(10000).fill(false);

for (let i = idx; i < 10000; ++i) {
  data[i] = true;
}

console.log(two(data));
console.log(linear(data));
