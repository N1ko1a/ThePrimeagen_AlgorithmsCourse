function Linear_search(haystack, needle) {
  for (let i = 0; i < haystack.length; ++i) {
    if (haystack[i] === needle) {
      return true;
    }
  }
  return false;
}

const array = [1, 2, 3, 4, 5, 6];
console.log(Linear_search(array, 5));
console.log(Linear_search(array, 7));
