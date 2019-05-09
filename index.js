// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const newArr = [];
  drivers.map(function (driver) {
   newArr.push(driver.toLowerCase());
  })
  return newArr
}

function nameToAttributes(drivers) {
  const obj = drivers.map(function (driver) {
    return Object.assign({}, {firstName: driver.split(" ")[0]}, {lastName: driver.split(" ")[1]})
  })
  return obj
}

function attributesToPhrase(drivers) {
  const phrase = drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
  return phrase
}

