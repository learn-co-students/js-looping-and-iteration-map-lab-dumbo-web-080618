// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(function (n) {
    return n.toLowerCase();
  })
}

function nameToAttributes(arr) {
  return arr.map(function (n) {
    let name = n.split(' ');
    return {firstName: name[0], lastName: name[1]};
  })
}

function attributesToPhrase(arr) {
  return arr.map(function (n) {
    return `${n.name} is from ${n.hometown}`;
  })
}
