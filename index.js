// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const zohra = driver.split(' ')
    const firstName = zohra[0]
    const lastName = zohra[1]
    return {firstName: firstName, lastName: lastName}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
