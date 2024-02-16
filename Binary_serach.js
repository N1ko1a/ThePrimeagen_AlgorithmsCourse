function Binary_search(haystack, needle) {
  let lo = 0;
  let hi = haystack.length - 1;

  do {
    const m = Math.floor((lo + hi) / 2);
    const v = haystack[m];
    if (v === needle) {
      return true;
    } else if (v > needle) {
      hi = m - 1;
    } else {
      lo = m + 1;
    }
  } while (lo <= hi);
  return false;
}

const array = [1, 2, 3, 4, 5];
console.log(Binary_search(array, 1));
console.log(Binary_search(array, 2));
console.log(Binary_search(array, 3));
console.log(Binary_search(array, 4));
console.log(Binary_search(array, 5));
console.log(Binary_search(array, 20));
