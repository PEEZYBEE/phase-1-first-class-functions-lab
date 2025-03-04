// Code your solution in this file!

// 1. Returns the first two drivers
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);  // Get the first two drivers
  }
  
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);  
  }
  
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  
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
  