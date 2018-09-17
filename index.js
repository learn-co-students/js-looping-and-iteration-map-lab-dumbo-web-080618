function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {return driver.toLowerCase();});
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    const driverArray = driver.split(' ');
    const firstName = driverArray[0];
    const lastName = driverArray[1];
    return { firstName: firstName, lastName: lastName };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
