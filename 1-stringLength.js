function stringLength(string) {
    if (string.length > 10) {
        throw new Error('string.length greater than 10');
      }
  if (string.length < 1) {
    throw new Error('string.length less than 1');
  }

  return string.length;
}

module.exports = stringLength;