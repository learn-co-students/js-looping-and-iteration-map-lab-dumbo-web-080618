
function lowerCaseDrivers(drivers){
  const newArr = drivers.slice(0)
    return newArr.map(function(name) {
    return name.toLowerCase();
    });
  return newArr
}

function nameToAttributes(list) {
  return list.map(function(names) {
    let name = names.split(" ")
      return {firstName: name[0], lastName: name[1]}
  })
}

function attributesToPhrase(object) {
  return object.map(function(person) {
    return `${person.name} is from ${person.hometown}`
  })
}
