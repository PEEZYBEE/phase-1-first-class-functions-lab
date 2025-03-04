// Code your solution in this file!
// 1. Returns the first two drivers
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);  // Get the first two drivers
  }
  
  // 2. Returns the last two drivers
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);  // Get the last two drivers
  }
  
  // 3. Array containing the two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // 4. Returns a function that multiplies the fare by the given multiplier
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // 5. Doubles the fare
  function fareDoubler(fare) {
    return fare * 2;
  }
  
  // 6. Triples the fare
  function fareTripler(fare) {
    return fare * 3;
  }
  
  // 7. Returns a function to select different drivers based on the passed function
  function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers);
}
  