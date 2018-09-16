// Code your solution in this file.
// This lab contains an array of drivers with various information. We need to write methods using the map method so that Scuber employees can easily change the data into the format their various business rules require. Be sure to run the tests to get a feel for the types of problems this lab is asking you to solve before you start writing JavaScript code.

function lowerCaseDrivers(drivers) {
  return drivers.map((driver)=> driver.toLowerCase())
}

// nameToAttributes(drivers)).to.eql([
//   { firstName: 'Bobby',   lastName: 'Smith'     },

function nameToAttributes(drivers) {
  return drivers.map((driver)=> Object.assign({}, {firstName: driver.split(' ')[0], lastName: driver.split(' ')[1]}))
}
//Bobby is from Pittsburgh'
function attributesToPhrase(drivers) {
  return drivers.map((driver)=> `${driver.name} is from ${driver.hometown}`)
}