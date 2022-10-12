function capitalize(string) {
  if(typeof string === 'string') {
    return string[0].toUpperCase() + string.slice(1);
  } else {
    throw new Error('Please insert an string');
  }

}

module.exports = capitalize;