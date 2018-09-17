// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(x => x.toLowerCase());
}

function nameToAttributes(drivers) {

  return drivers.map(function(drive) {
      let driverArr = drive.split(" ");
      let fName = driverArr[0];
      let lName = driverArr[1];
      return { firstName: fName, lastName: lName }

    });
};

function attributesToPhrase(arr) {
    newArr = []
   arr.map(function(driver) {

  const name = driver['name'];
  const homeTown = driver['hometown'];
   newArr.push(`${name} is from ${homeTown}`)

  });
  return newArr
};
