// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(driver => driver.toLowerCase());
};

function nameToAttributes(drivers){
    let objectsArray = drivers.map(function(driversName){
      let splitName = driversName.split(' ');
      return {firstName: splitName[0], lastName: splitName[1]};
    });
    return objectsArray;
};

function attributesToPhrase(drivers){
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`);
}
