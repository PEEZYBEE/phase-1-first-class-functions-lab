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
  
  
  function fareDoubler(fare) {
    return fare * 2;
  }
  
 
  function fareTripler(fare) {
    return fare * 3;
  }
  
 
  function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers);
  }
  