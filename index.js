// Code your solution in this file.

function lowerCaseDrivers(drivers){
  const m = map(drivers, function(name) {
    return name.toLowerCase();
  });
  return m;
}

function nameToAttributes(drivers){
  var m = drivers.map(function(name) {
    let a = name.split(" ")
    return {firstName:a[0], lastName:a[1] }
  });
  return m
}

function attributesToPhrase(drivers){
  var m = drivers.map(function(name) {
    return name.name + " is from " + name.hometown
  });
  return m
}

function map(array, callback) {
    const newArr = [];

    for (const element of array) {
        newArr.push(callback(element));
    }

    return newArr;
}
