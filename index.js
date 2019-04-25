// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowercase = drivers.map(driver => driver.toLowerCase())
return lowercase
};

function nameToAttributes(drivers) {
  return drivers.map(driver => {
    const parts = driver.split(' ');
    return {
      firstName: parts[0],
      lastName: parts[1]
    };
  });
};

function attributesToPhrase(drivers) {
  const newarray = drivers.map(driver => {
    return `${driver.name} is from ${driver.hometown}`
  });
return newarray
};
      
  