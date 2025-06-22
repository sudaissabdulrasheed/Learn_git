function reverseString(str) {
  return str.split("").reverse().join("");
}
// reverseString("hello") → "olleh"
function findMax(arr) {
  return Math.max(...arr);
}
function findMin(arr) {
  return Math.min(...arr);
}
// findMax([3,7,2]) → 7; findMin([3,7,2]) → 2
function factorial(n) {
  if (n < 0) return null;
  return n === 0 ? 1 : n * factorial(n - 1);
}
// factorial(5) → 120
