function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase()
  })
}

function nameToAttributes(drivers) {
return  drivers.map(function(driver) {
    const newArray = driver.split(" ")
    // debugger
    return {firstName: newArray[0], lastName: newArray[1]}
    //  this function takes an array of drivers with their first and last name
    // separated by a space, and returns an array
    // of JavaScript objects with firstName and lastName attributes.
  })
}

function attributesToPhrase(drivers) {
return drivers.map(function(driver) {
  return `${driver.name} is from ${driver.hometown}`
})
}
