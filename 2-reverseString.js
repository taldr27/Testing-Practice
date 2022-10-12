function reverseString(string) {
  let split = string.split('');
  let fin = split.reverse().join('');
  return fin;
}

module.exports = reverseString;